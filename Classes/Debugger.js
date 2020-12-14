class Debugger {
  constructor() {
    this.numOfCells = 256;
    this.numOfConveyors = 0;
    this.numOfMiners = 0;
    this.numOfMaterials = 0;
    this.numOfPressers = 0;
    this.numOfSellers = 0;
    this.tSize = 18;
  }

  showDebug() {
    textSize(this.tSize);
    push();
    fill(255, 0, 0);
    text('Conveyors: ' + this.numOfConveyors, 10, 20);
    text('Miners: ' + this.numOfMiners, 10, 40);
    text('Pressers: ' + this.numOfPressers, 10, 60);
    text('Sellers: ' + this.numOfSellers, 10, 80);
    text('Materials: ' + this.numOfMaterials, 10, 100);
    pop();
  }
}