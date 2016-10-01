import _State from './_State';
import GameObjects from '../game_objects';
import Fonts from '../fonts';

export default class Gameplay extends _State {
  create () {
    this.world.setBounds(0, 0, 1400, 1400);
    this.titleText = this.createTitleText(this.world.centerX, 40);
    this.player = GameObjects.player(this.game, this.world.centerX, 60, this.world);
    this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON);
  }

  createTitleText (x, y) {
    return Fonts.display(this.game, x, y, 'this is the game', 12, 'center', this.world);
  }

  update () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
      this.player.respawn(this.game.world.centerX, this.player.y);
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.O)) {
      this.player.destroy();
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.player.bankLeft();
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.player.bankRight();
    } else {
      this.player.normal();
    }
  }
}
