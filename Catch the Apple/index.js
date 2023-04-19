const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const enemyColor = ("red");


class SnakePart{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

}

class EnemyPart{
    constructor(x, y){
        this.a = a;
        this.z = z;
    }
}


let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headA = 20;
let headZ = 20;

let leglength = 4;


let headX = 10;
let headY = 10;

let tailLength = 2;


let appleX = 5;
let appleY = 5;

let xVelocity=0;
let yVelocity=0;

let Avelocity =0;
let Yvelocity =0;

let score = 0;

//game loop
function drawGame(){
    changeSnakePosition();
    let result = isGameOver();
    if(result){
          return;
    }
    clearScreen();
    
    checkAppleCollision();
    drawApple();
    drawEnemy();
    drawSnake();
    drawScore();
    setTimeout(drawGame,1000/speed);
}

function isGameOver(){
    let gameOver = false;

    //walls
    if(headX < 0 ){
        gameOver = true;
    }
    
    else if(headX === tileCount){
        gameOver  = true
    }

    if(headY < 0 ){
        gameOver = true;
    }

    else if(headY === tileCount){
        gameOver = true
    }

    if(gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "50px Verdana";
        

        ctx.fillText("DumbAss!", canvas.width / 6.5, canvas.height / 2)
    }

    return gameOver;
}

function drawScore(){
    ctx.fillStyle = "white";
    ctx.font = "10px Verdana"
    ctx.fillText("Score " + score, canvas.width-210, 10);

}

function drawEnemy(){
    ctx.fillStyle = 'red';
    ctx.fillRect(headA * tileCount, headZ* tileCount, tileSize, tileSize, canvas.width -100, 20);

}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake(){
    ctx.fillStyle = 'white'
    ctx.fillRect(headX * tileCount, headY* tileCount, tileSize, tileSize);
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawApple(){
    ctx.fillStyle = 'green'
    ctx.fillRect( appleX* tileCount, appleY* tileCount, tileSize, tileSize);
}

function checkAppleCollision(){
    if(appleX === headX && appleY == headY){
        appleX = Math.floor(Math.random()* tileCount);
        appleY = Math.floor(Math.random()* tileCount);
        tailLength
        score ++;
    }
}

document.body.addEventListener('keydown',keyDown);

function keyDown(event){
    //up
    if(event.keyCode == 38){
        if(yVelocity == 1)
             return;
        yVelocity = -1;
        xVelocity = 0;

    }

    //down
    if(event.keyCode == 40){
        if(xVelocity == 0)
             return;
        yVelocity = 1;
        xVelocity = 0;
    }

    //left 
    if(event.keyCode == 37){
        if(yVelocity == 0)
            return;
        yVelocity = 0;
        xVelocity = -1;
    }
 
    //right
    if(event.keyCode == 39){
        if(xVelocity == -1)
            return;
        yVelocity = 0;
        xVelocity = 1;
    }
}

drawGame();