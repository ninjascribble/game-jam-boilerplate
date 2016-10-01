export default class Ship extends Phaser.Sprite {
  constructor (game, x, y, key) {
    super(game, x, y, key);
    this.animations.add('normal', [0, 1, 2], 20, true);
    this.animations.add('bank', [3, 4, 5], 20, true);
    this.animations.add('explode', [6, 7, 8], 12, false);
    this.anchor.setTo(0.5, 1);

    game.physics.enable(this);
    this.body.drag.x = 300;
    this.body.maxVelocity = new Phaser.Point(120, 120);
    this.normal();
  }

  respawn (x = 0, y = 0) {
    this.health = 100;
    this.alive = true;
    this.x = x;
    this.y = y;
    this.body.velocity.x = 0;
    this.revive();
    this.normal();
  }

  destroy () {
    this.health = 0;
    this.animations.play('explode', null, null, true);
  }

  normal () {
    if (this.health > 0) {
      this.animations.play('normal');
      this.scale.x = 1;
    }
  }

  bankLeft () {
    if (this.health > 0) {
      this.animations.play('bank');
      this.body.velocity.x = -this.body.maxVelocity.x;
      this.scale.x = 1;
    }
  }

  bankRight () {
    if (this.health > 0) {
      this.animations.play('bank');
      this.body.velocity.x = this.body.maxVelocity.x;
      this.scale.x = -1;
    }
  }
}
