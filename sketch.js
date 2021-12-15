var trex_running;
var trex;
var ground;
var groundImg;

function preload()
{
   trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImg=loadImage("ground2.png")
}

function setup()
{
    createCanvas(600,200);
    trex=createSprite(50,190,20,20);
    trex.addAnimation("running",trex_running);
    trex.scale=0.5;
    ground=createSprite(300,190,600,10)
    ground.addImage(groundImg)

}

function draw()
{
    background("lightblue");
ground.velocityX=-5
if(keyDown("space")&&trex.y>160)
{
trex.velocityY=-10

}
trex.velocityY=trex.velocityY+0.5

trex.collide(ground)

if(ground.x<0)
{
ground.x=300

}

    drawSprites();
}
