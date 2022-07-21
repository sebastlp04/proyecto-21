
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var ball; 
var ground;
var lside, rside;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

	var options={
		isStatic : false,
		restitution : 0.3,
		friction:0,
		density:1.2

	};

	ellipseMode(CENTER);
	rectMode(CENTER);
	ball = Bodies.circle(200,200,17,options);
	World.add(world,ball);

	ground = new Ground(width/2,670,width,20);
	lside = new Ground(1100,600,20,120);
	rside = new Ground(1400,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);
  
  ground.show();
	lside.show();
	rside.show();
	push()
	ellipse(ball.position.x,ball.position.y,40);
	pop();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:ball.body.position.x,y:ball.body.position.y},{x:130,y:-145});
	}

}



