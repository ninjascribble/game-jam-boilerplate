import DisplayObjects from '../display_objects';
import { Camera, GameObjects, Input, Scene } from 'Phaser';

export default class Gameplay extends Scene {
  constructor () {
    super('Gameplay');
  }

  init () {
    this.cameras.main.setBackgroundColor('#223344');

    this.input.keyboard.enabled = true;
    this.destroyKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.O);
    this.respawnKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.A);
    this.moveLeftKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT);
    this.moveRightKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT);

    this.anims.create({
      key: 'ship--normal',
      defaultTextureKey: 'ship',
      frameRate: 20,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('ship', {
        prefix: 'ship--normal',
        start: 0,
        end: 2
      })
    });

    this.anims.create({
      key: 'ship--bank',
      defaultTextureKey: 'ship',
      frameRate: 20,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('ship', {
        prefix: 'ship--bank',
        start: 3,
        end: 5
      })
    });

    this.anims.create({
      key: 'ship--explode',
      defaultTextureKey: 'ship',
      frameRate: 12,
      repeat: 0,
      hideOnComplete: true,
      frames: this.anims.generateFrameNumbers('ship', {
        prefix: 'ship--explode',
        start: 6,
        end: 8
      })
    });
  }

  create () {
    this.add.existing(this.titleText());

    this.player = this.impact.add.sprite(this.cameras.main.centerX, 60, 'ship');
    this.player.health = 100;
    this.player.setActiveCollision();
    this.player.setBounce(1);
    this.player.setFrictionX(300);
    this.player.setMaxVelocity(120, 120);

    // this.cameras.main.startFollow(this.player);
  }

  titleText () {
    return DisplayObjects.displayFont(this, 'THIS IS THE GAME', this.cameras.main.centerX, 40, GameObjects.BitmapText.ALIGN_CENTER);
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
      this.player.visible = true;
      this.player.x = x;
      this.player.y = y;
      this.player.setAcceleration(0, 0);
      this.player.setVelocity(0, 0);
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
