import Ship from '../GameObjects/Ship';

export default class Gameplay extends Phaser.Scene {
  private player: Ship;
  private destroyKey: Phaser.Input.Keyboard.Key;
  private respawnKey: Phaser.Input.Keyboard.Key;
  private moveLeftKey: Phaser.Input.Keyboard.Key;
  private moveRightKey: Phaser.Input.Keyboard.Key;

  constructor () {
    super('Gameplay');
  }

  init () {
    this.input.keyboard.enabled = true;
    this.destroyKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
    this.respawnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.moveLeftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.moveRightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.cameras.main.setBackgroundColor('#223344');
  }

  create () {
    this.player = new Ship(this, this.cameras.main.centerX, 60);
    this.add.bitmapText(this.cameras.main.centerX, 100, 'Blocktopia_32pt', 'THIS IS THE GAME', 30, Phaser.GameObjects.BitmapText.ALIGN_CENTER).setOrigin(0.5, 0.5);
    // this.cameras.main.startFollow(this.player);
  }

  update () {
    if (this.respawnKey.isDown) {
      this.player.respawn(this.cameras.main.centerX, this.player.y);
    }

    if (this.destroyKey.isDown) {
      this.player.explode();
    }

    if (this.moveLeftKey.isDown) {
      this.player.bankLeft();
    } else if (this.moveRightKey.isDown) {
      this.player.bankRight();
    } else {
      this.player.normal();
    }
  }
}
