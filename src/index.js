/* eslint-disable */

import 'phaser';
import './styles.css';
import config from './objects/config';
import GameScene from './scenes/gameScene';
import BootScene from './scenes/bootScene';
import PreloaderScene from './scenes/preloaderScene';
import TitleScene from './scenes/titleScene';
import OptionsScene from './scenes/optionsScene';
import CreditsScene from './scenes/creditsScene';
import Model from './objects/model';
import UserScene from './scenes/userScene';
import LeaderboardScene from './scenes/leaderboardScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', GameScene);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('UserScene', UserScene);
    this.scene.add('LeaderboardScene', LeaderboardScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();