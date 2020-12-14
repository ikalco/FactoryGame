class Cell {
  constructor(arrX, arrY, placeDir) {
    this.whatAmI = 'Cell';
    this.arrNum = [arrX, arrY];
    this.pixelNumX = width/gameBoardSize;
    this.pixelNumY = (height-(height-820))/gameBoardSize;
    this.x = this.pixelNumX * this.arrNum[0];
    this.y = this.pixelNumY * this.arrNum[1];
    this.w = this.pixelNumX;
    this.h = this.pixelNumY;
    this.angle = 0;
    this.direction = placeDir;
    this.price = 0;
  }

  checkForMouse() {
    if (mouseIsPressed && mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      gameBoard[this.arrNum[0]][this.arrNum[1]] = player.getCurrentItem(this);
    }
  }
  
  getAngle() {
    if (this.direction == 'up') {
      this.angle = 0;
    }
    if (this.direction == 'right') {
      this.angle = 270;
    }
    if (this.direction == 'down') {
      this.angle = 180;
    }
    if (this.direction == 'left') {
      this.angle = 90;
    }
  }

  draw() {
    push();
    fill(0,0,0,0);
    stroke(0,0,0,100);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  update() {
    this.getAngle();
    this.checkForMouse();
    this.draw();
  }

}