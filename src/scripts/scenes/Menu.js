import DisplayObjects from '../display_objects';
import { GameObjects, Input, Scene } from 'Phaser';

export default class Menu extends Scene {
  constructor () {
    super('Menu');
  }

  create () {
    this.cameras.main.setBackgroundColor('#AACCCC');
    this.add.existing(this.titleText());
    this.add.existing(this.alphabetText());
    this.add.existing(this.actionText());
  }

  titleText () {
    return DisplayObjects.displayFont(this, 'THIS IS THE MENU', this.cameras.main.centerX, 100, GameObjects.BitmapText.ALIGN_CENTER);
  }

  alphabetText () {
    var text = DisplayObjects.bodyFont(this, `
AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
1,234,567,890 Ti Tj To 77 71 73 91910 .:;,
!№;%:?*()_+-=.,/|"'@#$^&{}[]`, this.cameras.main.centerX, 145, GameObjects.BitmapText.ALIGN_CENTER);
    text.maxWidth = 300;
    return text;
  }

  actionText () {
    var text = DisplayObjects.bodyFont(this, 'Press Spacebar to Play!', this.cameras.main.centerX, 190, GameObjects.BitmapText.ALIGN_CENTER);
    this.time.addEvent({
      loop: true,
      delay: 400,
      callback: () => text.visible = !text.visible
    });
    return text;
  }

  update () {
    if (this.input.keyboard.checkDown(Input.Keyboard.KeyCodes.SPACE)) {
      this.scene.start('Gameplay');
    }
  }
}
