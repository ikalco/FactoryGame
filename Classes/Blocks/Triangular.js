class Triangular extends Cell {
  constructor(arrX, arrY, placeDir) {
    super(arrX, arrY);
    debug.numOfTriangulars++;
    this.price = 30;
    gui.money -= this.price;
    this.whatAmI = 'Triangular'
  }

  makeTriangle(arrX, arrY, currentItem) {
    if (currentItem == 'iron') {
      let trin = new IronTrin(arrX, arrY);
      return trin;
    }
    if (currentItem == 'gold') {
      let trin = new GoldTrin(arrX, arrY);
      return trin;
    }
  }

  triangleItem(currentItem) {
    if (this.direction == 'up') {
      player.materials.push(this.makeTriangle(this.arrNum[0], this.arrNum[1] - 1, currentItem));
    }
    if (this.direction == 'down') {
      player.materials.push(this.makeTriangle(this.arrNum[0], this.arrNum[1] + 1, currentItem));
    }
    if (this.direction == 'right') {
      player.materials.push(this.makeTriangle(this.arrNum[0] + 1, this.arrNum[1], currentItem));
    }
    if (this.direction == 'left') {
      player.materials.push(this.makeTriangle(this.arrNum[0] - 1, this.arrNum[1], currentItem));
    }
  }

  workTriangular(mat) {
    let currentItem = mat.item;
    mat.delete();
    if (currentItem == 'iron') {
      this.triangleItem('iron');
    }
    if (currentItem == 'gold') {
      this.triangleItem('gold');
    }
  }

  draw() {
    super.draw();
    drawPicture(TriangularPng, this.angle, this);
  }

  update() {
    super.update();
  }
}