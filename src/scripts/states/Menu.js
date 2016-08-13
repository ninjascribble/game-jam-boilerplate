import Fonts from '../constants/Fonts';
import States from '../constants/States';

export default class Menu extends Phaser.State {
  create () {
    this.titleText = this.createTitleText(this.world.centerX, 40);
    this.actionText = this.createActionText(this.world.centerX, 80);
  }

  createTitleText (x, y) {
    var result = this.add.bitmapText(x, y, Fonts.DISPLAY_FONT);

    result.fontSize = 12;
    result.text = 'this is the menu';
    result.anchor.x = 0.5;
    result.anchor.y = 0.5;
    result.align = 'center';

    return result;
  }

  createActionText (x, y) {
    var timer = this.time.create();
    var result = this.add.bitmapText(x, y, Fonts.DISPLAY_FONT);

    result.fontSize = 6;
    result.text = 'press space\r\nto start the game';
    result.anchor.x = 0.5;
    result.anchor.y = 0.5;
    result.align = 'center';

    timer.loop(400, () => this.actionText.visible = Boolean(!this.actionText.visible));
    timer.start();

    return result;
  }

  update () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.state.start(States.GAMEPLAY);
    }
  }
}
