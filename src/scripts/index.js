import States from './constants/States';
import Gameplay from './states/Gameplay';
import Loading from './states/Loading';
import Menu from './states/Menu';

const width = 192;
const height = 120;
const renderer = Phaser.AUTO;
const parent = 'content';
const defaultState = null;
const transparent = false;
const antialias = false;
const physicsConfig = null;
const game = new Phaser.Game(
  width,
  height,
  renderer,
  parent,
  defaultState,
  transparent,
  antialias,
  physicsConfig
);

game.state.add(States.LOADING, Loading);
game.state.add(States.MENU, Menu);
game.state.add(States.GAMEPLAY, Gameplay);
game.state.start(States.LOADING);
