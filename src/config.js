import 'phaser';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  // width: 600,
  // height: 400,
  parent: 'game-container',
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
};