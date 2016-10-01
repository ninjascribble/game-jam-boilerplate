import Ship from './Ship';

const PLAYER_SHIP = 'ship';

module.exports = {
  load: function load (loader) {
    loader.load.spritesheet(PLAYER_SHIP, 'assets/ship.png', 6, 6);
  },

  player: function player (game, x, y) {
    return new Ship(game, x, y, PLAYER_SHIP);
  }
};
