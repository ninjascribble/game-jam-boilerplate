export default class Loading extends Phaser.Scene {
  constructor () {
    super('Loading');
  }

  preload () {
    this.load.pack('assets', './assets/pack.json');
  }

  // create() is automagically triggerd after preload completes
  create () {
    this.anims.fromJSON(this.cache.json.get('animations'));
    this.scene.start('Menu');
  }
}
