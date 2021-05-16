var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(100,150,50,50);
  wall=createSprite(1000,200,20,400);
  speed=random(20,300);
  weight=random(70,300);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  CarDeformation();
  drawSprites();
}

function CarDeformation() {
  if(wall.x-car.x < car.width/2+wall.width/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation >= 180) [
      car.shapeColor=rgb(255,0,0)
    ]
    else if(deformation < 180 && deformation >= 100) [
      car.shapeColor=rgb(230,230,0)
    ]
    else if(deformation < 100) [
      car.shapeColor=rgb(0,255,0)
    ]
  }
}