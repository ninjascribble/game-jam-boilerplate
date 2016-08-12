import Fonts from '../constants/Fonts';
import States from '../constants/States';

export default class Menu extends Phaser.State {
  preload () {
    super.preload();
  }

  create () {
    super.create();

    let title = this.game.add.bitmapText(0, 0, Fonts.DISPLAY.key);

    title.x = this.game.world.centerX;
    title.y = 40;
    title.fontSize = 12;
    title.align = 'center';
    title.anchor.setTo(0.5, 0.5);
    title.text = 'This is the menu';

    let action = this.game.add.bitmapText(0, 0, Fonts.DISPLAY.key);

    action.x = this.game.world.centerX;
    action.y = 80;
    action.fontSize = 6;
    action.align = 'center';
    action.anchor.setTo(0.5, 0.5);
    action.text = `press space\r\nto start the game`;

    let actionTimer = this.game.time.create(null);

    actionTimer.loop(300, () => {
      action.visible = Boolean(!action.visible);
    });

    actionTimer.start();
  }

  update () {
    super.update();
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.game.state.start(States.GAMEPLAY.key);
    }
  }

  render () {
    super.render();
  }

  shutdown () {
    super.shutdown();
  }
}
