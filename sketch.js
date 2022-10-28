const screenSize = 400;
const cellCount = 8;
const perCell = screenSize / cellCount;
let img = [];
let cells = [];
function preload() {
  
  img[0] = loadImage("images/1.png");
  img[1] = loadImage("images/2.png");
}

function setup() {
  createCanvas(screenSize, screenSize);
  cells[0] = new cell(img[0], "0000");
  cells[1] = new cell(img[1], "1010");
  cells[2] = cells[1].rotate(1);
}

function draw() {
  background(220);
  
  for(let i=0;i<cellCount;i++) {
    for(let j=0;j<cellCount;j++) {
      image(cells[2].getImg(),i*perCell,j*perCell,perCell,perCell);
    }
  }
}
