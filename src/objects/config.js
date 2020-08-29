/* eslint-disable */

import 'phaser';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  pixelArt: true,
  roundPixels: true,
  dom: {
    createContainer: true,
  },
};