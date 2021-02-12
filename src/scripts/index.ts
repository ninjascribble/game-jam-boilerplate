// Global import
import 'phaser';

import Gameplay from './Scenes/Gameplay';
import Loading from './Scenes/Loading';
import Menu from './Scenes/Menu';

const body: HTMLElement = document.body;
const container: HTMLElement = document.createElement('div');

body.setAttribute('style', `
  background-color: black;
`);

container.id = 'container';
container.setAttribute('style', `
  margin: 0 auto;
  max-width: 960px;
`);

body.appendChild(container);

new Phaser.Game({
  // 2x Gameboy resolution
  width: 320,
  height: 288,
  parent: 'container',
  scene: [ Loading, Menu, Gameplay ],
  render: {
    // Sets antialias and roundPixels to true. This is the best setting for pixel-art games.
    pixelArt: true
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: 0,
      // debug: true,
      debugBodyColor: 0xffff00,
      setBounds: {
        x: 10,
        y: 10,
        width: 300,
        height: 268,
        thickness: 32
      }
    }
  }
});
