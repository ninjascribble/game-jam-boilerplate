import DisplayObjects from '../display_objects';
import GameObjects from '../game_objects';
import { Canvas, Input, ScaleManager, Scene } from 'Phaser';

export default class Loading extends Scene {
  constructor () {
    super('Loading');
  }

  init () {
    // Sets browser-prefixed "image-rendering" CSS property on the game canvas
    // Canvas.setImageRenderingCrisp(game.canvas);

    // Prevent these keys from being handled by the browser
    // when the game is in focus
    this.input.keyboard.addCapture(Input.Keyboard.KeyCodes.SPACE);
  }

  preload () {
    DisplayObjects.load(this.load);
    GameObjects.load(this.load);
  }

  // create() is automagically triggerd after preload completes
  create () {
    this.scene.start('Menu');
  }
}
