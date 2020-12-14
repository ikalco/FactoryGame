class Player {
  constructor(arrX, arrY) {
    this.aX = arrX;
    this.aY = arrY;
    this.blocksChecked = [];
    this.currentItem = 'Conveyor';
    this.conveyorSpeed = 1;
    this.placeDir = 'up';
    this.keyUp = true;
    this.materials = [];
  }

  checkInputKeys() {
    if (keyIsDown(49)) {
      this.currentItem = 'Conveyor';
    }
    if (keyIsDown(50)) {
      this.currentItem = 'Miner';
    }
    if (keyIsDown(51)) {
      this.currentItem = 'Presser';
    }
    if (keyIsDown(52)) {
      this.currentItem = 'Seller';
    }
    if (keyIsDown(53)) {
      this.currentItem = 'Triangular';
    }
    if (keyIsDown(48)) {
      this.currentItem = 'Delete';
    }
  }

  checkPlaceDir() {
    if (keyIsDown(82) && this.keyUp) {
      if (this.placeDir == 'up') {
        this.placeDir = 'right';
        this.keyUp = false;
        return;
      }
      if (this.placeDir == 'right') {
        this.placeDir = 'down';
        this.keyUp = false;
        return;
      }
      if (this.placeDir == 'down') {
        this.placeDir = 'left';
        this.keyUp = false;
        return;
      }
      if (this.placeDir == 'left') {
        this.placeDir = 'up';
        this.keyUp = false;
        return;
      }
    }
    if (!keyIsPressed) {
      this.keyUp = true;
    }
  }

  manageInventory() {
    this.checkPlaceDir();
    this.checkInputKeys();
  }

  getCurrentItem(cellChecking) {
    if (this.blocksChecked.includes(cellChecking) || cellChecking.whatAmI == this.currentItem) {
      gameBoard[cellChecking.arrNum[0]][cellChecking.arrNum[1]].direction = this.placeDir;
      return gameBoard[cellChecking.arrNum[0]][cellChecking.arrNum[1]];
    }

    switch (this.currentItem) {
      case 'Conveyor':
      if (gui.money > 5) {
        this.blocksChecked.push(cellChecking);
        return new Conveyor(cellChecking.arrNum[0], cellChecking.arrNum[1], this.placeDir);
      } else {
        return gameBoard[cellChecking.arrNum[0]][cellChecking.arrNum[1]];
      }
      break;
      case 'Miner':
      if (gui.money > 25) {
        this.blocksChecked.push(cellChecking);
        return new Miner(cellChecking.arrNum[0], cellChecking.arrNum[1], this.placeDir);
      } else {
        return gameBoard[cellChecking.arrNum[0]][cellChecking.arrNum[1]];
      }
      break;
      case 'Seller':
      if (gui.money > 15) {
        this.blocksChecked.push(cellChecking);
        return new Seller(cellChecking.arrNum[0], cellChecking.arrNum[1], this.placeDir);
      } else {
        return gameBoard[cellChecking.arrNum[0]][cellChecking.arrNum[1]];
      }
      break;
      case 'Presser':
      if (gui.money > 30) {
        this.blocksChecked.push(cellChecking);
        return new Presser(cellChecking.arrNum[0], cellChecking.arrNum[1], this.placeDir);
      } else {
        return gameBoard[cellChecking.arrNum[0]][cellChecking.arrNum[1]];
      }
      break;
      case 'Triangular':
      if (gui.money > 25) {
        this.blocksChecked.push(cellChecking);
        return new Triangular(cellChecking.arrNum[0], cellChecking.arrNum[1], this.placeDir);
      } else {
        return gameBoard[cellChecking.arrNum[0]][cellChecking.arrNum[1]];
      }
      break;
      case 'Delete':
      this.blocksChecked.push(cellChecking);
      return new Cell(cellChecking.arrNum[0], cellChecking.arrNum[1], 'up');
    }

    if (cellChecking.whatAmI != this.currentItem) {
      gui.money += floor(cellChecking.price / 2);
    }
  }

  update() {
    for (var i = this.materials.length - 1; i >= 0; i--) {
      this.materials[i].update();
    }
    this.manageInventory();
  }
}