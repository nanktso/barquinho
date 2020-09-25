var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var ctx2 = ctx;

var W = canvas.width;
var H = canvas.height;
	
// Variables 
var x = 0, // Initial x coordinate of the boat
  y = 0, // Initial y coordinate of the boat
  vx = 2, // Speed for horizontal movement, is added to x at every timestep
  y_fix = y, // Boat moves around this values 
  amplitude = 10, // Boat moves 20 pixels up and down the fixed y vlaue
  angle = 0, // Angle for sine movement, simulating a wave
  dangle = 4; // Angle increment, is added to angle at avery timestemp

  
function draw() {
  ctx.clearRect(0, 0, W, H);  // Clear canvas
	
  x += vx; // Horizontal movement
  angle += dangle; // Increasing angle for sine movement
    
  // Boundaries for horizontal movement, change direction if boat hits a canvas' boundary
  if(x <= 0 || x >= W-190){
    vx = -vx;
  }
  
  y= y_fix + Math.sin(angle*Math.PI/180) * amplitude;  // Vertical sine movement (angle in radian)

 // Save context (make sure the original state is used each time a frame is drawn)
  ctx.save();
  
  /* To do:
 Use a canvas 2D transformation method to translate the sailboat by x and y*/
	// draw Water
 	/* start of answer*/
ctx2.fillStyle = "#d4f1f9 ";
ctx2.fillRect(0,175,W,H);
  /* end of answer */ 
 
  /* start of answer*/
 ctx.translate(x, y)
  /* end of answer */
 ctx.fillStyle = "#d4f1f9 ";
 ctx.fillRect(30,175,130,H);


  // draw a sailboat
  //boat
  ctx.fillStyle = "#5a7443";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(25,160);
  ctx.lineTo(50,185);
  ctx.lineTo(150,185);
  ctx.lineTo(175,160);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
    
  //pole
  /* To do:
  Draw a pole with a rectangle*/
  
  /* start of answer*/
ctx.fillStyle = "#808080";
ctx.fillRect(100,55,5,100);
  /* end of answer */

  //left sail
  /* To do:
  Draw the left sail with a path*/
  
  /* start of answer*/
 ctx.beginPath();
ctx.moveTo(95,55);
ctx.lineTo(95, 150);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.fillStyle = "#E2DCC7";
ctx.fill();
  /* end of answer */

  //right sail
  /* To do:
  Draw the right sail with a path*/
  
  /* start of answer*/
ctx.beginPath();
ctx.moveTo(110,55);
ctx.lineTo(170, 150);
ctx.lineTo(110, 135);
ctx.closePath();
ctx.fillStyle = "#E2DCC7";
ctx.fill();
  /* end of answer */
  
  // restore context before drawing a new frame
  ctx.restore();
}


setInterval(draw, 1000/60); //Starts repeatedly executing the draw function every 1000/60 milliseconds
