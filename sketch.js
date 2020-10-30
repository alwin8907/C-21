var fixedRect, movingRect;
var gameobject1,gameobject2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobject1=createSprite(100,400,50,40)
  gameobject2=createSprite(1100,400,50,40)
  gameobject1.velocityX=5
  gameobject2.velocityX=-5
  gameobject1.debug=true
  gameobject2.debug=true
}

function draw() {
  background(0,0,0);  
bounce(movingRect,fixedRect);
bounce(gameobject2,gameobject1)
 
  drawSprites();
}


