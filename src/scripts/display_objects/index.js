import BitmapFont from './BitmapFont';

const DISPLAY_FONT = 'Blocktopia_32pt';
const BODY_FONT = 'Blocktopia_12pt';

module.exports = {
  load: function load (loader) {
    loader.load.bitmapFont(DISPLAY_FONT, 'assets/Blocktopia_32pt.png', 'assets/Blocktopia_32pt.fnt');
    loader.load.bitmapFont(BODY_FONT, 'assets/Blocktopia_12pt.png', 'assets/Blocktopia_12pt.fnt');
  },

  displayFont: function displayFont (game, text = '', x = 0, y = 0, align = 'left') {
    return new BitmapFont(game, x, y, DISPLAY_FONT, text, 30, align);
  },

  bodyFont: function displayFont (game, text = '', x = 0, y = 0, align = 'left') {
    return new BitmapFont(game, x, y, BODY_FONT, text, 12, align);
  }
};
