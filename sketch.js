const screenSize = 400;
const cellCount = 8;
const perCell = screenSize / cellCount;
let img = [];
let cells = [];
function preload() {
  
  img[0] = loadImage("images/1.png");
  img[1] = loadImage("images/2.png");
  img[2] = loadImage("images/3.png");
  img[3] = loadImage("images/4.png");
}

function setup() {
  createCanvas(screenSize, screenSize);
  cells[0] = new cell(img[0], "0000");
  cells[1] = new cell(img[1], "1010");
  cells[2] = cells[1].rotate(1);
  cells[3] = new cell(img[2], "1000");
  cells[4] = cells[3].rotate(1);
  cells[5] = cells[3].rotate(2);
  cells[6] = cells[3].rotate(3);
  cells[7] = new cell(img[3], "1100");
  cells[8] = cells[7].rotate(1);
  cells[9] = cells[7].rotate(2);
  cells[10] = cells[7].rotate(3);
}

function draw() {
  for(let i=0;i<cellCount;i++) {
    for(let j=0;j<cellCount;j++) {
      image(cells[i].getImg(),i*perCell,j*perCell,perCell,perCell);
    }
  }
}
