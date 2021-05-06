//variables for time
var hr,min,sec;

//variables for angle of the needles
var secang,hrang,minang;

function setup() {
  //create canvas
  createCanvas(400,400);

  //set angle mode to degrees
  angleMode(DEGREES);

}

function draw() {
  //refresh background and set background color to white
  background("black");  

  //translating the x and y axes
  translate(200,200);

  //rotating clock needles to the correct orientation
  rotate (-90);

  //calculating the time
  hr = hour();
  min = minute();
  sec = second();
  
  //map the time to angles
  secang = map(sec,0,60,0,360);
  minang = map(min,0,60,0,360);
  hrang = map(hr%12,0,12,0,360);

  //seconds hand in the clock
  push();
    rotate(secang);
    stroke("blue");
    strokeWeight(7);
    line(0,0,100,0);
  pop();

  //minutes hand in the clock
  push();
    rotate(minang);
    stroke("red");
    strokeWeight(7);
    line(0,0,70,0);
  pop();

  //hours hand in the clock
  push();
    rotate(hrang);
    stroke("green");
    strokeWeight(7);
    line(0,0,50,0);
  pop();

  //arc for seconds hand
  push();
    stroke("blue");
    strokeWeight(7);
    noFill();
    arc(0,0,300,300,0,secang);
  pop();

  //arc for seconds hand
  push();
    stroke("red");
    strokeWeight(7);
    noFill();
    arc(0,0,280,280,0,minang);
  pop();

  //arc for seconds hand
  push();
    stroke("green");
    strokeWeight(7);
    noFill();
    arc(0,0,260,260,0,hrang);
  pop();
}