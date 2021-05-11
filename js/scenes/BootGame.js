export default class BootGame extends Phaser.Scene{
    constructor(){
        super('bootgame')
    }

    preload(){
        console.log('preload  -- BOOTGAME --')

        /* PLAYER IDLE */
        this.load.image('idle1', 'assets/player1/idle/idle1.png')
        this.load.image('idle2', 'assets/player1/idle/idle2.png')
        this.load.image('idle3', 'assets/player1/idle/idle3.png')

        /* PLAYER RUN */
        this.load.image('run0', 'assets/player1/run/run0.png')
        this.load.image('run1', 'assets/player1/run/run1.png')
        this.load.image('run2', 'assets/player1/run/run2.png')
        this.load.image('run3', 'assets/player1/run/run3.png')
        this.load.image('run4', 'assets/player1/run/run4.png')
        this.load.image('run5', 'assets/player1/run/run5.png')
        this.load.image('run6', 'assets/player1/run/run6.png')

        /* PLAYER FIRE */
        this.load.image('fire1', 'assets/player1/fire/fire1.png')
        this.load.image('fire2', 'assets/player1/fire/fire2.png')
        this.load.image('fire3', 'assets/player1/fire/fire3.png')
        this.load.image('fire4', 'assets/player1/fire/fire4.png')

        /* PLAYER JUMP */
        this.load.image('jump1', 'assets/player1/jump/jump00.png')
        this.load.image('jump2', 'assets/player1/jump/jump01.png')
        this.load.image('jump3', 'assets/player1/jump/jump02.png')
        this.load.image('jump4', 'assets/player1/jump/jump03.png')
        this.load.image('jump5', 'assets/player1/jump/jump04.png')
        this.load.image('jump6', 'assets/player1/jump/jump05.png')
        this.load.image('jump7', 'assets/player1/jump/jump06.png')
        this.load.image('jump8', 'assets/player1/jump/jump07.png')
        this.load.image('jump9', 'assets/player1/jump/jump08.png')
        this.load.image('jump10', 'assets/player1/jump/jump09.png')
        this.load.image('jump11', 'assets/player1/jump/jump10.png')
        this.load.image('jump12', 'assets/player1/jump/jump11.png')
        this.load.image('jump13', 'assets/player1/jump/jump12.png')

        /* PLAYER DYING */
        this.load.image('dying0', 'assets/player1/dying/dying00.png')
        this.load.image('dying1', 'assets/player1/dying/dying01.png')
        this.load.image('dying2', 'assets/player1/dying/dying02.png')
        this.load.image('dying3', 'assets/player1/dying/dying03.png')
        this.load.image('dying4', 'assets/player1/dying/dying04.png')
        this.load.image('dying5', 'assets/player1/dying/dying05.png')
        this.load.image('dying6', 'assets/player1/dying/dying06.png')
        this.load.image('dying7', 'assets/player1/dying/dying07.png')
        this.load.image('dying8', 'assets/player1/dying/dying08.png')
        this.load.image('dying9', 'assets/player1/dying/dying09.png')
        this.load.image('dying10', 'assets/player1/dying/dying10.png')
        this.load.image('dying11', 'assets/player1/dying/dying11.png')
        this.load.image('dying12', 'assets/player1/dying/dying12.png')
        this.load.image('dying13', 'assets/player1/dying/dying13.png')
        this.load.image('dying14', 'assets/player1/dying/dying14.png')
        this.load.image('dying15', 'assets/player1/dying/dying15.png')
        this.load.image('dying16', 'assets/player1/dying/dying16.png')
        this.load.image('dying17', 'assets/player1/dying/dying17.png')
        this.load.image('dying18', 'assets/player1/dying/dying18.png')

        /* PLAYER TURN DOWN */
        this.load.image('turndown0', 'assets/player1/down/turndown0.png')
        this.load.image('turndown1', 'assets/player1/down/turndown1.png')
        this.load.image('turndown2', 'assets/player1/down/turndown2.png')

        /* PLAYER DOWN */
        this.load.image('down0', 'assets/player1/down/down0.png')
        this.load.image('down1', 'assets/player1/down/down1.png')
        this.load.image('down2', 'assets/player1/down/down2.png')
        this.load.image('down3', 'assets/player1/down/down3.png')

        /* PLAYER DOWN FIRE */
        this.load.image('downfire0', 'assets/player1/downfire/downfire0.png')
        this.load.image('downfire1', 'assets/player1/downfire/downfire1.png')
        this.load.image('downfire2', 'assets/player1/downfire/downfire2.png')
        this.load.image('downfire3', 'assets/player1/downfire/downfire3.png')
        this.load.image('downfire4', 'assets/player1/downfire/downfire4.png')
        this.load.image('downfire5', 'assets/player1/downfire/downfire5.png')
        this.load.image('downfire6', 'assets/player1/downfire/downfire6.png')

        /* bullet */
        this.load.image('bullet0', 'assets/bullet/bullet0.png')
        this.load.image('bullet1', 'assets/bullet/bullet1.png')
        this.load.image('bullet2', 'assets/bullet/bullet2.png')
        this.load.image('bullet3', 'assets/bullet/bullet3.png')

        /* ENEMY IDLE */
        this.load.image('enemy_idle0', 'assets/enemies/idle/idle0.png')
        this.load.image('enemy_idle1', 'assets/enemies/idle/idle1.png')
        this.load.image('enemy_idle2', 'assets/enemies/idle/idle2.png')
        this.load.image('enemy_idle3', 'assets/enemies/idle/idle3.png')

        /* ENEMY RUN */
        this.load.image('enemy_run0', 'assets/enemies/run/run00.png')
        this.load.image('enemy_run1', 'assets/enemies/run/run01.png')
        this.load.image('enemy_run2', 'assets/enemies/run/run02.png')
        this.load.image('enemy_run3', 'assets/enemies/run/run03.png')
        this.load.image('enemy_run4', 'assets/enemies/run/run04.png')
        this.load.image('enemy_run5', 'assets/enemies/run/run05.png')
        this.load.image('enemy_run6', 'assets/enemies/run/run06.png')
        this.load.image('enemy_run7', 'assets/enemies/run/run07.png')
        this.load.image('enemy_run8', 'assets/enemies/run/run08.png')
        this.load.image('enemy_run9', 'assets/enemies/run/run09.png')
        this.load.image('enemy_run10', 'assets/enemies/run/run10.png')
        this.load.image('enemy_run11', 'assets/enemies/run/run11.png')

        /* ENEMY SHOOTING */
        this.load.image('enemy_fire0', 'assets/enemies/shooting/shooting00.png')
        this.load.image('enemy_fire1', 'assets/enemies/shooting/shooting01.png')
        this.load.image('enemy_fire2', 'assets/enemies/shooting/shooting02.png')
        this.load.image('enemy_fire3', 'assets/enemies/shooting/shooting03.png')
        this.load.image('enemy_fire4', 'assets/enemies/shooting/shooting04.png')
        this.load.image('enemy_fire5', 'assets/enemies/shooting/shooting05.png')
        this.load.image('enemy_fire6', 'assets/enemies/shooting/shooting06.png')
        this.load.image('enemy_fire7', 'assets/enemies/shooting/shooting07.png')
        this.load.image('enemy_fire8', 'assets/enemies/shooting/shooting08.png')
        this.load.image('enemy_fire9', 'assets/enemies/shooting/shooting09.png')

        /* TILE MAP */
        this.load.image('tiles', 'assets/map/tiles.png')
        this.load.image('nebula', 'assets/map/nebula.png')
        this.load.image('background1', 'assets/map/map2.png')
        this.load.image('image1', 'assets/map/0.png')
        this.load.tilemapTiledJSON('mapa1', 'assets/map/mapa1.json')
        this.load.tilemapTiledJSON('mapa2', 'assets/map/mapa2.json')

        /* GAMEOVER BACKGROUND */
        this.load.image('gameover0', 'assets/backgrounds/gameover/gameover0.gif') 
        this.load.image('gameover1', 'assets/backgrounds/gameover/gameover1.gif') 
        this.load.image('gameover2', 'assets/backgrounds/gameover/gameover2.gif') 
        this.load.image('gameover3', 'assets/backgrounds/gameover/gameover3.gif') 
        this.load.image('gameover4', 'assets/backgrounds/gameover/gameover4.gif') 
        this.load.image('gameover5', 'assets/backgrounds/gameover/gameover5.gif') 
        this.load.image('gameover6', 'assets/backgrounds/gameover/gameover6.gif') 
        this.load.image('gameover7', 'assets/backgrounds/gameover/gameover7.gif') 
        this.load.image('gameover8', 'assets/backgrounds/gameover/gameover8.gif') 
        this.load.image('gameover9', 'assets/backgrounds/gameover/gameover9.gif') 
        this.load.image('gameover10', 'assets/backgrounds/gameover/gameover10.gif') 
        this.load.image('gameover11', 'assets/backgrounds/gameover/gameover11.gif') 
        this.load.image('gameover12', 'assets/backgrounds/gameover/gameover12.gif') 
        this.load.image('gameover13', 'assets/backgrounds/gameover/gameover13.gif') 
        this.load.image('gameover14', 'assets/backgrounds/gameover/gameover14.gif') 
        this.load.image('gameover15', 'assets/backgrounds/gameover/gameover15.gif') 
        this.load.image('gameover16', 'assets/backgrounds/gameover/gameover16.gif') 
        this.load.image('gameover17', 'assets/backgrounds/gameover/gameover17.gif') 
        this.load.image('gameover18', 'assets/backgrounds/gameover/gameover18.gif') 
        this.load.image('gameover19', 'assets/backgrounds/gameover/gameover19.gif') 

        /* TITLE BACKGROUND */
        this.load.image('title', 'assets/backgrounds/newgame/index.png') 

    }

    create(){
        console.log('create  -- BOOTGAME --')

        /* CREATE ANIMATIONS */

        this.anims.create({
            key: 'player_idle',
            frames: [
                {key: 'idle1'},
                {key: 'idle2'},
                {key: 'idle3'}
            ],
            frameRate: 7,
            repeat: -1
        })

        this.anims.create({
            key: 'player_run',
            frames: [
                {key: 'run0'},
                {key: 'run1'},
                {key: 'run2'},
                {key: 'run3'},
                {key: 'run4'},
                {key: 'run5'},
                {key: 'run6'}
            ],
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'player_fire',
            frames: [
                {key: 'fire1'},
                {key: 'fire2'},
                {key: 'fire3'},
                {key: 'fire4'}
            ],
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'player_jump',
            frames: [
                {key: 'jump1'},
                {key: 'jump2'},
                {key: 'jump3'},
                {key: 'jump4'},
                {key: 'jump5'},
                {key: 'jump6'},
                {key: 'jump7'},
                {key: 'jump8'},
                {key: 'jump9'}
            ],
            frameRate: 8,
            repeat: -1
        })

        this.anims.create({
            key: 'player_dying',
            frames: [
                {key: 'dying1'},
                {key: 'dying2'},
                {key: 'dying3'},
                {key: 'dying4'},
                {key: 'dying5'},
                {key: 'dying6'},
                {key: 'dying7'},
                {key: 'dying8'},
                {key: 'dying9'},
                {key: 'dying10'},
                {key: 'dying11'},
                {key: 'dying12'},
                {key: 'dying13'},
                {key: 'dying14'},
                {key: 'dying15'},
                {key: 'dying16'},
                {key: 'dying17'},
                {key: 'dying18'}
            ],
            frameRate: 13
        })

        this.anims.create({
            key: 'player_turndown',
            frames: [
                {key: 'turndown0'},
                {key: 'turndown1'},
                {key: 'turndown2'}
            ],
            frameRate: 8,
            repeat: 0
        })

        this.anims.create({
            key: 'player_down',
            frames: [
                {key: 'down0'},
                {key: 'down1'},
                {key: 'down2'},
                {key: 'down3'}
            ],
            frameRate: 8,
            repeat: -1
        })

        this.anims.create({
            key: 'player_down_fire',
            frames: [
                {key: 'downfire0'},
                {key: 'downfire1'},
                {key: 'downfire2'},
                {key: 'downfire3'},
                {key: 'downfire4'},
                {key: 'downfire5'},
                {key: 'downfire6'},
            ],
            frameRate: 17,
            repeat: -1
        })

        this.anims.create({
            key: 'bullet',
            frames: [
                {key: 'bullet0'},
                {key: 'bullet1'},
                {key: 'bullet2'},
                {key: 'bullet3'}
            ],
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'enemy_idle',
            frames: [
                {key: 'enemy_idle0'},
                {key: 'enemy_idle1'},
                {key: 'enemy_idle2'},
                {key: 'enemy_idle3'}
            ],
            frameRate: 8,
            repeat: -1
        })

        this.anims.create({
            key: 'enemy_run',
            frames: [
                {key: 'enemy_run0'},
                {key: 'enemy_run1'},
                {key: 'enemy_run2'},
                {key: 'enemy_run3'},
                {key: 'enemy_run4'},
                {key: 'enemy_run5'},
                {key: 'enemy_run6'},
                {key: 'enemy_run7'},
                {key: 'enemy_run8'},
                {key: 'enemy_run9'},
                {key: 'enemy_run10'},
                {key: 'enemy_run11'}
            ],
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'enemy_fire',
            frames: [
                {key: 'enemy_fire0'},
                {key: 'enemy_fire1'},
                {key: 'enemy_fire2'},
                {key: 'enemy_fire3'},
                {key: 'enemy_fire4'},
                {key: 'enemy_fire5'},
                {key: 'enemy_fire6'},
                {key: 'enemy_fire7'},
                {key: 'enemy_fire8'},
                {key: 'enemy_fire9'}
            ],
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'background_gameover',
            frames: [
                {key: 'gameover0'},
                {key: 'gameover1'},
                {key: 'gameover2'},
                {key: 'gameover3'},
                {key: 'gameover4'},
                {key: 'gameover5'},
                {key: 'gameover6'},
                {key: 'gameover7'},
                {key: 'gameover8'},
                {key: 'gameover9'},
                {key: 'gameover10'},
                {key: 'gameover11'},
                {key: 'gameover12'},
                {key: 'gameover13'},
                {key: 'gameover14'},
                {key: 'gameover15'},
                {key: 'gameover16'},
                {key: 'gameover17'},
                {key: 'gameover18'},
                {key: 'gameover19'}
            ],
            frameRate: 10,
            repeat: -1
        })

        this.scene.start('titlescene')
    }
}