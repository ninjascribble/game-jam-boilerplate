import Interface from './Interface';
import Alive from './Alive';
import Dying from './Dying';
import Dead from './Dead';

const _Alive = new Alive();
const _Dying = new Dying();
const _Dead = new Dead();

export {
  Interface,
  _Alive as Alive,
  _Dying as Dying,
  _Dead as Dead
};
