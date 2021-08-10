var ship, ship_moving
var sea, sea_moving
function preload(){
ship_moving = loadAnimation("ship-3.png","ship-4.png")
sea_moving = loadImage("sea.png")
}

function setup(){
  createCanvas(1500,700);

  coast = createSprite(750,350,background.width,background.height)
  coast.addImage("sea",sea_moving)

  boat = createSprite(250,400,100,100)
  boat.addAnimation("ship",ship_moving)
  boat.scale = 0.75
}

function draw() {
  background("blue");
  coast.velocityX = -5
  if(coast.x < 0){
     coast.x = coast.width / 2
  }
  drawSprites()
}