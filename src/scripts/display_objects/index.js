import { GameObjects } from 'Phaser';

module.exports = {
  displayFont: function displayFont (scene, text = '', x = 0, y = 0, align = 0) {
    const font = new GameObjects.BitmapText(scene, x, y, 'Blocktopia_32pt', text, 30, align);
    setBitmapTextOrigin(font, align);
    return font;
  },

  bodyFont: function bodyFont (scene, text = '', x = 0, y = 0, align = 0) {
    const font = new GameObjects.BitmapText(scene, x, y, 'Blocktopia_12pt', text, 12, align);
    setBitmapTextOrigin(font, align);
    return font;
  }
};

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
