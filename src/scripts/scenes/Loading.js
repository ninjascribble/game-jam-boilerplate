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
    this.anims.create({
      key: 'ship--normal',
      defaultTextureKey: 'ship',
      frameRate: 20,
      repeat: -1,
      frames: [
        { frame: 0 },
        { frame: 1 },
        { frame: 2 }
      ]
    });

    this.anims.create({
      key: 'ship--bank',
      defaultTextureKey: 'ship',
      frameRate: 20,
      repeat: -1,
      frames: [
        { frame: 3 },
        { frame: 4 },
        { frame: 5 }
      ]
    });

    this.anims.create({
      key: 'ship--explode',
      defaultTextureKey: 'ship',
      frameRate: 12,
      repeat: 0,
      hideOnComplete: true,
      frames: [
        { frame: 6 },
        { frame: 7 },
        { frame: 8 }
      ]
    });

    this.scene.start('Menu');
  }
}
