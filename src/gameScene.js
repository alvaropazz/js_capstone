import 'phaser';
import config from './config';

let player;
let enemy;
let enemy2;
let enemy3;
let enemy4;
let enemy5;
let enemy6;
let coin;
let coin2;
let coin3;
let coin4;
let coin5;
let coin6;
let coin7;
let coin8;
let coin9;
let coin10;
let coin11;
let coin12;
let coin13;
let coin14;
let coin15;
let coin16;
let coin17;
let coin18;
let coin19;
let coin20;
let cursors;


let scoreText;

let score = 0;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('world', './assets/Overworld.png');
    this.load.image('obstacles', './assets/objects.png');
    this.load.image('decorations', './assets/decoration.png');
    this.load.tilemapTiledJSON('map', './assets/world.json');
    this.load.spritesheet('person', './assets/character.png', { frameWidth: 16, frameHeight: 32 });
    this.load.spritesheet('skeleton', './assets/skeleton.png', { frameWidth: 16, frameHeight: 32 });
    this.load.spritesheet('coins', './assets/coins.png', { frameWidth: 16, frameHeight: 16 });
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const terrainTiles = map.addTilesetImage('Overworld', 'world');
    const obstacleTiles = map.addTilesetImage('objects', 'obstacles');
    const decorTiles = map.addTilesetImage('decoration', 'decorations');

    player = this.physics.add.sprite(120, 400, 'person');
    player.setDepth(1);

    enemy = this.physics.add.sprite(160, 250, 'skeleton');
    enemy.setDepth(1);

    enemy2 = this.physics.add.sprite(560, 250, 'skeleton');
    enemy2.setDepth(1);

    enemy3 = this.physics.add.sprite(624, 384, 'skeleton');
    enemy3.setDepth(1);

    enemy4 = this.physics.add.sprite(624, 590, 'skeleton');
    enemy4.setDepth(1);

    enemy5 = this.physics.add.sprite(190, 510, 'skeleton');
    enemy5.setDepth(1);

    enemy6 = this.physics.add.sprite(360, 510, 'skeleton');
    enemy6.setDepth(1);

    coin = this.physics.add.sprite(144, 144, 'coins');
    coin.setDepth(1);

    coin2 = this.physics.add.sprite(176, 144, 'coins');
    coin2.setDepth(1);

    coin3 = this.physics.add.sprite(160, 112, 'coins');
    coin3.setDepth(1);

    coin4 = this.physics.add.sprite(608, 144, 'coins');
    coin4.setDepth(1);

    coin5 = this.physics.add.sprite(640, 144, 'coins');
    coin5.setDepth(1);

    coin6 = this.physics.add.sprite(832, 368, 'coins');
    coin6.setDepth(1);

    coin7 = this.physics.add.sprite(832, 464, 'coins');
    coin7.setDepth(1);

    coin8 = this.physics.add.sprite(832, 432, 'coins');
    coin8.setDepth(1);

    coin9 = this.physics.add.sprite(832, 400, 'coins');
    coin9.setDepth(1);

    coin10 = this.physics.add.sprite(800, 656, 'coins');
    coin10.setDepth(1);

    coin11 = this.physics.add.sprite(720, 656, 'coins');
    coin11.setDepth(1);

    coin12 = this.physics.add.sprite(760, 656, 'coins');
    coin12.setDepth(1);

    coin13 = this.physics.add.sprite(176, 658,'coins');
    coin13.setDepth(1);

    coin14 = this.physics.add.sprite(208, 658,'coins');
    coin14.setDepth(1);

    coin15 = this.physics.add.sprite(480, 688, 'coins');
    coin15.setDepth(1);

    coin16 = this.physics.add.sprite(528, 688, 'coins');
    coin16.setDepth(1);

    coin17 = this.physics.add.sprite(192, 626, 'coins');
    coin17.setDepth(1);

    coin18 = this.physics.add.sprite(400, 400, 'coins');
    coin18.setDepth(1);

    coin19 = this.physics.add.sprite(464, 400, 'coins');
    coin19.setDepth(1);

    coin20 = this.physics.add.sprite(432, 352, 'coins');
    coin20.setDepth(1);
    
    const mainLayer = map.createStaticLayer('terrain', terrainTiles, 0, 0);
    const secondLayer = map.createStaticLayer('walls', obstacleTiles, 0, 0);
    const thirdLayer = map.createStaticLayer('decoration', decorTiles, 0, 0);

    secondLayer.setCollisionByProperty({ collides: true });
    thirdLayer.setCollisionByProperty({ collides: true });

    const camera = this.cameras.main;
    camera.startFollow(player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, secondLayer);
    this.physics.add.collider(player, thirdLayer);

    this.physics.add.collider(player, enemy);
    this.physics.add.collider(player, enemy2);
    this.physics.add.collider(player, enemy3);
    this.physics.add.collider(player, enemy4);
    this.physics.add.collider(player, enemy5);
    this.physics.add.collider(player, enemy6);

    this.tweens.add({
      targets: enemy,
      x: 300,
      y: 250,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true,
    });

    this.tweens.add({
      targets: enemy2,
      x: 700,
      y: 250,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true,
    });

    this.tweens.add({
      targets: enemy3,
      x: 624,
      y: 500,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true,
    });

    this.tweens.add({
      targets: enemy4,
      x: 500,
      y: 590,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true,
    });

    this.tweens.add({
      targets: enemy5,
      x: 300,
      y: 510,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true,
    });

    this.tweens.add({
      targets: enemy6,
      x: 430,
      y: 510,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true,
    });
    //
    this.physics.add.collider(player, enemy, () => {
      this.physics.pause();
      this.add.text(320, 320, 'Game Over', { fontSize: '40px', fill: '#000000' });
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.scene.start('LeaderboardScene');

      // this.input.on('pointerup', () => {
      //   this.scene.restart();
      // });
    });
    this.physics.add.collider(player, enemy2, () => {
      this.physics.pause();
      this.add.text(320, 320, 'Game Over', { fontSize: '40px', fill: '#000000' });
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.input.on('pointerup', () => {
        this.scene.restart();
      });
    });
    this.physics.add.collider(player, enemy3, () => {
      this.physics.pause();
      this.add.text(320, 320, 'Game Over', { fontSize: '40px', fill: '#000000' });
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.input.on('pointerup', () => {
        this.scene.restart();
      });
    });
    this.physics.add.collider(player, enemy4, () => {
      this.physics.pause();
      this.add.text(320, 320, 'Game Over', { fontSize: '40px', fill: '#000000' });
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.input.on('pointerup', () => {
        this.scene.restart();
      });
    });
    this.physics.add.collider(player, enemy5, () => {
      this.physics.pause();
      this.add.text(320, 320, 'Game Over', { fontSize: '40px', fill: '#000000' });
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.input.on('pointerup', () => {
        this.scene.restart();
      });
    });
    this.physics.add.collider(player, enemy6, () => {
      this.physics.pause();
      this.add.text(320, 320, 'Game Over', { fontSize: '40px', fill: '#000000' });
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.input.on('pointerup', () => {
        this.scene.restart();
      });
    });
    // coins //

    scoreText = this.add.text(400, 280, 'SCORE: 0', {font: '12px'});


    this.physics.add.collider(player, coin, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin.destroy()
    });

    this.physics.add.collider(player, coin2, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin2.destroy()
    });

    this.physics.add.collider(player, coin3, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin3.destroy()
    });

    this.physics.add.collider(player, coin4, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin4.destroy()
    });
    
    this.physics.add.collider(player, coin5, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin5.destroy()
    });

    this.physics.add.collider(player, coin6, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin6.destroy()
    });

    this.physics.add.collider(player, coin7, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin7.destroy()
    });

    this.physics.add.collider(player, coin8, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin8.destroy()
    });

    this.physics.add.collider(player, coin9, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin9.destroy()
    });

    this.physics.add.collider(player, coin10, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin10.destroy()
    });

    this.physics.add.collider(player, coin11, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin11.destroy()
    });

    this.physics.add.collider(player, coin12, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin12.destroy()
    });

    this.physics.add.collider(player, coin13, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin13.destroy()
    });

    this.physics.add.collider(player, coin14, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin14.destroy()
    });

    this.physics.add.collider(player, coin15, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin15.destroy()
    });

    this.physics.add.collider(player, coin16, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin16.destroy()
    });

    this.physics.add.collider(player, coin17, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin17.destroy()
    });

    this.physics.add.collider(player, coin18, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin18.destroy()
    });

    this.physics.add.collider(player, coin19, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin19.destroy()
    });

    this.physics.add.collider(player, coin20, () => {
      score += 10,
      scoreText.setText(`SCORE: ${score}`),
      coin20.destroy()
    });
  }

  

  update() {
    const speed = 175;
    player.body.setVelocity(0);

    if (cursors.left.isDown) {
      player.body.setVelocityX(-speed);
    } else if (cursors.right.isDown) {
      player.body.setVelocityX(speed);
    }

    if (cursors.up.isDown) {
      player.body.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      player.body.setVelocityY(speed);
    }
    player.body.velocity.normalize().scale(speed);

    // score = this.sys.game.globals.score;

    if(score === 200){
      this.physics.pause();
      this.add.text(200, 320, 'Congrats! You\'ve won!', { fontSize: '40px', fill: '#000000' });
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.input.on('pointerup', () => {
        this.scene.restart();
      });
      score = 0
    }
  }
}