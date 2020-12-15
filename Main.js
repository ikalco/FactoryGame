let gameBoardSize = 16;
let gameBoard = [];
let player = new Player(8, 8);
let debug;
let fr = 60;
let gui;

function preload() {
  conveyorPng = loadImage('/FactoryGame/Sprites/Conveyor.png');
  minerPng = loadImage('/FactoryGame/Sprites/Miner.png');
  sellerPng = loadImage('/FactoryGame/Sprites/Seller.png');
  presserPng = loadImage('/FactoryGame/Sprites/HPresser.png');
  TriangularPng = loadImage('/FactoryGame/Sprites/Triangular.png');
}

function setup() {
    createCanvas(800, 900);
  //debug = new Debugger();
  gameBoard = Array.from(Array(gameBoardSize), () => new Array(gameBoardSize));
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      gameBoard[i][j] = new Cell(i, j);
    }
  }
  frameRate(fr);
  gui = new makeGui(100);
}

function draw() {
    background(215);
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        if (gameBoard[i][j] == undefined) {
          print(gameBoard);
          return null;
        } 
        gameBoard[i][j].update();
      }
    }
    player.update();
    gui.update();
  //debug.showDebug();
}

function drawPicture(img, angle, obj) {
  push();
  imageMode(CENTER);
  translate(obj.x + obj.w / 2, obj.y + obj.w / 2);
  rotate(PI / 180 * 0);
  //image(img, 0, 0, obj.w, obj.h);
  rotate(-PI / 180 * angle);
  translate(-(obj.x + obj.w / 2), -(obj.y + obj.w / 2));
  imageMode(CORNER);
  image(img, obj.x, obj.y, obj.w, obj.h);
  pop();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}