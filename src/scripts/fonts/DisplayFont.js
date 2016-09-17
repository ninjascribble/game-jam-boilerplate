import _BitmapFont from './_BitmapFont';

const KEY = '8bit_wonder-light';
const FONT = 'assets/8bit_wonder-light.png';
const MAP = 'assets/8bit_wonder-light.fnt';

export default class DisplayFont extends _BitmapFont {
  static loadResource (loader) {
    loader.load.bitmapFont(KEY, FONT, MAP);
  }

  constructor (game, x, y, text, size, align) {
    super(game, x, y, KEY, text, size, align);
  }
}
