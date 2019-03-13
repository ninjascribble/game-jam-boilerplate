import { Camera, GameObjects, Input, Scene } from 'Phaser';

export default class Gameplay extends Scene {
  constructor () {
    super('Gameplay');
  }

  init () {
    this.input.keyboard.enabled = true;
    this.destroyKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.O);
    this.respawnKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.A);
    this.moveLeftKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT);
    this.moveRightKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT);
    this.cameras.main.setBackgroundColor('#223344');
  }

  create () {
    this.add.bitmapText(this.cameras.main.centerX, 100, 'Blocktopia_32pt', 'THIS IS THE GAME', 30, GameObjects.BitmapText.ALIGN_CENTER).setOrigin(0.5, 0.5);

    this.player = this.impact.add.sprite(this.cameras.main.centerX, 60, 'ship');
    this.player.health = 100;
    this.player.setActiveCollision();
    this.player.setBounce(1);
    this.player.setFrictionX(300);
    this.player.setMaxVelocity(120, 120);

    // this.cameras.main.startFollow(this.player);
  }

  update () {
    if (this.respawnKey.isDown) {
      this.respawn(this.cameras.main.centerX, this.player.y);
    }

    if (this.destroyKey.isDown) {
      this.destroy();
    }

    if (this.moveLeftKey.isDown) {
      this.bankLeft();
    } else if (this.moveRightKey.isDown) {
      this.bankRight();
    } else {
      this.normal();
    }
  }

  respawn (x = 0, y = 0) {
    if (this.player.health === 0) {
      this.player.health = 100;
      this.player.x = x;
      this.player.y = y;
      this.player.setAcceleration(0, 0);
      this.player.setVelocity(0, 0);
      this.player.visible = true;
      this.normal();
    }
  }

  destroy () {
    if (this.player.health > 0) {
      this.player.health = 0;
      // will set this.visible = false when animation ends
      this.player.anims.play('ship--explode', true);
      this.player.setAcceleration(0, 0);
    }
  }

  normal () {
    if (this.player.health > 0) {
      this.player.anims.play('ship--normal', true);
      this.player.flipX = false;
      this.player.setAcceleration(0, 0);
    }
  }

  bankLeft () {
    if (this.player.health > 0) {
      this.player.anims.play('ship--bank', true);
      this.player.flipX = false;
      this.player.setAccelerationX(-120, 0);
    }
  }

  bankRight () {
    if (this.player.health > 0) {
      this.player.anims.play('ship--bank', true);
      this.player.flipX = true;
      this.player.setAccelerationX(120, 0);
    }
  }
}
