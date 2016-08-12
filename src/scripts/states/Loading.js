import Fonts from '../constants/Fonts';
import States from '../constants/States';

export default class GameState extends Phaser.State {
  preload () {
    super.preload();

    // Pixel-perfect canvas scaling!
    // Thanks to http://www.belenalbeza.com/retro-crisp-pixel-art-in-phaser/
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    // Rounds x/y positions to the nearest whole to avoid sub-pixel rendering
    this.game.renderer.renderSession.roundPixels = true;

    // Sets browser-prefixed "image-rendering" CSS property on the game canvas
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    // Prevent these keys from being handled by the browser
    // when the game is in focus
    this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);

    this.game.load.bitmapFont(Fonts.DISPLAY.key, Fonts.DISPLAY.image, Fonts.DISPLAY.manifest);
  }

  create () {
    super.create();
  }

  update () {
    super.update();
    this.game.state.start(States.MENU.key);
  }

  render () {
    super.update();
  }

  shutdown () {
    super.shutdown();
  }
}
