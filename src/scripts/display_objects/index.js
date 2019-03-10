import { GameObjects } from 'Phaser';

const DISPLAY_FONT = 'Blocktopia_32pt';
const BODY_FONT = 'Blocktopia_12pt';

module.exports = {
  load: function load (loader) {
    loader.bitmapFont(DISPLAY_FONT, 'Blocktopia_32pt.png', 'Blocktopia_32pt.fnt');
    loader.bitmapFont(BODY_FONT, 'Blocktopia_12pt.png', 'Blocktopia_12pt.fnt');
  },

  displayFont: function displayFont (scene, text = '', x = 0, y = 0, align = 0) {
    const font = new GameObjects.BitmapText(scene, x, y, DISPLAY_FONT, text, 30, align);
    setBitmapTextOrigin(font, align);
    return font;
  },

  bodyFont: function displayFont (scene, text = '', x = 0, y = 0, align = 0) {
    const font = new GameObjects.BitmapText(scene, x, y, BODY_FONT, text, 12, align);
    setBitmapTextOrigin(font, align);
    return font;
  }
};



/**
 * @override Phaser.BitmapText._align
 */
function setBitmapTextOrigin(bitmapText, align) {
  switch (align) {
  case GameObjects.BitmapText.ALIGN_CENTER:
    bitmapText.setOrigin(0.5, 0.5);
    break;
  case GameObjects.BitmapText.ALIGN_RIGHT:
    bitmapText.setOrigin(1, 0.5);
    break;
  case GameObjects.BitmapText.ALIGN_LEFT:
  default:
    bitmapText.setOrigin(0, 0.5);
    break;
  }
}
