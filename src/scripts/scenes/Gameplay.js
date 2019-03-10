import { Player } from '../game_objects';
import DisplayObjects from '../display_objects';
import { Camera, GameObjects, Input, Scene } from 'Phaser';

export default class Gameplay extends Scene {
  constructor () {
    super('Gameplay');
  }

  create () {
    this.cameras.main.setBackgroundColor('#223344');
    // this.matter.world.setBounds(0, 0, 1400, 1400);
    this.player = Player(this, this.cameras.main.centerX, 60);
    this.cameras.main.startFollow(this.player);
    this.add.existing(this.titleText());
    this.add.existing(this.player);
    this.input.keyboard.enabled = true;

    this.destroyKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.O);
    this.respawnKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.A);
    this.moveLeftKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT);
    this.moveRightKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT);
  }

  titleText () {
    return DisplayObjects.displayFont(this, 'THIS IS THE GAME', this.cameras.main.centerX, 40, GameObjects.BitmapText.ALIGN_CENTER);
  }

  update () {
    if (this.respawnKey.isDown) {
      this.player.respawn(this.cameras.main.centerX, this.player.y);
    }

    if (this.destroyKey.isDown) {
      this.player.destroy();
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
