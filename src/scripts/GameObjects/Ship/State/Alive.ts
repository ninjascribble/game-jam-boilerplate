import Interface from './Interface';
import Ship from '../index';

export default class Alive extends Interface {
  normal (ship:Ship) : void {
    ship.anims.play('ship--normal', true);
    ship.flipX = false;
    ship.body.setAcceleration(0, 0);
  }

  bankLeft (ship:Ship) : void {
    ship.anims.play('ship--bank', true);
    ship.flipX = false;
    ship.body.setAccelerationX(-120);
  }

  bankRight (ship:Ship) : void {
    ship.anims.play('ship--bank', true);
    ship.flipX = false;
    ship.body.setAccelerationX(120);
  }

  explode (ship:Ship) : void {
    ship.setState(ship.IS_DYING);
    ship.body.setAcceleration(0, 0);
    ship.body.setVelocity(0, 0);
    ship.anims.play('ship--explode', true);
    ship.die();
  }

  die (ship:Ship) : void {
    ship.setState(ship.IS_DEAD);
    ship.setVisible(false);
    ship.setActive(false);
  }
};
