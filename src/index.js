import 'phaser';
import './styles.css';

function preload() {
  // Runs once, loads up assets like images and audio
  this.load.image('world', './assets/Overworld.png')
  this.load.image('obstacles', './assets/objects.png')
  this.load.image('decorations', './assets/decoration.png')
  this.load.tilemapTiledJSON('map', './assets/world.json')
}

let controls;

function create() {
  const map = this.make.tilemap({ key: 'map' });
  const terrainTiles = map.addTilesetImage('Overworld', 'world');
  const obstacleTiles = map.addTilesetImage('objects', 'obstacles');
  const decorTiles = map.addTilesetImage('decoration', 'decorations')

  const mainLayer = map.createStaticLayer('terrain', terrainTiles, 0, 0);
  const secondLayer = map.createStaticLayer('walls', obstacleTiles, 0, 0);
  const thirdLayer = map.createStaticLayer('decoration', decorTiles, 0, 0);

  const camera = this.cameras.main;

  // Set up the arrows to control the camera
  const cursors = this.input.keyboard.createCursorKeys();
  controls = new Phaser.Cameras.Controls.FixedKeyControl({
    camera: camera,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.5
  });
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

}

function update(time, delta) {
  // Apply the controls to the camera each update tick of the game
  controls.update(delta);
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
  }
};

const game = new Phaser.Game(config);