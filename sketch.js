// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const SIZE = 512;
let inputImg, inputCanvas, outputContainer, statusMsg, transferBtn, clearBtn, canvas_size_1no1, canvas_size_2no1, canvas_size_2no3, canvas_size_4no3;
let sX = [];
let sY = [];
let dis1 = [];
let dis2 = [];
let paths = [];
let event = 0;
let choose = 0;
let W = 0;
let H = 0;
let color1;
let slider;
let pg;



function setup() {
  // Defult Color
  let color1 = (236, 97, 0);
  //Create StrokeWeightSlider
  slider = createSlider(1, 80, 1);
  // Create a canvas
  inputCanvas = createCanvas(SIZE, SIZE);
  inputCanvas.parent('canvasContainer');
  pg = createGraphics(SIZE*2, SIZE*1.5);
  // Display initial input image
  inputImg = pg.loadImage('images/facades-input.jpg', drawImage);


  canvas_size_1no1 = select('#canvas_size_1no1');
  canvas_size_1no1.mousePressed(function() {
    canvas_size_11();
  });

  canvas_size_2no1 = select('#canvas_size_2no1');
  canvas_size_2no1.mousePressed(function() {
    canvas_size_21();
  });

  canvas_size_2no3 = select('#canvas_size_2no3');
  canvas_size_2no3.mousePressed(function() {
    canvas_size_23();
  });
  canvas_size_4no3 = select('#canvas_size_4no3');
  canvas_size_4no3.mousePressed(function() {
    canvas_size_43();
  });
  // Selcect output div container
  outputContainer = select('#output');
  statusMsg = select('#status');

  // Select 'transfer' button html element
  transferBtn = select('#transferBtn');

  // Select 'clear' button html element
  clearBtn = select('#clearBtn');
  // Attach a mousePressed event to the 'clear' button
  clearBtn.mousePressed(function() {
    clearCanvas();
  });

  // Set stroke to black
  stroke(0);
  pixelDensity(1);
}

//Canvas Size panel
function canvas_size_11(){
  W = SIZE;
  H = SIZE;
  inputCanvas = createCanvas(W, H);
  background(255, 0, 255);
  inputCanvas.parent('canvasContainer');
}

function canvas_size_21(){
  W = SIZE*2;
  H = SIZE;
  inputCanvas = resizeCanvas(SIZE*2, SIZE);
  background(255, 0, 255);
  inputCanvas.parent('canvasContainer');
}

function canvas_size_23(){
  W = SIZE;
  H = SIZE*1.5;
  inputCanvas = createCanvas(W, H);
  background(255, 0, 255);
  inputCanvas.parent('canvasContainer');
}

function canvas_size_43(){
  W = SIZE*2;
  H = SIZE*1.5;
  inputCanvas = createCanvas(W, H);
  background(255, 0, 255);
  inputCanvas.parent('canvasContainer');
}

//control

function mousePressed(){
  if(event == "Rect"){
  v1 = mouseX;
  v2 = mouseY;
  sX.push(v1);
  sY.push(v2);
  }
}


function mouseReleased(){
  if(event == "Rect"){
    disL1 = mouseX - v1;
    disL2 = mouseY - v2;
    dis1.push(disL1);
    dis2.push(disL2);
    for (i=0; i < sX.length; i++){
      pg.noStroke();
      pg.rect(v1,v2,mouseX-v1,mouseY-v2);
    }
  }
}


// Draw on the canvas when mouse is pressed

function draw() {
  //let color1 = color(255, 204, 0);
  if (mouseIsPressed && event == "Pencil"){
    color1= color(color1);
    pg.stroke(color1);
    pg.line(mouseX, mouseY, pmouseX, pmouseY);
  }
  else if(mouseIsPressed && event == "Eraser"){
    color1= color(255, 0, 255);
    pg.stroke(color1);
    pg.line(mouseX, mouseY, pmouseX, pmouseY);
  }
  else if(mouseIsPressed && event == "Shape"){
    let point ={
      x: mouseX,
      y: mouseY
    };
    paths.push(point);
  }
  else if(choose == "painting" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(236, 97, 0);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "brick" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(255, 0, 0);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "stone" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(0, 153, 68);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "grille" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(255, 241, 0);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "metal_plate" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(0, 0, 0);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "curtain_wall" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(0, 0, 255);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "glass" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(0, 255, 255);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "wood" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(127, 45, 0);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "concrete" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(115, 115, 115);
    pg.fill(color1);
    paths.pop();
  }
  else if(choose == "tile" && event == "Shape") {
    paths.forEach(point => {
      pg.beginShape();
      paths.forEach(point => {
        pg.noStroke();
        pg.vertex(point.x, point.y);
      });
      pg.endShape(CLOSE);
    });
    color1= pg.color(146, 7, 131);
    pg.fill(color1);
    paths.pop();
  }

  else if(choose == "painting" && event == "Rect"){
    color1= color(236, 97, 0);
    pg.fill(color1);
  }
  else if(choose == "brick" && event == "Rect"){
    color1= color(255, 0, 0);
    pg.fill(color1);
  }
  else if(choose == "stone" && event == "Rect"){
    color1= color(0, 153, 68);
    pg.fill(color1);
  }
  else if(choose == "grille" && event == "Rect"){
    color1= color(255, 241, 0);
    pg.fill(color1);
  }
  else if(choose == "metal_plate" && event == "Rect"){
    color1= color(0, 0, 0);
    pg.fill(color1);
  }
  else if(choose == "curtain_wall" && event == "Rect"){
    color1= color(0, 0, 255);
    pg.fill(color1);
  }
  else if(choose == "glass" && event == "Rect"){
    color1= color(0, 255, 255);
    pg.fill(color1);
  }
  else if(choose == "wood" && event == "Rect"){
    color1= color(127, 45, 0);
    pg.fill(color1);
  }
  else if(choose == "concrete" && event == "Rect"){
    color1= color(115, 115, 115);
    pg.fill(color1);
  }
  else if(choose == "tile" && event == "Rect"){
    color1= color(146, 7, 131);
    pg.fill(color1);
  }
  image(pg, 0, 0);
}

function clearCanvas() {
  paths.splice(0);
  pg.background(255, 0, 255);
}

function size21() {
  event="2:1";
}

function size21() {
  event="2:1";
}

function useRectangle() {
  event="Rect";

}

function useShape() {
  event="Shape";
  fill(color1);
}

function usePencil() {
  event="Pencil";
  stroke(color1);
  pg.strokeWeight(slider.value());
}


function useEraser() {
  event="Eraser";
  stroke(255, 0, 255);
  pg.strokeWeight(slider.value());
}

// Material
function meterial_1(){
  choose = "painting"
  color1= color(236, 97, 0);
}
function meterial_2(){
  choose = "brick"
  color1= color(255, 0, 0);
}
function meterial_3(){
  choose = "stone"
  color1= color(0, 153, 68);
}
function meterial_4(){
  choose = "grille"
  color1= color(255, 241, 0);
}
function meterial_5(){
  choose = "metal_plate"
  color1= color(0, 0, 0);
}
function meterial_6(){
  choose = "curtain_wall"
  color1= color(0, 0, 255);
}
function meterial_7(){
  choose = "glass"
  color1= color(0, 255, 255);
}
function meterial_8(){
  choose = "wood"
  color1= color(127, 45, 0);
}
function meterial_9(){
  choose = "concrete"
  color1= color(115, 115, 115);
}
function meterial_10(){
  choose = "tile"
  color1= color(146, 7, 131);
}




// Draw the input image to the canvas
function drawImage() {
  pg.image(inputImg, 0, 0);

  // After input image is loaded, initialize a pix2pix method with a pre-trained model
  ml5.pix2pix('models/facades_BtoA0108_ep800_lite16.pict').ready
    .then(model => {
      // Show 'Model Loaded!' message
      statusMsg.html('Model Loaded!');

      // Call transfer function after the model is loaded
      transfer(model);

      // Attach a mousePressed event to the button
      transferBtn.mousePressed(function() {
        transfer(model);
      });
    })
}

function transfer(pix2pix) {
  // Update status message
  statusMsg.html('Applying Style Transfer...!');

  // Select canvas DOM element
  const canvasElement = select('canvas').elt;
  //let canvasElement = document.getElementById('defaultCanvas0')

  // Apply pix2pix transformation
  pix2pix.transfer(canvasElement)
    .then(result => {
      // Clear output container
      outputContainer.html('');
      // Create an image based result
      createImg(result.src).class('border-box').parent('output');
      // Show 'Done!' message
      statusMsg.html('Done!');
    });
}
