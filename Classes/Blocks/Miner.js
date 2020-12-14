class Miner extends Cell {
  constructor(arrX, arrY, placeDir) {
    super(arrX, arrY);
    debug.numOfMiners++;
    this.price = 25;
    gui.money -= this.price;
    this.whatAmI = 'Miner';
    this.miningItem = 'iron';
    this.timer = 0;
    this.minerPerSec = 2;
  }
  
  makeMat(arrX, arrY) {
    if (this.miningItem == 'iron') {
      return new Iron(arrX, arrY);
    }
    if (this.miningItem == 'gold') {
      return new Gold(arrX, arrY);
    }
  }

  produceItem() {
    if (this.timer == this.minerPerSec*fr) {
      this.timer = 0;
      if (this.direction == 'up') {
        player.materials.push(this.makeMat(this.arrNum[0], this.arrNum[1] - 1));
      }
      if (this.direction == 'down') {
        player.materials.push(this.makeMat(this.arrNum[0], this.arrNum[1] + 1));
      }
      if (this.direction == 'right') {
        player.materials.push(this.makeMat(this.arrNum[0] + 1, this.arrNum[1]));
      }
      if (this.direction == 'left') {
        player.materials.push(this.makeMat(this.arrNum[0] - 1, this.arrNum[1]));
      }
    }
    this.timer++;
  }

  draw() {
    super.draw();
    drawPicture(minerPng, this.angle, this);
  }

  update() {
    this.produceItem();
    super.update();
  }

}