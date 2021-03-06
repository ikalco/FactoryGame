
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
    circle(this.x + this.w/2 + this.blockW/4, this.y + this.h/2 + this.blockH/2, this.w);
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
    circle(this.x + this.w/2 + this.blockW/4, this.y + this.h/2 + this.blockH/2, this.w);
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
    rect(this.x + this.w/2, this.y + this.h/2 + this.blockH/4, this.w, this.h);
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
    rect(this.x + this.w/2, this.y + this.h/2 + this.blockH/4, this.w, this.h);
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
    triangle(this.x + this.w/2 + this.blockW/4, this.y + this.blockH/2, this.x + this.blockW/4, this.y + this.h + this.blockH/2, this.x + this.w + this.blockW/4, this.y + this.h + this.blockH/2);
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
    triangle(this.x + this.w/2 + this.blockW/4, this.y + this.blockH/2, this.x + this.blockW/4, this.y + this.h + this.blockH/2, this.x + this.w + this.blockW/4, this.y + this.h + this.blockH/2);
    pop();
  }
  
  update() {
    super.update();
  }
}