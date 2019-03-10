import BitmapFont from './BitmapFont';

const DISPLAY_FONT = 'Blocktopia_32pt';
const BODY_FONT = 'Blocktopia_12pt';

module.exports = {
  load: function load (loader) {
    loader.bitmapFont(DISPLAY_FONT, 'Blocktopia_32pt.png', 'Blocktopia_32pt.fnt');
    loader.bitmapFont(BODY_FONT, 'Blocktopia_12pt.png', 'Blocktopia_12pt.fnt');
  },

  displayFont: function displayFont (scene, text = '', x = 0, y = 0, align = 'left') {
    return new BitmapFont(scene, x, y, DISPLAY_FONT, text, 30, align);
  },

  bodyFont: function displayFont (scene, text = '', x = 0, y = 0, align = 'left') {
    return new BitmapFont(scene, x, y, BODY_FONT, text, 12, align);
  }
};
