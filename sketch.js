var diam1=0;
function setup() {
	createCanvas(500, 500); 
  background(137,mouseX,110);//create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(157,89,44) // an RGB color for the circle's border
  fill(230,30,168,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse( 250,100,diam1,diam1); // center of canvas, 20px dia
  
  fill(109,0,255,mouseX)
  stroke(113,75,93)
  ellipse(100,400,mouseX,40);
  rect(random(width),random(height),50,50)
    fill(130);
    textFont('Cambria');
    textSize(60)
    textStyle(ITALIC);
    text('Hi There',250,250)
    fill(19);
    noStroke(0);
    ellipse(mouseX,mouseY,30,30);
}
  function mousePressed(){
    if (diam1>=100){
      diam1=0;
    
}else{
  diam1=diam1+2;
}
}
