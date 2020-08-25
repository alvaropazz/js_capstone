import 'phaser';
import './styles.css';

function preload() {
  // Runs once, loads up assets like images and audio
  this.load.image('world', './assets/Overworld.png')
  this.load.image('obstacles', './assets/objects.png')
  this.load.image('decorations', './assets/decoration.png')
  this.load.tilemapTiledJSON('map', './assets/world.json')
  this.load.spritesheet('person', './assets/character.png', { frameWidth: 16, frameHeight: 32 })
  this.load.spritesheet('skeleton','./assets/skeleton.png', { frameWidth: 16, frameHeight: 32 })
  // this.points = {
  //   'x': [0, 200, 120, 456, 960],
  //   'y': [0, 300, 120, 156, 800]
  // };
  // this.bmd = null;
  
}

let controls;
let player;
let enemy;
let enemy2;
let enemy3;
let enemy4;
let cursors;

 
function create() {
  const map = this.make.tilemap({ key: 'map' });
  const terrainTiles = map.addTilesetImage('Overworld', 'world');
  const obstacleTiles = map.addTilesetImage('objects', 'obstacles');
  const decorTiles = map.addTilesetImage('decoration', 'decorations');

  player = this.physics.add.sprite(120,400, 'person')
  player.setDepth(1);

  enemy = this.physics.add.sprite(160, 240, 'skeleton')
  enemy.setDepth(1);

  enemy2 = this.physics.add.sprite(560, 250, 'skeleton')
  enemy2.setDepth(1);

  enemy3 = this.physics.add.sprite(624, 384, 'skeleton')
  enemy3.setDepth(1);

  enemy4 = this.physics.add.sprite(624, 590, 'skeleton')
  enemy4.setDepth(1);

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

  this.tweens.add({
    targets: enemy,
    x: 300,
    y:240,
    ease: 'Linear',
    duration: 3000,
    repeat: -1,
    yoyo: true
  });

  this.tweens.add({
    targets: enemy2,
    x: 700,
    y:250,
    ease: 'Linear',
    duration: 3000,
    repeat: -1,
    yoyo: true
  });

    this.tweens.add({
    targets: enemy3,
    x: 624,
    y:500,
    ease: 'Linear',
    duration: 3000,
    repeat: -1,
    yoyo: true
  });

  this.tweens.add({
    targets: enemy4,
    x: 500,
    y:590,
    ease: 'Linear',
    duration: 3000,
    repeat: -1,
    yoyo: true
  });

  ///
  // this.increment = 1 / game.width;  
  // this.i = 0; 

  // this.bmd = this.add.bitmapData(this.game.width, this.game.height);
  //   this.bmd.addToWorld();
  //   for (var i = 0; i < 1; i += this.increment) {
  //     var px = this.math.linearInterpolation(this.points.x, i);
  //     var py = this.math.linearInterpolation(this.points.y, i);
  //     this.bmd.rect(px, py, 3, 3, 'rgba(245, 0, 0, 1)');
  //   } 

}

function update(time, delta) {
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
 
   // Normalize and scale the velocity so that player can't move faster along a diagonal
   player.body.velocity.normalize().scale(speed);
  // controls.update(delta);
}

const config = {
  type: Phaser.AUTO, // Which renderer to use
  width: 960,
  height: 800,
  // width: 600,
  // height: 400,
  parent: "game-container", // ID of the DOM element to add the canvas to
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      // enableBody: true
    }
  }
};

const game = new Phaser.Game(config);