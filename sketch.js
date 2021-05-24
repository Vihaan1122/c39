var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var c1Image,c2Image,c3Image,c4Image;
var trackImage,groundImage;

function preload()
{
   c1Image=loadImage("./images/car1.png")
   c2Image=loadImage("./images/car2.png")
   c3Image=loadImage("./images/car3.png")
   c4Image=loadImage("./images/car4.png")
   trackImage=loadImage("./images/track.jpg");
   groundImage=loadImage("./images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2)
  {
    game.end();
  }
}

