import Ship from './Ship';

const SHIP = 'ship';

module.exports = {
  load: function load (loader) {
    loader.load.spritesheet(SHIP, 'assets/ship.png', 6, 6);
  },

  player: function player (game, x, y, group = null) {
    var player = new Ship(game, x, y, SHIP);
    if (group) {
      group.add(player);
    }
    return player;
  }
};
