let myFont;
let mySound;

function preload() {
  myFont = loadFont('assets/Znikomit.otf')
  soundFormats('mp3');
  mySound = loadSound('assets/storm_zapsplat.mp3');
}


function setup() {
    createCanvas(1000, 1000);
    mouseCheck(mouseCheck);
    angleMode(DEGREES);
    frameRate(120);

    noFill();
    stroke(255, 204, 0);
    strokeWeight(3);
    textSize(30);
    textFont(myFont);
    text('N', 10, 10);
}



function draw() {

    mouseCheck();

}

function mouseClicked() {
    startAnim = true;
}

function mouseCheck(){ 
    if (mouseY <= 1000) {
     
          background('#66a3b3');
       // rect(0, 0, 1000, 1000)
        mySound.loop();
        noFill();
    stroke(255, 204, 0);
    strokeWeight(1);
    textSize(500);
    textFont(myFont);
    text('N', 280, 690);
      }
      if (mouseY >= 500) {

          background('#0c0c57');
        // rect(0, 0, 1000, 1000);
        mySound.stop();
        noFill();
    stroke(255, 204, 0);
    strokeWeight(10);
    textSize(600);
    textFont(myFont);
    text('N', 250, 700);
      } 
}

function canvasPressed() {
        mySound.play();
}

function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-21", "png");
    }
}