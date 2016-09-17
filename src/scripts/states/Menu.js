import _State from './_State';
import Fonts from '../fonts';

export default class Menu extends _State {
  create () {
    this.titleText = this.createTitleText(this.world.centerX, 40);
    this.actionText = this.createActionText(this.world.centerX, 80);
    this.time.events.loop(400, () => {
      this.actionText.visible = Boolean(!this.actionText.visible);
    });
  }

  createTitleText (x, y) {
    return Fonts.display(this.game, x, y, 'this is the menu', 12, 'center', this.world);
  }

  createActionText (x, y) {
    return Fonts.display(this.game, x, y, 'press space\r\nto start the game', 6, 'center', this.world);
  }

  update () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.stateProvider.gameplay(this.state);
    }
  }
}
