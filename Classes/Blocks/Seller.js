class Seller extends Cell {
  constructor(arrX, arrY, placeDir) {
    super(arrX, arrY);
    debug.numOfSellers++;
    this.price = 15;
    gui.money -= this.price;
    this.whatAmI = 'Seller'
  }

  useSeller(mat) {
    let currentItem = mat.item;
    mat.delete();
    
    if (currentItem == 'iron') {
      gui.money += 2;
    }
    if (currentItem == 'gold') {
      gui.money += 2;
    } 
    if (currentItem == 'ironPlate') {
      gui.money += 5;
    }
    if (currentItem == 'goldPlate') {
      gui.money += 5;
    }
    if (currentItem == 'ironTrin') {
      gui.money += 5;
    }
    if (currentItem == 'goldTrin') {
      gui.money += 5;
    }
  }

  draw() {
    super.draw();
    drawPicture(sellerPng, this.angle, this);
  }

  update() {
    super.update();
  }
}