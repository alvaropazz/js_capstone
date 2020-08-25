import 'phaser';
import './styles.css';

function preload() {
  // Runs once, loads up assets like images and audio
  this.load.image('world', './assets/Overworld.png')
  this.load.image('obstacles', './assets/objects.png')
  this.load.image('decorations', './assets/decoration.png')
  this.load.tilemapTiledJSON('map', './assets/world.json')
  this.load.spritesheet('person', './assets/character.png', { frameWidth: 16, frameHeight: 32 })
}

let controls;
let player;
let cursors;

function create() {
  const map = this.make.tilemap({ key: 'map' });
  const terrainTiles = map.addTilesetImage('Overworld', 'world');
  const obstacleTiles = map.addTilesetImage('objects', 'obstacles');
  const decorTiles = map.addTilesetImage('decoration', 'decorations');

  player = this.physics.add.sprite(120,400, 'person')
  player.setDepth(1);


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
  width: 600, // Canvas width in pixels
  height: 400, // Canvas height in pixels
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