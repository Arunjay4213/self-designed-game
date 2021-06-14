var background1, background2;
var scrollSpeed = 10;
var x1 = 0;
var x2;
var spaceship, spaceshipImg;


function preload() {
background1 = loadImage("Images/background1.png");
background2 = loadImage("Images/background1.png")
spaceshipImg = loadImage("Images/spaceship.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x2 = width;

spaceship = createSprite(width/2, height/2, 300, 300);
spaceship.addImage(spaceshipImg);
spaceship.debug = true;
}


function draw() {
  
background("black");


image(background1, x1, 0, width, height);
image(background2, x2, 0, width, height);

x1 -= scrollSpeed;
x2 -= scrollSpeed;

if( x1 <= -width) {
  x1 = width
}
if( x2 <= -width) {
  x2 = width
}

spaceship.x = mouseX;
spaceship.y = mouseY;

drawSprites();
};