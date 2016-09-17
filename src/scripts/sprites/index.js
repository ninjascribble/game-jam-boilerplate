import ShipSprite from './ShipSprite';

module.exports = {
  loadResources: function loadResources (loader) {
    ShipSprite.loadResource(loader);
  },

  ship: function playerShip (game, x, y) {
    return new ShipSprite(game, x, y);
  }
};
