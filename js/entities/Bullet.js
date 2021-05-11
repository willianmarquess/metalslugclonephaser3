import SpriteEntity from "./SpriteEntity.js";

export default class Bullet extends SpriteEntity {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
        this.setScale(0.2, 0.2)
        this.range = 500
        this.velocity = 300
        this.gameObject = null
        this.init()
    }

    init() {
        this.anims.play('bullet')
    }

    setAttachGameObject(gameObject, posx, posy) {
        if (gameObject) {
            this.y = posy
            this.x = posx
            this.flipX = gameObject.flipX
            this.gameObject = gameObject
            this.initXPosition = this.x
        }
    }

    update() {
        if (this.gameObject) {
            if (this.x > (this.initXPosition + this.range) && !this.flipX || this.x < (this.initXPosition + this.range) && this.flipX) {
                this.destroy()
            }
            else {
                this.body.setVelocityX(this.velocity)
            }
        }
    }

    shoot() {
        if (this.flipX) {
            this.range = -this.range
            this.velocity = -this.velocity
            this.x = this.x - 50
        }
        this.setActive(true)
        this.setVisible(true)
    }
}