import Interface from './Interface';
import Ship from '../index';

export default class Dying extends Interface {
  die (ship:Ship) : void {
    if (ship.anims.isPlaying) {
      window.requestAnimationFrame(ship.die.bind(ship));
    } else {
      ship.setState(ship.IS_DEAD);
      ship.setVisible(false);
      ship.setActive(false);
    }
  }
}
