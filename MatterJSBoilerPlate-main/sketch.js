
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
function keyPressed()
{
	if (keyCode=== UP_ARROW){
		
	}
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(1000, 1000)

	Engine.run(engine);
  
}
groundObj = newground(width/2,670, width, 20)
leftSide = newground(1100,660, 20, 120)



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



