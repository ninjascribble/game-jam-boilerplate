import GameObjects from '../game_objects';
import DisplayObjects from '../display_objects';
import { Camera, Keyboard, Scene } from 'Phaser';

export default class Gameplay extends Scene {
  constructor () {
    super('Gameplay');
  }

  create () {
    this.stage.backgroundColor = '#223344';
    this.matter.world.setBounds(0, 0, 1400, 1400);
    this.player = GameObjects.player(game, this.cameras.main.centerX, 60);
    this.cameras.main.startFollow(this.player);

    this.add.existing(this.titleText());
    this.add.existing(this.player);
  }

  titleText () {
    return DisplayObjects.displayFont(game, 'THIS IS THE GAME', this.cameras.main.centerX, 40, 'center');
  }

  update () {
    if (this.input.keyboard.checkDown(Keyboard.A)) {
      this.player.respawn(game.cameras.main.centerX, this.player.y);
    }

    if (this.input.keyboard.checkDown(Keyboard.O)) {
      this.player.destroy();
    }

    if (this.input.keyboard.checkDown(Keyboard.LEFT)) {
      this.player.bankLeft();
    } else if (this.input.keyboard.checkDown(Keyboard.RIGHT)) {
      this.player.bankRight();
    } else {
      this.player.normal();
    }
  }
}
