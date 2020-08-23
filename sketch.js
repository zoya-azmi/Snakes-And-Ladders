var canvas, background;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var gamePieceImg1, gamePieceImg2, gamePieceImg3, gamePieceImg4, ladderImg1, ladderImg2, 
ladderImg3, snakeImg1, snakeImg2, snakeImg3, snakeImg4;

var tiles = [];

function preload(){
  gamePieceImg1 = loadImage("../images/blue_game_piece.jpg");
  gamePieceImg2 = loadImage("../images/red_game_piece.jpg");
  gamePieceImg3 = loadImage("../images/green_game_piece.jpg");
  gamePieceImg4 = loadImage("../images/yellow_game_piece.jpg");

  ladderImg1 = loadImage("../images/ladder1.jpg");
  ladderImg2 = loadImage("../images/ladder2.jpg");
  ladderImg3 = loadImage("../images/ladder3.jpg");

  snakeImg1 = loadImage("../images/snake1.png");
  snakeImg2 = loadImage("../images/snake2.png");
  snakeImg3 = loadImage("../images/snake3.png");
  snakeImg4 = loadImage("../images/snake4.png");
}

function setup(){
  canvas = createCanvas(400,400);
  //database = firebase.database;
  var columns = 10;
  var rows = 10;
  var resolution = 40;
  var direction = 1;
  var x = 0;
  var y = 360;

  for( var i = 0; i < columns*rows; i = i+1){
    var tile = new Tile(x,y,resolution,i,i+1);
    tiles.push(tile);
    x = x + (resolution*direction);

    if(x >= width || x<= -resolution){
      direction = direction*-1;
      x = x+resolution*direction;
      y = y-resolution;
    }
  }

  for(var tile of tiles){
    tile.show();
  }
  for(var tile of tiles){
    tile.showText();
  }
}

function draw(){
  
}
