import Ship from './Ship';

module.exports = {
  player: function player (game, x, y, group = null) {
    var player = new Ship(game, x, y, 'ship');
    if (group) {
      group.add(player);
    }
    return player;
  }
};
