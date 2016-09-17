import Gameplay from './Gameplay';
import Loading from './Loading';
import Menu from './Menu';

module.exports = {
  loading: function loading (stateManager) {
    changeState(stateManager, Loading);
  },

  menu: function menu (stateManager) {
    changeState(stateManager, Menu);
  },

  gameplay: function gameplay (stateManager) {
    changeState(stateManager, Gameplay);
  }
};

/**
 * This weird little work-around is here because I wasn't able to import
 * index.js into files in the same directory. Injecting the module via
 * each state's constructor felt OKAY, but I'd love to understand more.
 */
function createState (state) {
  return new state(module.exports);
}

function changeState (stateManager, state) {
  if (stateManager.checkState(state.name) != true) {
    stateManager.add(state.name, createState(state));
  }
  stateManager.start(state.name);
}
