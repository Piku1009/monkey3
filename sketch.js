var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(70,320,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2;
 
  ground = createSprite(200,370,400,10);
  ground.velocityX=-2;
  
  
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
bananas();
  obstacles();
  monkey.collide(ground);
  
  if(ground.x === 0);{
    ground.x = 200;
  }
     
  if(keyWentDown("space")&&monkey.y >= 302){
    monkey.velocityY = -19;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
  }
  
  
  
  
  
  
  drawSprites();
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,150,20);
}
function bananas(){
  if(World.frameCount%60===0){
  banana = createSprite(400,Math.round(random(30,170)),20,20);
  banana.addImage(bananaImage);
  banana.velocityX = -6;
  banana.scale=0.1;
  FoodGroup.add(banana);
  banana.setLifetime = 10;
    banana.debug=true;
  
  }
}
function obstacles(){
  if(World.frameCount%150===0){
    obstacle = createSprite(400,320,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.3;
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);
    obstacle.setLifetime = 24;
  }
}




