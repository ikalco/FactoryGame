class Conveyor extends Cell {
  constructor(arrX, arrY, placeDir) {
    super(arrX, arrY);
    debug.numOfConveyors++;
    this.price = 5;
    gui.money -= this.price;
    this.whatAmI = 'Conveyor'
  }

  moveConveyor(movingItem) {
    //this.currentBlock = gameBoard[this.arrNum[0]][this.arrNum[1]];
    this.movingItem = movingItem;
    if (this.whatAmI == 'Conveyor') {
      if (this.direction == 'up') {
        this.movingItem.y = constrain(this.movingItem.y, this.y - this.h, this.y + this.h);
        this.movingItem.y -= player.conveyorSpeed;
        if (this.movingItem.y == this.y - this.h) {
          this.movingItem.arrNum[1]--;
        }
      }
      if (this.direction == 'down') {
        this.movingItem.y = constrain(this.movingItem.y, this.y - this.h, this.y + this.h);
        this.movingItem.y += player.conveyorSpeed;
        if (this.movingItem.y == this.y + this.h) {
          this.movingItem.arrNum[1]++;
        }
      }
      if (this.direction == 'right') {
        this.movingItem.x = constrain(this.movingItem.x, this.movingItem.x - this.w, this.x + this.w);
        this.movingItem.x += player.conveyorSpeed;
        if (this.movingItem.x == this.x + this.w) {
          this.movingItem.arrNum[0]++;
        }
      }
      if (this.direction == 'left') {
        this.movingItem.x = constrain(this.movingItem.x, this.movingItem.x - this.w, this.x + this.w);
        this.movingItem.x -= player.conveyorSpeed;
        if (this.movingItem.x == this.x - this.w) {
          this.movingItem.arrNum[0]--;
        }
      }
    }
  }

  draw() {
    super.draw();
    drawPicture(conveyorPng, this.angle, this);
  }

  update() {
    super.update();
  }

}