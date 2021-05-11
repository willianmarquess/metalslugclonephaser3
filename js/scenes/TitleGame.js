export default class TitleGame extends Phaser.Scene{
    constructor(){
        super('titlescene')
    }

    create(){
        this.add.image(0,0, 'title').setOrigin(0)
        this.input.keyboard.on('keydown', () => {
            this.scene.start('playscene')
        })
    }
}