var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,500);

    //create 4 different surfaces
    block1 = createSprite(60,485,100,20)
    block1.shapeColor = "blue"

    block2 = createSprite(210,485,110,20)
    block2.shapeColor = rgb(255,128,0)

    block3 = createSprite(360,485,110,20)
    block3.shapeColor = "pink"

    block4 = createSprite(520,485,110,20)
    block4.shapeColor = "green"
 

    //create box sprite and give velocity

    ball = createSprite(300,10,20,20)
    ball.shapeColor = "white"
    ball.velocityX = -2
    ball.velocityY =  2

}

function draw() {
    background ("grey");


   
  
   
    //create edgeSprite
    edges = createEdgeSprites();

    ball.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if (block1.isTouching(ball)){
        ball.shapeColor = "blue"
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0)
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "pink"
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "green"
    }

    drawSprites()
}
