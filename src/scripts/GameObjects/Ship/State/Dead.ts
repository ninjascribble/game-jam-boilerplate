import Interface from './Interface';
import Ship from '../index';

export default class Dead extends Interface {
  respawn (ship:Ship, x:number = 0, y:number = 0) {
    ship.setState(ship.IS_ALIVE);
    ship.setVisible(true);
    ship.setActive(true);
    ship.body.reset(x, y);
    ship.normal();
  }
}
