import { GameObjects } from 'Phaser';

export default class BitmapFont extends GameObjects.BitmapText {
  constructor (game, x, y, key, text, size, align) {
    super(game, x, y, key, text, size, align);
  }

  /**
   * @override Phaser.BitmapText._align
   */
  set _align (value) {
    this.__align = value;
    switch (value) {
    case 'center':
      this.originX = 0.5;
      this.originY = 0.5;
      break;
    case 'right':
      this.originX = 1;
      this.originY = 0.5;
      break;
    case 'left':
    default:
      this.originX = 0;
      this.originY = 0.5;
      break;
    }
  }

  get _align () {
    return this.__align;
  }
}
