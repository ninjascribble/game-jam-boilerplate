import Player from './Player';
import Sprites from '../sprites';

module.exports = {
  player: function player (game, x, y, group = null) {
    var ship = Sprites.ship(game, x, y);
    var player = new Player(game, ship);

    if (group) {
      group.add(player.ship);
    }

    return player;
  }
};
