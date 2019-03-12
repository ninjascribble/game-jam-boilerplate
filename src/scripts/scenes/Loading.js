import { Canvas, Input, ScaleManager, Scene } from 'Phaser';

export default class Loading extends Scene {
  constructor () {
    super('Loading');
  }

  preload () {
    this.load.bitmapFont('Blocktopia_32pt', 'Blocktopia_32pt.png', 'Blocktopia_32pt.fnt');
    this.load.bitmapFont('Blocktopia_12pt', 'Blocktopia_12pt.png', 'Blocktopia_12pt.fnt');
    this.load.spritesheet('ship', 'ship.png', { frameWidth: 6, frameHeight: 6 });
  }

  // create() is automagically triggerd after preload completes
  create () {
    this.scene.start('Menu');
  }
}
