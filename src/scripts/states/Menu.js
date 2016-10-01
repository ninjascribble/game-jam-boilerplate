import _State from './_State';
import DisplayObjects from '../display_objects';

export default class Menu extends _State {
  create () {
    this.add.existing(this.titleText());
    this.add.existing(this.actionText());
  }

  titleText () {
    return DisplayObjects.displayFont(this.game, this.world.centerX, 40, 'this is the menu', 12, 'center');
  }

  actionText () {
    var text = DisplayObjects.displayFont(this.game, this.world.centerX, 80, 'press space\r\nto start the game', 6, 'center');
    this.time.events.loop(400, () => text.visible = !text.visible);
    return text;
  }

  update () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.stateProvider.gameplay(this.state);
    }
  }
}
