export default class BitmapFont extends Phaser.BitmapText {
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
      this.anchor.x = 0.5;
      this.anchor.y = 0.5;
      break;
    case 'right':
      this.anchor.x = 1;
      this.anchor.y = 0.5;
      break;
    case 'left':
    default:
      this.anchor.x = 0;
      this.anchor.y = 0.5;
      break;
    }
  }

  get _align () {
    return this.__align;
  }
}
