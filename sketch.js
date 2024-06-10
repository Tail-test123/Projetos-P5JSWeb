// a bola
let xBall = 300;
let yBall = 200;
let diameter = 20;
// velocidade da bola
let ray = diameter / 2;
let speedYBall = 6;
let speedXBall = 6;
// variaveis raquete
let xRacket = 2;
let yRacket = 150;
let lengthRacket = 10;
let heightRacket = 90;
// raquete do oponente
let xOpponent = 588;
let yOpponent = 150;
let speedYOpponent;
//placar do jogo
let myPoints = 0;
let pointsOpponent = 0;
// sounds
let raquetada;
let ponto;
let goodnight;

function setup() {
  createCanvas(600, 400);
  goodnight
}

function draw() {
  background("black");
  showBall();
  moveBall();
  edgeCollisionCheck();
  showRacket(xRacket, yRacket);
  moveRacket();
  showOpponent(xOpponent, yOpponent);
  moveOpponent();
  checkCollisionRacket();
  checkCollisionOpponent();
  includesScoreboard();
  points();
  moveOpponent();
 }
// funções
 function edgeCollisionCheck(){
    if (yBall + ray > height || yBall < 0) {speedYBall *= -1}
  if (xBall + ray > width || xBall < 0) {speedXBall *= -1}
                         }
 function showBall(){circle(xBall, yBall, diameter);}

 function moveBall(){xBall += speedXBall;
                      yBall += speedYBall;}

 function showRacket(x, y){
      strokeWeight (4)
   stroke (color(255,165,0))
   rect(x, y, lengthRacket, heightRacket)};

 function moveOpponent(){
  if (keyIsDown(UP_ARROW)){yOpponent -= 5;}
  if (keyIsDown(DOWN_ARROW)){yOpponent += 5;}}

 function showOpponent(x, y){
   strokeWeight (4)
   stroke (color(0,250,250))
   rect (x, y, lengthRacket, heightRacket)}

function checkCollisionRacket() {
  if (xBall - ray < xRacket + lengthRacket && yBall - ray < yRacket + heightRacket && yBall + ray > yRacket) {speedXBall *= -1;}}

function checkCollisionOpponent() {
  if (xBall + ray > xOpponent && yBall + ray < yOpponent + heightRacket && yBall - ray > yOpponent - lengthRacket) {speedXBall *= -1;}}

function includesScoreboard() {
  strokeWeight(3);
  stroke(255);
  textAlign (CENTER);
  textSize(28);
  fill(color(148,0,211));
  rect(181, 7, 50, 30);
  fill(255);
  text(myPoints, 205, 32);
  fill(color(148,0,211));
  rect(370, 7, 50, 30);
  fill(255);
  text(pointsOpponent, 394, 32);}

function points(){
  if (xBall > 593) {myPoints += 1}
  if (xBall < 0) {pointsOpponent += 1}}

function preLoad(){
  goodnight = loadSound("goodnight.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");}

 function moveRacket(){
  if (keyIsDown(87)){yRacket -= 9;}
  if (keyIsDown(83)){yRacket += 9;}}
