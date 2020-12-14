class Material {
  constructor(arrX, arrY) {
    debug.numOfMaterials++;
    this.arrNum = [arrX, arrY];
    this.pixelNumX = width / gameBoardSize;
    this.pixelNumY = (height - (height - 800)) / gameBoardSize;
    this.x = this.pixelNumX * this.arrNum[0];
    this.y = this.pixelNumY * this.arrNum[1];
    this.w = 25;
    this.h = 25;
    this.blockW = this.pixelNumX;
    this.blockH = this.pixelNumY;
    this.currentBlock = gameBoard[this.arrNum[0]][this.arrNum[1]];
    this.item = '';
    this.timer = 0;
  }

  checkOnBlocks() {
    if (this.currentBlock.whatAmI == 'Conveyor') {
      this.currentBlock.moveConveyor(this);
    }
    if (this.currentBlock.whatAmI == 'Presser') {
      this.currentBlock.workPresser(this);
    }
    if (this.currentBlock.whatAmI == 'Seller') {
      this.currentBlock.useSeller(this);
    }
    if (this.currentBlock.whatAmI == 'Triangular') {
      this.currentBlock.workTriangular(this);
    }
  }

  delete() {
    debug.numOfMaterials--;
    player.materials.splice(player.materials.indexOf(this), 1);
  }

  checkDelete() {
    if (gameBoard[this.arrNum[0]][this.arrNum[1]].whatAmI != 'Conveyor') {
      if (this.timer == 300) {
        this.timer = 0;
        this.delete();
      }
      this.timer++;
    } else {
      this.timer = 0;
    }
  }

  draw() {
    push();
    fill(0);
    noStroke();
    circle(this.x + this.blockW / 2, this.y + this.blockH / 2, this.w);
    pop();
  }

  update() {
    this.currentBlock = gameBoard[this.arrNum[0]][this.arrNum[1]];
    this.checkOnBlocks();
    this.checkDelete();
    this.draw();
  }
}