import _State from './_State';
import DisplayObjects from '../display_objects';

export default class Menu extends _State {
  create () {
    this.stage.backgroundColor = '#AACCCC';
    this.stage.disableVisibilityChange = true;
    this.add.existing(this.titleText());
    this.add.existing(this.alphabetText());
    this.add.existing(this.actionText());
  }

  titleText () {
    return DisplayObjects.displayFont(game, 'THIS IS THE MENU', this.world.centerX, 100, 'center');
  }

  alphabetText () {
    var text = DisplayObjects.bodyFont(game, `
AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
1,234,567,890 Ti Tj To 77 71 73 91910 .:;,
!№;%:?*()_+-=.,/|"'@#$^&{}[]`, this.world.centerX, 145, 'center');
    text.maxWidth = 300;
    return text;
  }

  actionText () {
    var text = DisplayObjects.bodyFont(game, 'Press Spacebar to Play!', this.world.centerX, 190, 'center');
    this.time.events.loop(400, () => text.visible = !text.visible);
    return text;
  }

  update () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.stateProvider.gameplay(this.state);
    }
  }
}
