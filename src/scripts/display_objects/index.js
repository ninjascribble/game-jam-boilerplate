import DisplayFont from './DisplayFont';

const DISPLAY_FONT = '8bit_wonder-light';

module.exports = {
  load: function load (loader) {
    loader.load.bitmapFont(DISPLAY_FONT, 'assets/8bit_wonder-light.png', 'assets/8bit_wonder-light.fnt');
  },

  displayFont: function displayFont (game, x, y, text, size, align, group) {
    var font = new DisplayFont(game, x, y, DISPLAY_FONT, text, size, align);
    if (group) {
      group.add(font);
    }
    return font;
  }
};
