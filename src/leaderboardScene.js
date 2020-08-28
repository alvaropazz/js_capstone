import Phaser from 'phaser';
import Button from './button';
import 'regenerator-runtime';
import { get, save } from './scoreFetch';


export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('LeaderboardScene');
  }

  async create() {
    this.name = this.sys.game.globals.name;
    this.score = this.sys.game.globals.score.toString();


    console.log(this.name, this.score);
    await save(this.name, this.score);
  }
}