export default class Menu extends Phaser.Scene {
  private spacebar: Phaser.Input.Keyboard.Key;

  constructor () {
    super('Menu');
  }

  create () {
    this.input.keyboard.enabled = true;
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.cameras.main.setBackgroundColor('#AACCCC');

    this.add.bitmapText(this.cameras.main.centerX, 100, 'Blocktopia_32pt', 'THIS IS THE MENU', 30, Phaser.GameObjects.BitmapText.ALIGN_CENTER).setOrigin(0.5, 0.5);

    this.add.bitmapText(this.cameras.main.centerX, 145, 'Blocktopia_12pt', `
AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
1,234,567,890 Ti Tj To 77 71 73 91910 .:;,
!№;%:?*()_+-=.,/|"'@#$^&{}[]`, 12, Phaser.GameObjects.BitmapText.ALIGN_CENTER).setOrigin(0.5, 0.5);

    let blinkingText = this.add.bitmapText(this.cameras.main.centerX, 190, 'Blocktopia_12pt', 'Press Spacebar to Play!', 12, Phaser.GameObjects.BitmapText.ALIGN_CENTER);
    blinkingText.setOrigin(0.5, 0.5);
    this.time.addEvent({
      loop: true,
      delay: 400,
      callback: () => blinkingText.visible = !blinkingText.visible
    });
  }

  update () {
    if (this.spacebar.isDown) {
      this.scene.start('Gameplay');
    }
  }

  destroy () {
    this.input.keyboard.clearCaptures();
    this.input.keyboard.enabled = false;
  }
}
