import Ship from './Ship';

const PLAYER_SHIP = 'ship';

module.exports = {
  load: function load (loader) {
    loader.spritesheet(PLAYER_SHIP, 'ship.png', {
      frameWidth: 6,
      frameHeight: 6
    });
  },

  Player: function player (game, x, y) {
    return new Ship(game, x, y, PLAYER_SHIP);
  }
};
