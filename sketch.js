// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const SIZE = 512;
let inputImg, inputCanvas, outputContainer, statusMsg, transferBtn, clearBtn;
let sX = [];
let sY = [];
let dis1 = [];
let dis2 = [];
let paths = [];
let event = 0;
let choose = 0;
let color1;
let slider;




function setup() {
  // Defult Color
  let color1 = (236, 97, 0);
  //Create StrokeWeightSlider
  slider = createSlider(1, 80, 1, );
  // Create a canvas
  inputCanvas = createCanvas(SIZE, SIZE);
  console.log(inputCanvas);
  inputCanvas.class('border-box').parent('canvasContainer');
  //inputCanvas.parent('canvasContainer');

  // Display initial input image
  inputImg = loadImage('images/facades-input.jpg', drawImage);

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
      noStroke();
      rect(v1,v2,mouseX-v1,mouseY-v2);
    }
  }
}


// Draw on the canvas when mouse is pressed

function draw() {
  //let color1 = color(255, 204, 0);
  if (mouseIsPressed && event == "Pencil"){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  else if(mouseIsPressed && event == "Eraser"){
    line(mouseX, mouseY, pmouseX, pmouseY);
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
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(236, 97, 0);
    fill(color1);
    paths.pop();
  }
  else if(choose == "brick" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(255, 0, 0);
    fill(color1);
    paths.pop();
  }
  else if(choose == "stone" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(0, 153, 68);
    fill(color1);
    paths.pop();
  }
  else if(choose == "grille" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(255, 241, 0);
    fill(color1);
    paths.pop();
  }
  else if(choose == "metal_plate" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(0, 0, 0);
    fill(color1);
    paths.pop();
  }
  else if(choose == "curtain_wall" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(0, 0, 255);
    fill(color1);
    paths.pop();
  }
  else if(choose == "glass" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(0, 255, 255);
    fill(color1);
    paths.pop();
  }
  else if(choose == "wood" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(127, 45, 0);
    fill(color1);
    paths.pop();
  }
  else if(choose == "concrete" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(115, 115, 115);
    fill(color1);
    paths.pop();
  }
  else if(choose == "tile" && event == "Shape") {
    paths.forEach(point => {
      beginShape();
      paths.forEach(point => {
        noStroke();
        vertex(point.x, point.y);
      });
      endShape(CLOSE);
    });
    color1= color(146, 7, 131);
    fill(color1);
    paths.pop();
  }

  else if(choose == "painting" && event == "Rect"){
    color1= color(236, 97, 0);
    fill(color1);
  }
  else if(choose == "brick" && event == "Rect"){
    color1= color(255, 0, 0);
    fill(color1);
  }
  else if(choose == "stone" && event == "Rect"){
    color1= color(0, 153, 68);
    fill(color1);
  }
  else if(choose == "grille" && event == "Rect"){
    color1= color(255, 241, 0);
    fill(color1);
  }
  else if(choose == "metal_plate" && event == "Rect"){
    color1= color(0, 0, 0);
    fill(color1);
  }
  else if(choose == "curtain_wall" && event == "Rect"){
    color1= color(0, 0, 255);
    fill(color1);
  }
  else if(choose == "glass" && event == "Rect"){
    color1= color(0, 255, 255);
    fill(color1);
  }
  else if(choose == "wood" && event == "Rect"){
    color1= color(127, 45, 0);
    fill(color1);
  }
  else if(choose == "concrete" && event == "Rect"){
    color1= color(115, 115, 115);
    fill(color1);
  }
  else if(choose == "tile" && event == "Rect"){
    color1= color(146, 7, 131);
    fill(color1);
  }
}

function clearCanvas() {
  paths.splice(0);
  background(255, 0, 255);
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
  strokeWeight(slider.value());
}


function useEraser() {
  event="Eraser";
  stroke(255, 0, 255);
  strokeWeight(slider.value());
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


//


// Draw the input image to the canvas
function drawImage() {
  image(inputImg, 0, 0);

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
