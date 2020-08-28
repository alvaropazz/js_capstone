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

    let sortedList=[];

    for(let i=0; i < list.length;i++){
      sortedList.push(list[i])
    }

    function compare( a, b ) {
      if ( a.score > b.score ){
        return -1;
      }
      if ( a.score < b.score ){
        return 1;
      }
      return 0;
    }

    sortedList.sort( compare )

    this.add.text(100, 10, 'GAME OVER', { fontSize: 30});
    this.add.text(100, 70, `YOU SCORED: ${this.score}`, { fontSize: 30});
    this.add.text(100, 130, 'LEADERBOARD', { fontSize: 30});

    for (let i = 0; i < 10; i += 1) {
      this.add.text(
        100,
        190 + i * 30,
        `${i + 1}.  ${sortedList[i].user}: ${sortedList[i].score}`,
        22,
      );
    }

    this.gameButton = this.add.sprite(400, 520, 'blueButton1').setInteractive();
    this.gameButtonText = this.add.text(360, 500, 'Play', { fontSize: '32px', fill: '#fff' });


    this.gameButton.on('pointerdown', (pointer) => {
        this.score = 0;
        this.scene.start('Game');
      }
    );
  }
}