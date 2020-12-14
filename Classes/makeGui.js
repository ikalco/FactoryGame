class makeGui {
  constructor(money) {
    this.money = money;
    this.moneyX = 320;
    this.moneyY = 820;
  }

  drawMoney() {
    push();
    strokeWeight(2);
    noFill();
    rect(this.moneyX, this.moneyY, 160, 80);
    pop();
    
    textSize(28);
    push();
    fill(0);
    text('$' + this.money, this.moneyX + 10, this.moneyY + 50);
    pop();
  }

  update() {
    this.drawMoney();
  }
}