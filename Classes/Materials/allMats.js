
//Basic Miner Items
class Iron extends Material {
  constructor(arrX, arrY) {
    super(arrX, arrY);
    this.item = 'iron'
  }

  draw() {
    push();
    noStroke();
    fill(255);
    circle(this.x + this.blockW / 2, this.y + this.blockH / 2, this.w);
    pop();
  }

  update() {
    super.update();
  }
}

class Gold extends Material {
  constructor(arrX, arrY) {
    super(arrX, arrY);
    this.item = 'gold'
  }

  draw() {
    push();
    noStroke();
    fill(255,223,0);
    circle(this.x + this.blockW / 2, this.y + this.blockH / 2, this.w);
    pop();
  }

  update() {
    super.update();
  }
}

//Plates
class IronPlate extends Material {
  constructor(arrX, arrY) {
    super(arrX, arrY);
    this.item = 'ironPlate'
  }
  
  draw() {
    push();
    fill(255);
    rect(this.x + this.w/2, this.y + this.h/2, this.w, this.h);
    pop();
  }
  
  update() {
    super.update();
  }
}

class GoldPlate extends Material {
  constructor(arrX, arrY) {
    super(arrX, arrY);
    this.item = 'goldPlate'
  }
  
  draw() {
    push();
    fill(255,223,0);
    rect(this.x + this.w/2, this.y + this.h/2, this.w, this.h);
    pop();
  }
  
  update() {
    super.update();
  }
}

//Trin's
class IronTrin extends Material {
  constructor(arrX, arrY) {
    super(arrX, arrY);
    this.item = 'ironTrin'
  }

  
  draw() {
    push();
    fill(255);
    triangle((this.x + this.w/2) + this.blockW, this.y, (this.x) + this.blockW, this.y + this.h, (this.x + this.w) + this.blockW, this.y + this.h);
    pop();
  }
  
  update() {
    super.update();
  }
}

class GoldTrin extends Material {
  constructor(arrX, arrY) {
    super(arrX, arrY);
    this.item = 'goldTrin'
  }
  
  draw() {
    push();
    fill(255,223,0);
    triangle((this.x + this.w/2) + this.blockW, this.y, (this.x) + this.blockW, this.y + this.h, (this.x + this.w) + this.blockW, this.y + this.h);
    pop();
  }
  
  update() {
    super.update();
  }
}