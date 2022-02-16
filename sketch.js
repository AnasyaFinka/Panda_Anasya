 function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(128,128,128)
  strokeWeight(0)
  line(200,0,200,200);

  var y=5+5*Math.sin(PI*j/20)

  j+=1

  strokeWeight(3)
  fill(255,255,255) 
  ellipse(60,90,40,40)
  ellipse(140,90,40,40)
  ellipse(100,120,100,90)


  beginShape()
  fill(105,105,105)
  rotate(50,270)
  ellipse(90,150,28,38)
  rotate(120,20)
  ellipse(112,88,28,38)

  fill(255,255,255)
  ellipse(114,82,15,15)
  ellipse(155,66,15,15)
  endShape(CLOSE)

  fill(105,105,105)
  ellipse(142,92,16,14)

  strokeWeight(3)
  fill(255,255,255) 
  ellipse(250,5,40,40)
  ellipse(330,-24,40,40)
  ellipse(300,20,98,95)

  beginShape()
  fill(105,105,105)
  ellipse(279,30,28,38)
  rotate(100,275)
  ellipse(270,175,28,38)

  fill(255,255,255)
  ellipse(231,163,15,15)
  ellipse(267,169,15,15)


  fill(105,105,105)
  ellipse(245,y+180,16,14)

  
}
