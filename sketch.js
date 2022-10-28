const screenSize = 800;
const cellCount = 16;
const perCell = screenSize / cellCount;
let img = [];
let cells = [];
let tiles = [];
function preload() {
  
  img[0] = loadImage("images/1.png");
  img[1] = loadImage("images/2.png");
  img[2] = loadImage("images/3.png");
  img[3] = loadImage("images/4.png");
  img[4] = loadImage("images/5.png");
  img[5] = loadImage("images/6.png");
  img[6] = loadImage("images/7.png");
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
  // cells[11] = new cell(img[4], "2303");
  // cells[12] = cells[11].rotate(1);
  // cells[13] = cells[11].rotate(2);
  // cells[14] = cells[11].rotate(3);
  // cells[15] = new cell(img[5], "3300");
  // cells[16] = cells[15].rotate(1);
  // cells[17] = cells[15].rotate(2);
  // cells[18] = cells[15].rotate(3);
  //cells[19] = new cell(img[6], "3003");
  // cells[20] = cells[19].rotate(1);
  // cells[21] = cells[19].rotate(2);
  // cells[22] = cells[19].rotate(3);


  
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
      }
    }
  }
  if(!fin) {
    tiles[x][y].collapse();
    image(tiles[x][y].getImg(),x*perCell,y*perCell,perCell,perCell);
    if(x<cellCount-1) {
      tiles[x+1][y].update(tiles[x][y].getOptions(), 1);
    }
    if(x>0) {
      tiles[x-1][y].update(tiles[x][y].getOptions(), 3);
    }
    if(y<cellCount-1) {
      tiles[x][y+1].update(tiles[x][y].getOptions(), 2);
    }
    if(y>0) {
      tiles[x][y-1].update(tiles[x][y].getOptions(), 0);
    }

  }
  

}
