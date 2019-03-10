import { GameObjects } from 'Phaser';

export default class Ship extends GameObjects.Sprite {
  constructor (scene, x, y, key) {
    super(scene, x, y, key);

    this.health = 100;

    if (scene.anims.exists(`${key}--normal`) == false) {
      scene.anims.create({
        key: `${key}--normal`,
        defaultTextureKey: key,
        frameRate: 20,
        repeat: -1,
        frames: scene.anims.generateFrameNumbers(key, {
          prefix: `${key}--normal`,
          start: 0,
          end: 2
        })
      });
    }

    if (scene.anims.exists(`${key}--bank`) == false) {
      scene.anims.create({
        key: `${key}--bank`,
        defaultTextureKey: key,
        frameRate: 20,
        repeat: -1,
        frames: scene.anims.generateFrameNumbers(key, {
          prefix: `${key}--bank`,
          start: 3,
          end: 5
        })
      });
    }

    if (scene.anims.exists(`${key}--explode`) == false) {
      scene.anims.create({
        key: `${key}--explode`,
        defaultTextureKey: key,
        frameRate: 12,
        repeat: 0,
        hideOnComplete: true,
        frames: scene.anims.generateFrameNumbers(key, {
          prefix: `${key}--explode`,
          start: 6,
          end: 8
        })
      });
    }

    // this.anchor.setTo(0.5, 1);
    //
    // scene.physics.enable(this);
    // this.body.drag.x = 300;
    // this.body.maxVelocity = new Phaser.Point(120, 120);
    this.normal();
  }

  respawn (x = 0, y = 0) {
    if (this.health === 0) {
      this.health = 100;
      this.visible = true;
      this.x = x;
      this.y = y;
      // this.body.velocity.x = 0;
      // this.revive();
      this.normal();
    }
  }

  destroy () {
    if (this.health > 0) {
      this.health = 0;
      // will set this.visible = false when animation ends
      this.anims.play('ship--explode', true);
    }
  }

  normal () {
    if (this.health > 0) {
      this.anims.play('ship--normal', true);
      // this.scale.x = 1;
    }
  }

  bankLeft () {
    if (this.health > 0) {
      this.anims.play('ship--bank', true);
      // this.body.velocity.x = -this.body.maxVelocity.x;
      // this.scale.x = 1;
    }
  }

  bankRight () {
    if (this.health > 0) {
      this.anims.play('ship--bank', true);
      // this.body.velocity.x = this.body.maxVelocity.x;
      // this.scale.x = -1;
    }
  }
}
