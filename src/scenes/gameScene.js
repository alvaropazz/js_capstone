/* eslint-disable */

import 'phaser';

// let this.player;
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
// let cursors;

let scoreText;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.score = 0;
    this.speed = 175;
  }

  preload() {
    this.load.image('world', '../assets/Overworld.png');
    this.load.image('obstacles', '../assets/objects.png');
    this.load.image('decorations', '../assets/decoration.png');
    this.load.tilemapTiledJSON('map', '../assets/world.json');
    this.load.spritesheet('person', '../assets/character.png', { frameWidth: 16, frameHeight: 32 });
    this.load.spritesheet('skeleton', '../assets/skeleton.png', { frameWidth: 16, frameHeight: 32 });
    this.load.spritesheet('coins', '../assets/coins.png', { frameWidth: 16, frameHeight: 16 });
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const terrainTiles = map.addTilesetImage('Overworld', 'world');
    const obstacleTiles = map.addTilesetImage('objects', 'obstacles');
    const decorTiles = map.addTilesetImage('decoration', 'decorations');

    this.player = this.physics.add.sprite(120, 400, 'person');
    this.player.setDepth(1);

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

    coin13 = this.physics.add.sprite(176, 658, 'coins');
    coin13.setDepth(1);

    coin14 = this.physics.add.sprite(208, 658, 'coins');
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
    camera.startFollow(this.player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, secondLayer);
    this.physics.add.collider(this.player, thirdLayer);

    this.physics.add.collider(this.player, enemy);
    this.physics.add.collider(this.player, enemy2);
    this.physics.add.collider(this.player, enemy3);
    this.physics.add.collider(this.player, enemy4);
    this.physics.add.collider(this.player, enemy5);
    this.physics.add.collider(this.player, enemy6);

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
    this.physics.add.collider(this.player, enemy, () => {
      this.physics.pause();
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.scene.start('LeaderboardScene');
    });
    this.physics.add.collider(this.player, enemy2, () => {
      this.physics.pause();
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.scene.start('LeaderboardScene');
    });

    this.physics.add.collider(this.player, enemy3, () => {
      this.physics.pause();
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.scene.start('LeaderboardScene');
    });
    this.physics.add.collider(this.player, enemy4, () => {
      this.physics.pause();
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.scene.start('LeaderboardScene');
    });
    this.physics.add.collider(this.player, enemy5, () => {
      this.physics.pause();
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.scene.start('LeaderboardScene');
    });
    this.physics.add.collider(this.player, enemy6, () => {
      this.physics.pause();
      this.add.text(290, 370, 'Click to Restart', { fontSize: '30px', fill: '#000000' });
      this.scene.start('LeaderboardScene');
    });

    scoreText = this.add.text(400, 280, 'SCORE: 0', { font: '12px' });

    this.physics.add.collider(this.player, coin, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin.destroy();
    });

    this.physics.add.collider(this.player, coin2, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin2.destroy();
    });

    this.physics.add.collider(this.player, coin3, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin3.destroy();
    });

    this.physics.add.collider(this.player, coin4, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin4.destroy();
    });

    this.physics.add.collider(this.player, coin5, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin5.destroy();
    });

    this.physics.add.collider(this.player, coin6, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin6.destroy();
    });

    this.physics.add.collider(this.player, coin7, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin7.destroy();
    });

    this.physics.add.collider(this.player, coin8, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin8.destroy();
    });

    this.physics.add.collider(this.player, coin9, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin9.destroy();
    });

    this.physics.add.collider(this.player, coin10, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin10.destroy();
    });

    this.physics.add.collider(this.player, coin11, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin11.destroy();
    });

    this.physics.add.collider(this.player, coin12, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin12.destroy();
    });

    this.physics.add.collider(this.player, coin13, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin13.destroy();
    });

    this.physics.add.collider(this.player, coin14, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin14.destroy();
    });

    this.physics.add.collider(this.player, coin15, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin15.destroy();
    });

    this.physics.add.collider(this.player, coin16, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin16.destroy();
    });

    this.physics.add.collider(this.player, coin17, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin17.destroy();
    });

    this.physics.add.collider(this.player, coin18, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin18.destroy();
    });

    this.physics.add.collider(this.player, coin19, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin19.destroy();
    });

    this.physics.add.collider(this.player, coin20, () => {
      this.score += 10,
      scoreText.setText(`SCORE: ${this.score}`),
      coin20.destroy();
    });
  }

  movePlayer() {
    this.player.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-this.speed);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(this.speed);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-this.speed);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(this.speed);
    }
    // this.player.velocity.normalize().scale(this.speed);
  }

  update() {
    
    this.movePlayer();
    this.sys.game.globals.score = this.score;

    if (this.score === 200) {
      this.physics.pause();
      this.scene.start('LeaderboardScene');

      this.score = 0;
    }
  }
}