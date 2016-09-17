import DisplayFont from './DisplayFont';

module.exports = {
  loadResources: function loadResources (loader) {
    DisplayFont.loadResource(loader);
  },

  display: function display (game, x, y, text, size, align, group) {
    var font = new DisplayFont(game, x, y, text, size, align);

    if (group) {
      group.add(font);
    }

    return font;
  }
};
