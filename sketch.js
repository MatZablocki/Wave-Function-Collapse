const screenSize = 400;
const cellCount = 8;
const perCell = screenSize / cellCount;
let img = [];
let cells = [];
let tiles = [];
function preload() {
  
  img[0] = loadImage("images/1.png");
  img[1] = loadImage("images/2.png");
  img[2] = loadImage("images/3.png");
  img[3] = loadImage("images/4.png");
}

function setup() {
  createCanvas(screenSize, screenSize);
  frameRate(1);
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
  
  for(let i=0;i<cellCount;i++) {
    tiles[i] = new Array();
    for(let j=0;j<cellCount;j++) {
      tiles[i][j] = new tile(cells.length);
    }
  }
}

function draw() {
  let lowestEntropy = cells.length;
  let x,y;
  let fin = true;
  for(let i=0;i<cellCount;i++) {
    for(let j=0;j<cellCount;j++) {
      if(tiles[i][j].getCollapsed() == false) {
        let temp = tiles[i][j].getPossibilityLen();
        
        if(temp<= lowestEntropy) {
          x = i;
          y = j;
          lowestEntropy = tiles[i][j].getPossibilityLen();
        }
        fin = false;
      }
      else {
        image(tiles[i][j].getImg(),i*perCell,j*perCell,perCell,perCell);
        console.log("yo");
      }
    }
  }
  if(!fin) {
    tiles[x][y].collapse();
    if(x<cellCount) {
      // IMPLEMENT THIS tiles[x+1][y].update(tiles[x][y].getOptions())
    }
  }
  

}
