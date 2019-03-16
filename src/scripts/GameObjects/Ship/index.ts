import { Interface, Alive, Dying, Dead } from './State';

export default class Ship extends Phaser.GameObjects.Sprite {
  readonly IS_ALIVE = 0;
  readonly IS_DYING = 1;
  readonly IS_DEAD = 2;
  private interface: Interface;

  constructor (scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'ship');
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setBounce(1);
    this.body.setDrag(240, 240);
    this.body.setMaxVelocity(120, 120);
    this.body.setCollideWorldBounds(true);
    this.setState(this.IS_ALIVE);
  }

  setState (value: any) : any {
    super.setState(value);
    switch (value) {
      case this.IS_ALIVE: this.interface = Alive; break;
      case this.IS_DYING: this.interface = Dying; break;
      case this.IS_DEAD: this.interface = Dead; break;
    }
  }

  normal () {
    this.interface.normal(this);
  }

  bankLeft () {
    this.interface.bankLeft(this);
  }

  bankRight () {
    this.interface.bankRight(this);
  }

  explode () {
    this.interface.explode(this);
  }

  die () {
    this.interface.die(this);
  }

  respawn (x:number = 0, y:number = 0) {
    this.interface.respawn(this, x, y);
  }
}
