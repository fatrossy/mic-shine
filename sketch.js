function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 7;
  volume = map(volume,0,1,0,newMax);
  
  sizeCol = map(volume, 0,1,0,255);
  background(sizeCol);
  fill(random(255),random(255),random(255));
  push();  //Start with transformations
  translate(width/2,height/2);
  var size = map(volume,0,1,0,90);
  beginShape();
    for (var i =0; i<=360; i ++){
      var x = 200*pow(cos(i)*cos(size),3);
      var y = 200*pow(sin(i)*sin(size),3);
      stroke(2);
      curveVertex(x,y);
    }
    endShape();
  pop();  //All transformation are now dropped and the coordinate system is resetted.
  
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
