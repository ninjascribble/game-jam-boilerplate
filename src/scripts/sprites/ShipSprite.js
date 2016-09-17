import _Sprite from './_Sprite';

const KEY = 'ship';
const SRC = 'assets/ship.png';
const WIDTH = 6;
const HEIGHT = 6;

export default class ShipSprite extends _Sprite {
  static loadResource (loader) {
    loader.load.spritesheet(KEY, SRC, WIDTH, HEIGHT);
  }

  constructor (game, x, y) {
    super(game, x, y, KEY);
    game.physics.enable(this);
    this.animations.add('normal', [0, 1, 2], 20, true);
    this.animations.add('bank', [3, 4, 5], 20, true);
    this.animations.add('explode', [6, 7, 8], 12, false);
    this.animations.play('normal');
    this.anchor.setTo(0.5, 1);
  }
}
