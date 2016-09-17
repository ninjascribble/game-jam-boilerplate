import _State from './_State';
import Actors from '../actors';
import Fonts from '../fonts';

export default class Gameplay extends _State {
  create () {
    this.world.setBounds(0, 0, 1400, 1400);
    this.titleText = this.createTitleText(this.world.centerX, 40);
    this.player = Actors.player(this.game, this.world.centerX, 60, this.world);
    this.camera.follow(this.player.ship, Phaser.Camera.FOLLOW_LOCKON);
  }

  createTitleText (x, y) {
    return Fonts.display(this.game, x, y, 'this is the game', 12, 'center', this.world);
  }

  update () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.stateProvider.menu(this.state);
    }
    this.player.update();
  }
}
