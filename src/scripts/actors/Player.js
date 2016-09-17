import _Actor from './_Actor';

export default class Player extends _Actor {
  constructor (game, ship) {
    super(game);
    this.ship = ship;
  }

  update () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
      this.ship.scale.x = 1;
      this.ship.x = this.game.world.centerX;
      this.ship.body.maxVelocity = new Phaser.Point(120, 120);
      this.ship.body.acceleration.x = 0;
      this.ship.body.velocity.x = 0;
      this.ship.revive();
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.O)) {
      this.ship.scale.x = 1;
      this.ship.body.acceleration.x = 0;
      this.ship.play('explode', null, null, true);
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.ship.scale.x = 1;
      if (this.ship.body.velocity.x >= 0) {
        this.ship.body.velocity.x = 0;
        this.ship.body.acceleration.x = -100;
      } else {
        this.ship.body.acceleration.x *= 1.2;
      }
      this.ship.play('bank');
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.ship.scale.x = -1;
      if (this.ship.body.velocity.x <= 0) {
        this.ship.body.velocity.x = 0;
        this.ship.body.acceleration.x = 100;
      } else {
        this.ship.body.acceleration.x *= 1.2;
      }
      this.ship.play('bank');
    }

    if (!this.input.keyboard.isDown(Phaser.Keyboard.LEFT)
      && !this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.ship.body.acceleration.x = 0;
      this.ship.body.velocity.x = (Math.abs(this.ship.body.velocity.x) <= 20) ? 0
        : this.ship.body.velocity.x * 0.92;
      this.ship.play('normal');
    }
  }
}
