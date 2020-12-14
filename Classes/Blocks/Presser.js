 class Presser extends Cell {
  constructor(arrX, arrY, placeDir) {
    super(arrX, arrY);
    debug.numOfPressers++;
    this.price = 30;
    gui.money -= this.price;
    this.whatAmI = 'Presser';
  }

  makePlate(arrX, arrY, currentItem) {
    if (currentItem == 'iron') {
      let plate = new IronPlate(arrX, arrY);
      return plate;
    }
    if (currentItem == 'gold') {
      let plate = new GoldPlate(arrX, arrY);
      return plate;
    }
  }

  pressItem(currentItem) {
    if (this.direction == 'up') {
      player.materials.push(this.makePlate(this.arrNum[0], this.arrNum[1] - 1, currentItem));
    }
    if (this.direction == 'down') {
      player.materials.push(this.makePlate(this.arrNum[0], this.arrNum[1] + 1, currentItem));
    }
    if (this.direction == 'right') {
      player.materials.push(this.makePlate(this.arrNum[0] + 1, this.arrNum[1], currentItem));
    }
    if (this.direction == 'left') {
      player.materials.push(this.makePlate(this.arrNum[0] - 1, this.arrNum[1], currentItem));
    }
  }

  workPresser(mat) {
    let currentItem = mat.item;
    mat.delete();
    if (currentItem == 'iron') {
      this.pressItem('iron');
    }
    if (currentItem == 'gold') {
      this.pressItem('gold');
    }
  }

  draw() {
    super.draw();
    drawPicture(presserPng, this.angle, this);
  }

  update() {
    super.update();
  }
}
/*
class Furnace extends Cell {
  constructor(arrX, arrY, placeDir) {
    super(arrX, arrY);
    debug.numOfFurnaces++;
    this.price = 50;
    gui.money -= this.price;
    this.whatAmI = 'Furnace'
  }

  makePlate(arrX, arrY, currentItem) {
    if (currentItem == 'iron') {
      let plate = new IronPlate(arrX, arrY);
      return plate;
    }
    if (currentItem == 'gold') {
      let plate = new GoldPlate(arrX, arrY);
      return plate;
    }
  }

  smeltItem(currentItem) {
    if (this.direction == 'up') {
      player.materials.push(this.makePlate(this.arrNum[0], this.arrNum[1] - 1, currentItem));
    }
    if (this.direction == 'down') {
      player.materials.push(this.makePlate(this.arrNum[0], this.arrNum[1] + 1, currentItem));
    }
    if (this.direction == 'right') {
      player.materials.push(this.makePlate(this.arrNum[0] + 1, this.arrNum[1], currentItem));
    }
    if (this.direction == 'left') {
      player.materials.push(this.makePlate(this.arrNum[0] - 1, this.arrNum[1], currentItem));
    }
  }

  workFurnace(mat) {
    let currentItem = mat.item;
    mat.delete();
    if (currentItem == 'iron') {
      this.smeltItem('iron');
    }
    if (currentItem == 'gold') {
      this.smeltItem('gold');
    }
  }

  draw() {
    super.draw();
    drawPicture(furnacePng, this.angle, this);
  }

  update() {
    super.update();
  }

}
*/