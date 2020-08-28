import Phaser from 'phaser';
import Button from './button';
import 'regenerator-runtime';
import { get, save } from './scoreFetch';

let list;

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('LeaderboardScene');
  }

  async create() {
    this.name = this.sys.game.globals.name;
    this.score = this.sys.game.globals.score.toString();

    console.log(this.name, this.score);
    await save(this.name, this.score);

    list = (await get()).data.result;

    const sortedList = list.sort((a, b) => b.score - a.score);

    this.add.text(150, 250, 'GAME OVER', { fontSize: 30 });
    this.add.text(450, 70, `YOU SCORED: ${this.score}`, { fontSize: 30 });
    this.add.text(450, 130, 'LEADERBOARD', { fontSize: 30 });

    for (let i = 0; i < 7; i += 1) {
      this.add.text(
        450,
        190 + i * 30,
        `${i + 1}.  ${sortedList[i].user}: ${sortedList[i].score}`,
        22,
      );
    }

    this.gameButton = this.add.sprite(250, 520, 'blueButton1').setInteractive();
    this.gameButtonText = this.add.text(210, 500, 'Play', { fontSize: '32px', fill: '#fff' });


    this.gameButton.on('pointerdown', (pointer) => {
      this.score = 0;
      this.scene.start('Game');
    });

    this.menuButton = this.add.sprite(550, 520, 'blueButton1').setInteractive();
    this.menuButtonText = this.add.text(510, 500, 'Menu', { fontSize: '32px', fill: '#fff' });


    this.menuButton.on('pointerdown', (pointer) => {
      this.score = 0;
      this.scene.start('Title');
    });
  }
}