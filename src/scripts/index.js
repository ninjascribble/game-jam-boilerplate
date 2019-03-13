import { Game, Scale } from 'Phaser';
import { Gameplay, Loading, Menu } from './scenes';

const game = new Game({
  // 2x Gameboy resolution
  width: 320,
  height: 288,
  parent: 'content',
  scene: [ Loading, Menu, Gameplay ],
  render: {
    // Sets antialias and roundPixels to true. This is the best setting for pixel-art games.
    pixelArt: true
  },
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH
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
