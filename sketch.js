var cat, mouse, cImage, mImage, garden, gImage, m1Image;
function preload() {
    //load the images here
    cImage = loadAnimation("images/cat1.png");
    ctImage = loadImage("images/cat2.png", "images/cat3.png");
    gImage = loadImage("images/garden.png");
    mImage = loadAnimation("images/mouse1.png");
    m1Image = loadImage("images/mouse4.png");
    c1Image = loadImage("images/cat4.png");
    m2Image = loadImage("images/mouse3.png", "images/mouse2.png");
}
 
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500, 400);
    garden.addImage(gImage);

    cat = createSprite(900, 650, 20, 20);
    cat.addAnimation("cat", cImage);
    cat.scale = 0.1;

    mouse = createSprite(200, 610, 20, 20);
    mouse.addAnimation("mouse", mImage);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.changeAnimation(c1Image);
        mouse.changeAnimation(m1Image);
     } 
    text (mouseX + ',' + mouseY, mouseX, mouseY); 
    drawSprites();
}

    function keyPressed(){
        //For moving and changing animation write code here
      if (keyCode === LEFT_ARROW){
          cat.velocityX = -5
          cat.addAnimation(ctImage); 
          mouse.addImage(m2Image);
        }
    }
 
