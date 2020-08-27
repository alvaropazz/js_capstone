import Phaser from 'phaser';
// import Button from './button';

export default class UserScene extends Phaser.Scene {
  constructor() {
    super('UserScene');
  }

  create() {
    this.intro = this.add.text(215, 200, 'Enter your name: ', { fontSize: 20, fontFamily: 'monospace' });

    const input = this.add.dom(500, 210, 'input', {
      type: 'text',
      name: 'nameField',
      fontSize: '32px',
      backgroundColor: '#fff',
    });

    input.scaleX = 0.4;
    input.scaleY = 0.6;

    this.playButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.playButtonText = this.add.text(360, 480, 'Play', { fontSize: '32px', fill: '#fff' });


    this.playButton.on('pointerdown', (pointer) => {
      if (input.node.value) {
        // this.model = this.sys.game.globals.model;
        this.sys.game.globals.name = input.node.value;
        this.scene.start('Game');
      }
    });
  }
}