var iss,spacecraft,bg,issImg,scImg
var hasdocked=false;



function preload() {
  issImg=loadImage("iss.png");
  scImg=loadImage("spacecraft1.png");
  scImg1=loadImage("spacecraft2.png");
  scImg2=loadImage("spacecraft3.png");
  scImg3=loadImage("spacecraft4.png");
  bg=loadImage("spacebg.jpg");

}

function setup() {
  createCanvas(600,300);
spacecraft=createSprite(285,240);
spacecraft.addImage(scImg);
spacecraft.scale=0.15;
iss=createSprite(330,130);
iss.addImage(issImg);
iss.scale=0.25;
 
}


function draw() {
  background(bg);  
  spacecraft.addImage(scImg);
  if(!hasdocked){
    spacecraft.x=spacecraft.x+random(-1,1)
  }
  if(keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-1
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(scImg3)
    spacecraft.x=spacecraft.x-1
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(scImg2)
    spacecraft.x=spacecraft.x+1
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(scImg1)
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasdocked=true
    text("DOCKINGSUCCESFULL",200,300)
  }

  drawSprites();
}