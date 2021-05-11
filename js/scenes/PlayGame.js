import Bullet from "../entities/Bullet.js"
import Enemy from "../entities/Enemy.js"
import Player from "../entities/Player.js"

export default class PlayGame extends Phaser.Scene {
    constructor() {
        super('playscene')
        this.player = null
        this.bullets = null
        this.enemyBullets = null
        this.enemies = []
        this.obstacles = null
    }

    init() {
        console.log('init  -- PLAYSCENE --')
        this.cursors = this.keys = this.input.keyboard.addKeys({
            a: Phaser.Input.Keyboard.KeyCodes.A,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN
        })
    }

    create() {
        console.log('create  -- PLAYSCENE --')

        this.add.image(0, 0, 'background1').setOrigin(0)
        const mapa2 = this.make.tilemap({ key: 'mapa2' })
        const objectsLayer = mapa2.getObjectLayer('objectlayer')

        this.enemies = this.physics.add.group({
            classType: Enemy,
            defaultKey: 'enemy',
            runChildUpdate: true,
            maxSize: -1
        })

        this.obstacles = this.physics.add.staticGroup()
    
        objectsLayer.objects.forEach(object => {
            const { x, y, name, width, height } = object

            switch (name) {
                case 'player_spawn':
                    this.player = new Player(this, x, y, 'idle1')
                    this.player.on('animationstart', function (anim, frame) {
                        //console.log('Playing ' + anim.key)
                        //console.log(frame)
            
                    })
                    break
                case 'enemy_spawn':
                    this.enemies.get(x, y, 'enemy_idle0')
                    break

                case 'obs':
                    const rect = this.add.rectangle(x, y, width, height).setOrigin(0)
                    this.obstacles.add(rect)
                    break
                    
            }
        })

        this.bullets = this.physics.add.group({
            classType: Bullet,
            defaultKey: 'bullet',
            runChildUpdate: true,
            maxSize: -1,
            allowGravity: false
        })

        this.enemyBullets = this.physics.add.group({
            classType: Bullet,
            defaultKey: 'bullet',
            runChildUpdate: true,
            maxSize: -1,
            allowGravity: false
        })
        this.physics.add.collider(this.obstacles, this.player)
        this.physics.add.collider(this.obstacles, this.enemies)
        this.physics.add.collider(this.enemies, this.player, (enemy, player) => {
            this.player.decreaseHp(1000)
        })
        this.physics.add.overlap(this.enemies, this.bullets, (enemy, bullet) => {
            enemy.decreaseHp(bullet.gameObject.attack)
            bullet.destroy()
        })

        this.physics.add.overlap(this.player, this.enemyBullets, (player, bullet) => {
            bullet.destroy()
            player.decreaseHp(bullet.gameObject.attack)
        }, null, this)

        this.physics.world.setBounds(0, 0, 3455, 448)
       this.cameras.main.startFollow(this.player, true)
       this.cameras.main.setBounds(0, 0, 3455, 448, true)
    }

    update(time, deltaTime) {
        if (this.player) this.player.update(time, deltaTime)

        this.enemies.getChildren().forEach(enemy => {
            enemy.radar(this.player)
            if(enemy.isShooting && time > (enemy.lastShot + 1050)){
                let bullet = this.enemyBullets.get()
                if(bullet){
                    bullet.setAttachGameObject(enemy, enemy.x + 20, enemy.y - 7)
                    bullet.shoot()
                    enemy.lastShot = time
                }
            }
        })

        if ((this.player.stateMachine.isCurrentState('shooting') || this.player.stateMachine.isCurrentState('crouch_fire')) && time > (this.player.lastShot + 150)) {
            let bullet = this.bullets.get(0,0)
            if (bullet) {
                if (this.player.stateMachine.isCurrentState('crouch_fire')) {
                    bullet.setAttachGameObject(this.player, this.player.x + 20, this.player.y + 3)
                }else{
                    bullet.setAttachGameObject(this.player, this.player.x + 20, this.player.y - 7)
                }
                bullet.shoot()
                this.player.lastShot = time
            }
        }
    }
}