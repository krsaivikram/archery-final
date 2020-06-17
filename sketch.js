const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bg;
var ghg;
var points =0;
var b,release=0;
var restart;
var ground;
var brickimg = [];
var flag =0;
function preload(){
  bg = loadImage("images.jpg");
 // aim = loadImage("aim1.png");
  brickimg[0] = loadImage("images/redd_burned.png")
    brickimg[1] = loadImage("images/yellow1_burned.png");
    brickimg[2] = loadImage("images/blu1_burned.png")
    brickimg[3] = loadImage("images/black1_burned.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  arrow1 = new Arrow(200+100,510,PI/2);
  string = new Bow(arrow1.body,{x:200+100,y:436});
 restart = createSprite(720,500,50,20);
 redblock = new Brick(1000,480,35,35,brickimg[0]);
 yellowblock = new Brick(1000,480,67,67,brickimg[1]);
 blueblock = new Brick(1000,480,90,90,brickimg[2]);
 blackblock = new Brick(1000,480,150,150,brickimg[3]);
  
 ground1=Bodies.rectangle(windowWidth/2,10,windowWidth,50,{ isStatic: true });
    World.add(engine.world,ground1);
    ground=Bodies.rectangle(windowWidth/2,windowHeight-50,windowWidth,50,{ isStatic: true });
    World.add(engine.world,ground);
}

function draw() {
  background(bg);  
  Engine.update(engine);
 
 //image(aim,1050,290,100,300);

    
 
//box.display();
//b.display();
if(release>=10){
  restart.display();
  fill("red");
 
  text("Restart",700,505);
  fill("green")
  textStyle(BOLD);
  textSize(20);
text("Your Total Score Is: "+points,windowWidth/2-105,windowHeight/2+50);
}
if(mousePressedOver(restart)){
  release=0;
  points=0;
    //Matter.Body.setPosition(arrow1.body,{x:1100,y:515});
}

fill("white");

string.display();

redblock.display();
yellowblock.display();
blueblock.display();
blackblock.display();
arrow1.display();
console.log(mouseX);
textStyle(BOLD);
textSize(20);
text("'Press Space inorder to get another arrow'",550,770);
textSize(15);
textStyle(ITALIC);
fill("green");
text("10 points",1010+100,480);
fill("yellow");
text("9 points",1010+100,462);
fill("yellow");
text("9 points",1010+100,497);
fill("blue");
text("8 points",1010+100,511);
fill("blue");
text("8 points",1010+100,445);
fill("white");
text("7 points",1010+100,422);
fill("white");
text("7 points",1010+100,527);
fill("black");
text("6 points",1010+100,402);
fill("black");
text("6 points",1010+100,547);

fill("green");
textSize(50);
textStyle(ITALIC);
text("HIT THE TARGET",500,100);
textSize(20);
fill(155,10,101);

text("SCORE = "+points,900,200);

fill(0,0,0);
text("NO.OF RELEASES = "+release,600,200);
//ghg.display();
//drawSprites();

}



function mouseDragged(){
  if(release>-1&&release<11){
    if(mouseX<430){
  Matter.Body.setPosition(arrow1.body,{x:mouseX,y:mouseY});
    }
  }
}
function mouseReleased(){
  if(release>-1&&release<10){
  string.fly();
}
}
function keyPressed(){
  if(keyCode === 32){
    flag =0;
      Matter.Body.setPosition(arrow1.body,{x:300,y:510});
       string.attach(arrow1.body);
       Matter.Body.setAngle(arrow1.body,PI/2);
  }
}