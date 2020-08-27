import Phaser from 'phaser';
import Button from './button';
import 'regenerator-runtime';
import { getScores, saveScore } from './scoreFetch';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('LeaderboardScene');
  }

  // async 
  create() {
    this.name = this.sys.game.globals.name;
    this.score = this.sys.game.globals.score;

    // await 
    saveScore(this.name, this.score);
    

  }
}