var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(570,400)
  monkey=createSprite(70,300,50,50)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.2
ground=createSprite(300,370,600,60)
  FoodGroup=new Group()
  obstacleGroup= new Group()
  
}


function draw() {
background("white")
  drawSprites()
monkey.collide(ground)
  if (keyDown("space")){
    monkey.velocityY=-10
  
    
    
  }
  obstacle1()
  banana1()
  monkey.velocityY=monkey.velocityY+0.5
 ground.velocityX=-4 
  if (ground.x<0){
ground.x=ground.width/2}

}


function obstacle1(){
  if (frameCount%130===0){
    obstacle=createSprite(570,320,40,40)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.4
    obstacle.velocityX=-4
    obstacleGroup.add(obstacle)
    obstacle.lifetime=142.5
  }
}

function banana1(){
  if (frameCount%130===0){
    banana=createSprite(570,50,40,40)
    banana.addImage(bananaImage)
    banana.scale=0.2
    banana.velocityX=-6
    FoodGroup.add(banana)
    banana.lifetime=95
    
  }
  
  
}



