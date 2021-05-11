import StateMachine from "../util/StateMachine.js";
import SpriteEntity from "./SpriteEntity.js";

export default class Player extends SpriteEntity {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.setCollideWorldBounds(true)
        this.speed = 100
        this.jumpForce = -150
        this.attack = Phaser.Math.Between(20, 150)
        this.lastShot = 0
        this.hp = 1000
        this.stateMachine = null
        this.setScale(0.8)
        this.init()
    }

    init() {
        this.stateMachine = new StateMachine(this, 'player')
        this.stateMachine.addState('idle', { onEnter: this.idleOnEnter, onUpdate: this.idleOnUpdate })
        this.stateMachine.addState('run', { onEnter: this.runOnEnter, onUpdate: this.runOnUpdate })
        this.stateMachine.addState('jump', { onEnter: this.jumpOnEnter, onUpdate: this.jumpOnUpdate })
        this.stateMachine.addState('shooting', { onEnter: this.shootingOnEnter, onUpdate: this.shootingOnUpdate})
        this.stateMachine.addState('dead', { onEnter: this.deadOnEnter})
        this.stateMachine.addState('crouch', { onEnter: this.crouchOnEnter, onUpdate: this.crouchOnUpdate, onExit: this.crouchOnExit})
        this.stateMachine.addState('crouch_fire', { onEnter: this.crouchFireOnEnter, onUpdate: this.crouchFireOnUpdate, onExit: this.crouchFireOnExit})
        this.stateMachine.setState('idle')
    }

    update(time, deltaTime) {
        this.stateMachine.update(deltaTime)
    }

    decreaseHp(attack) {
        this.hp -= attack
        if (this.hp <= 0) {
            this.stateMachine.setState('dead')
        }
    }

    idleOnEnter() {
        this.anims.play('player_idle', true)
    }

    idleOnUpdate() {
        if (this.scene.cursors.right.isDown || this.scene.cursors.left.isDown) {
            this.stateMachine.setState('run')
        }else if(this.scene.cursors.a.isDown){
            this.stateMachine.setState('shooting')
        }else if(this.scene.cursors.down.isDown){
            this.stateMachine.setState('crouch')
        }

        const isSpaceJustPressed = Phaser.Input.Keyboard.JustDown(this.scene.cursors.space)
        if (isSpaceJustPressed && this.body.onFloor()) {
            this.stateMachine.setState('jump')
        }
    }

    runOnEnter() {
        this.anims.play('player_run', true)
    }

    runOnUpdate() {
        if (this.scene.cursors.right.isDown) {
            this.setVelocityX(this.speed)
            this.flipX = false
        } else if (this.scene.cursors.left.isDown) {
            this.setVelocityX(-this.speed)
            this.flipX = true
        } else {
            this.setVelocityX(0)
            this.stateMachine.setState('idle')
        }

        const isSpaceJustPressed = Phaser.Input.Keyboard.JustDown(this.scene.cursors.space)
        if (isSpaceJustPressed && this.body.onFloor()) {
            this.stateMachine.setState('jump')
        }

    }

    jumpOnEnter() {
        this.setVelocityY(this.jumpForce)
        this.anims.play('player_jump')
    }

    jumpOnUpdate() {
        
        if (this.scene.cursors.right.isDown) {
            this.setVelocityX(this.speed)
            this.flipX = false
        } else if (this.scene.cursors.left.isDown) {
            this.setVelocityX(-this.speed)
            this.flipX = true
        } else if(this.scene.cursors.a.isDown){
            this.stateMachine.setState('shooting')
        }else {
            this.setVelocityX(0)
        }

        if(this.body.onFloor()){this.stateMachine.setState('idle')}
    }

    shootingOnEnter() {
        this.anims.play('player_fire')
        this.setVelocityX(0)
    }

    shootingOnUpdate() {
        if (this.scene.cursors.right.isDown || this.scene.cursors.left.isDown) {
            this.stateMachine.setState('run')
        }else if(this.scene.cursors.a.isUp){
            this.stateMachine.setState('idle')
        }else if(this.scene.cursors.down.isDown){
            this.stateMachine.setState('crouch_fire')
        }

        const isSpaceJustPressed = Phaser.Input.Keyboard.JustDown(this.scene.cursors.space)
        if (isSpaceJustPressed && this.body.onFloor()) {
            this.stateMachine.setState('jump')
        }
    }

    crouchOnEnter(){
        this.anims.play('player_down', true)
        this.body.setOffset(0, 12)
        this.body.height = 23
    }

    crouchOnUpdate(){
        if (this.scene.cursors.right.isDown || this.scene.cursors.left.isDown) {
            this.stateMachine.setState('run')
        }else if(this.scene.cursors.down.isUp){
            this.stateMachine.setState('idle')
        }else if(this.scene.cursors.a.isDown){
            this.stateMachine.setState('crouch_fire')
        }

        const isSpaceJustPressed = Phaser.Input.Keyboard.JustDown(this.scene.cursors.space)
        if (isSpaceJustPressed && this.body.onFloor()) {
            this.stateMachine.setState('jump')
        }
    }
    

    crouchOnExit(){
        this.body.height = 32
        this.body.setOffset(0, 0)
    }

    crouchFireOnEnter(){
        this.anims.play('player_down_fire', true)
        this.body.setOffset(0, 12)
        this.body.height = 23
    }

    crouchFireOnUpdate(){
        if (this.scene.cursors.right.isDown || this.scene.cursors.left.isDown) {
            this.stateMachine.setState('run')
        }else if(this.scene.cursors.down.isUp){
            this.stateMachine.setState('idle')
        }else if(this.scene.cursors.a.isUp){
            this.stateMachine.setState('crouch')
        }

        const isSpaceJustPressed = Phaser.Input.Keyboard.JustDown(this.scene.cursors.space)
        if (isSpaceJustPressed && this.body.onFloor()) {
            this.stateMachine.setState('jump')
        }
    }

    crouchFireOnExit(){
        this.body.height = 32
        this.body.setOffset(0, 0)
    }

    deadOnEnter() {
        this.setVelocityX(0)
        this.anims.play('player_dying', true)
        this.scene.time.delayedCall(1500, () => { this.scene.scene.start('gameoverscene') })
    }

}