import _Actor from './_Actor';

export default class Player extends _Actor {
  constructor (game, ship) {
    super(game);
    this.ship = ship;
    this.ship.body.maxVelocity = new Phaser.Point(120, 120);
  }

  respawn (x = 0, y = 0) {
    this.isAlive = true;
    this.ship.scale.x = 1;
    this.ship.x = x;
    this.ship.y = y;
    this.ship.body.acceleration.x = 0;
    this.ship.body.velocity.x = 0;
    this.ship.revive();
  }

  destroy () {
    this.isAlive = false;
    this.ship.body.acceleration.x = 0;
  }

  bankLeft () {
    this.ship.body.acceleration.x = -300;
  }

  bankRight () {
    this.ship.body.acceleration.x = 300;
  }

  update () {
    if (this.isAlive == false) {
      this.ship.animations.play('explode', null, null, true);
      return;
    }

    if (this.ship.body.acceleration.x > 0) {
      this.ship.scale.x = -1;
    } else {
      this.ship.scale.x = 1;
    }

    if (this.ship.body.acceleration.x != 0) {
      // Slow acceleration first...
      this.ship.body.acceleration.x = (Math.abs(this.ship.body.acceleration.x) <= 20) ?
        0 : this.ship.body.acceleration.x * 0.5;
      this.ship.animations.play('bank');
    } else {
      // Then velocity...
      this.ship.body.velocity.x = (Math.abs(this.ship.body.velocity.x) <= 20) ?
        0 : this.ship.body.velocity.x * 0.92;
      this.ship.animations.play('normal');
    }
  }
}
