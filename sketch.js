var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.75,isStatic:true})
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} )
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  textSize(15);
  console.log(packageBody.position.y);
  text("Left,Up and Down keys",325,50);
	packageSprite.x= packageBody.position.x; 
	packageSprite.y= packageBody.position.y;
	if(keyDown(DOWN_ARROW)){
		kPress();
	}
	if (keyDown(LEFT_ARROW)) {
		kPress();
		(helicopterSprite.x<=110)? helicopterSprite.x=110:helicopterSprite.x-=10;
	  }
	  if (keyDown(RIGHT_ARROW)) {
		  kPress();
		(helicopterSprite.x>=canvas.width-110)? helicopterSprite.x=canvas.width-110:helicopterSprite.x+=10;
	  }
  drawSprites();

}

function kPress() {
	Matter.Body.setStatic(packageBody,false);
  }




