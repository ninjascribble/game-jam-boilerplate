export default class Loading extends Phaser.Scene {
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
      frameRate: 20,
      repeat: -1,
      frames: [
        { key: 'ship', frame: 0 },
        { key: 'ship', frame: 1 },
        { key: 'ship', frame: 2 }
      ]
    });

    this.anims.create({
      key: 'ship--bank',
      frameRate: 20,
      repeat: -1,
      frames: [
        { key: 'ship', frame: 3 },
        { key: 'ship', frame: 4 },
        { key: 'ship', frame: 5 }
      ]
    });

    this.anims.create({
      key: 'ship--explode',
      frameRate: 12,
      repeat: 0,
      hideOnComplete: true,
      frames: [
        { key: 'ship', frame: 6 },
        { key: 'ship', frame: 7 },
        { key: 'ship', frame: 8 }
      ]
    });

    this.scene.start('Menu');
  }
}
