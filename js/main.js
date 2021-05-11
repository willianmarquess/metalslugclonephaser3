import BootGame from './scenes/BootGame.js'
import PlayGame from './scenes/PlayGame.js'
import GameOver from './scenes/GameOver.js'
import TitleGame from './scenes/TitleGame.js'

const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 400,
    fps: {
        target: 30
    },
    scene: [BootGame, TitleGame, PlayGame, GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },

}

new Phaser.Game(config)