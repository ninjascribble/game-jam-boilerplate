export default class Ship extends Phaser.GameObjects.Sprite {
  readonly IS_ALIVE = 0;
  readonly IS_DYING = 1;
  readonly IS_DEAD = 2;

  constructor (scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'ship');
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setBounce(1);
    this.body.setDrag(240, 240);
    this.body.setMaxVelocity(120, 120);
    this.body.setCollideWorldBounds(true);
    this.setState(this.IS_ALIVE);
  }

  respawn (x:number = 0, y:number = 0) {
    if (this.state === this.IS_DEAD) {
      this.setState(this.IS_ALIVE);
      this.setVisible(true);
      this.setActive(true);
      this.body.reset(x, y);
      this.normal();
    }
  }

  explode () {
    if (this.state === this.IS_ALIVE) {
      this.setState(this.IS_DYING);
      this.body.setAcceleration(0, 0);
      this.body.setVelocity(0, 0);
      this.anims.play('ship--explode', true);
      this.die();
    }
  }

  normal () {
    if (this.state === this.IS_ALIVE) {
      this.anims.play('ship--normal', true);
      this.flipX = false;
      this.body.setAcceleration(0, 0);
    }
  }

  bankLeft () {
    if (this.state === this.IS_ALIVE) {
      this.anims.play('ship--bank', true);
      this.flipX = false;
      this.body.setAccelerationX(-120);
    }
  }

  bankRight () {
    if (this.state === this.IS_ALIVE) {
      this.anims.play('ship--bank', true);
      this.flipX = true;
      this.body.setAccelerationX(120);
    }
  }

  die () {
    // This will finish off a dying sprite when the "explode" animation completes
    if (this.state === this.IS_DYING && this.anims.isPlaying == true) {
      this.scene.time.addEvent({ callback: () => this.die() })
    } else {
      this.setState(this.IS_DEAD);
      this.setVisible(false);
      this.setActive(false);
    }
  }
}
