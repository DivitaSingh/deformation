var car,wall;
var speed,weigth;
var deformation;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1000,200,60,height/2);
  car=createSprite(50,200,50,50);
  car.debug=true;
  wall.debug=true;
}

function draw() {
  background(0); 
  
  speed=random(45,75);
  weight=random(300,900); 
  car.velocityX=speed;
  
  if (car.x-wall.x<car.width/2+wall.width/2 &&
    wall.x-car.x<car.width/2+wall.width/2 &&car.y-wall.y<car.height/2+wall.height/2 &&
    wall.y-car.y<car.height/2+wall.height/2 ){
    var deformation=0.5 * weight * speed *speed/25500;
    console.log(speed);
    car.velocityX=0;
    if (deformation>80){
      //red
      car.shapeColor=color(255,0,0);
    }
    if(deformation<80 && deformation>20){
     //yellow
      car.shapeColor=color(230,230,0);
    }
     if(deformation<20){
       //green
       car.shapeColor=color(0,225,0);
     }
 
  }
  
  drawSprites();
}