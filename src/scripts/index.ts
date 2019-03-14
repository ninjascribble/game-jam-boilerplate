import 'phaser';
import Gameplay from './scenes/Gameplay';
import Loading from './scenes/Loading';
import Menu from './scenes/Menu';

const container = document.createElement('div');

container.id = 'container';
document.body.appendChild(container);

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
    default: 'impact',
    impact: {
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
