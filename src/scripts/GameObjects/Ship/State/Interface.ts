import Ship from '../index';

export default class Interface {
  normal (ship:Ship) : void {}
  bankLeft (ship:Ship) : void {}
  bankRight (ship:Ship) : void {}
  explode (ship:Ship) : void {}
  die (ship:Ship) : void {}
  respawn (ship:Ship, x:number, y:number) : void {}
}
