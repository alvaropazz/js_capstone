import 'phaser';
import './styles.css';
import config from './config';
import GameScene from './gameScene';

//
import BootScene from './bootScene';
import PreloaderScene from './preloaderScene';
import TitleScene from './titleScene';
import OptionsScene from './optionsScene';
import CreditsScene from './creditsScene';
import Model from './model';
//

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', GameScene);
    //
    const model = new Model();
    this.globals = { model, bgMusic: null };
    //
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    //
    this.scene.start('Boot');
  }
}

window.game = new Game();