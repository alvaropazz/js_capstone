import 'phaser';
  
let player;
let enemy;
let enemy2;
let enemy3;
let enemy4;
let enemy5;
let enemy6;
let cursors;

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  };

 preload() {
    this.load.image('world', './assets/Overworld.png')
    this.load.image('obstacles', './assets/objects.png')
    this.load.image('decorations', './assets/decoration.png')
    this.load.tilemapTiledJSON('map', './assets/world.json')
    this.load.spritesheet('person', './assets/character.png', { frameWidth: 16, frameHeight: 32 })
    this.load.spritesheet('skeleton','./assets/skeleton.png', { frameWidth: 16, frameHeight: 32 })
  }

  
   
 create() {
    const map = this.make.tilemap({ key: 'map' });
    const terrainTiles = map.addTilesetImage('Overworld', 'world');
    const obstacleTiles = map.addTilesetImage('objects', 'obstacles');
    const decorTiles = map.addTilesetImage('decoration', 'decorations');
  
    player = this.physics.add.sprite(120,400, 'person')
    player.setDepth(1);
  
    enemy = this.physics.add.sprite(160, 250, 'skeleton')
    enemy.setDepth(1);
  
    enemy2 = this.physics.add.sprite(560, 250, 'skeleton')
    enemy2.setDepth(1);
  
    enemy3 = this.physics.add.sprite(624, 384, 'skeleton')
    enemy3.setDepth(1);
  
    enemy4 = this.physics.add.sprite(624, 590, 'skeleton')
    enemy4.setDepth(1);
  
    enemy5 = this.physics.add.sprite(190, 510, 'skeleton')
    enemy5.setDepth(1);
  
    enemy6 = this.physics.add.sprite(360, 510, 'skeleton')
    enemy6.setDepth(1);
  
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
      y:250,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true
    });
  
    this.tweens.add({
      targets: enemy2,
      x: 700,
      y:250,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true
    });
  
      this.tweens.add({
      targets: enemy3,
      x: 624,
      y:500,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true
    });
  
    this.tweens.add({
      targets: enemy4,
      x: 500,
      y:590,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true
    });
  
    this.tweens.add({
      targets: enemy5,
      x: 300,
      y:510,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true
    });
  
    this.tweens.add({
      targets: enemy6,
      x: 430,
      y:510,
      ease: 'Linear',
      duration: 1500,
      repeat: -1,
      yoyo: true
    });
  }
  
 update() {
    const speed = 175;
     player.body.setVelocity(0);
  
     // Horizontal movement
     if (cursors.left.isDown) {
       player.body.setVelocityX(-speed);
     } else if (cursors.right.isDown) {
       player.body.setVelocityX(speed);
     }
   
     // Vertical movement
     if (cursors.up.isDown) {
       player.body.setVelocityY(-speed);
     } else if (cursors.down.isDown) {
       player.body.setVelocityY(speed);
     } 
     player.body.velocity.normalize().scale(speed);
  }

};