import SpriteEntity from "./SpriteEntity.js";

export default class Enemy extends SpriteEntity {
    constructor(scene, x, y, texture, player) {
        super(scene, x, y, texture)
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.setCollideWorldBounds(true)
        this.speed = 60
        this.delayMovimentation = 500
        this.radarRange = 300;
        this.playerInradarRange = false
        this.lastMovementTime = null
        this.timeDamage = null
        this.hp = Phaser.Math.Between(750, 1000)
        this.attack = Phaser.Math.Between(50, 200)
        this.takeDamage = false
        this.isShooting = false
        this.lastShot = 0
        this.setScale(0.8)
        this.init()
    }

    init() {
        this.anims.play('enemy_idle')
    }

    update(number, deltaTime) {

        if(this.takeDamage){
            if(number > (this.timeDamage + 200)){
                this.tintFill = true
                this.timeDamage = number
                this.takeDamage = false
            }
        }else{
            this.tintFill = false
        }

        /* basic enemy movimentation */
        if (number > (this.lastMovementTime + this.delayMovimentation) && !this.playerInradarRange) {
            const randomMovimentation = Phaser.Math.Between(1, 500)
            if (randomMovimentation < 100) {
                this.flipX = true
                this.setVelocityX(-this.speed)
                this.anims.play('enemy_run')
            }
            else if (randomMovimentation >= 100 && randomMovimentation < 200) {
                this.flipX = false
                this.setVelocityX(this.speed)
                this.anims.play('enemy_run')
            } else {
                this.stop()
            }
            this.lastMovementTime = number
        }

        

    }

    decreaseHp(attack){
        this.hp -= attack
        if(this.hp <= 0) this.destroy()
        this.takeDamage = true
    }

    radar(player) {
        if (player) {
            const distanceX = this.body.x - player.body.x
            const distanceY = this.body.y - player.body.y
            if (player.body.x <= this.body.x) {
                if (distanceX <= this.radarRange && distanceY >= -10 && distanceY <= 10) {
                    this.flipX = (distanceX <= this.radarRange)
                    this.playerInradarRange = true
                    this.fire()
                } else {
                    this.playerInradarRange = false
                    this.isShooting = false
                }
            } else {
                if (distanceX >= -this.radarRange && distanceY >= -10 && distanceY <= 10) {
                    this.flipX = false
                    this.playerInradarRange = true
                    this.fire()
                } else {
                    this.playerInradarRange = false
                    this.isShooting = false
                }
            }
        }
    }

    stop() {
        this.setVelocityX(0)
        this.anims.play('enemy_idle', true)
    }

    fire() {
        this.setVelocityX(0)
        this.anims.play('enemy_fire', true)
        this.isShooting = true
    }
}