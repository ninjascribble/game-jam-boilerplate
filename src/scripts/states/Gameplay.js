import Fonts from '../constants/Fonts';
import States from '../constants/States';

export default class GameState extends Phaser.State {
  create () {
    this.createTitleText(this.game.world.centerX, 40);
  }

  createTitleText (x, y) {
    var result = this.add.bitmapText(x, y, Fonts.DISPLAY_FONT);

    result.fontSize = 12;
    result.text = 'this is the game';
    result.anchor.x = 0.5;
    result.anchor.y = 0.5;
    result.align = 'center';

    return result;
  }

  update () {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.game.state.start(States.MENU);
    }
  }
}
