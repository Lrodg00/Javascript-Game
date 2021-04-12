// const Phaser = require("phaser");
// const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
//     preload: preload,
//     create: create,
//     update, update
// })
// console.log(player);
// function preload () {

// }
// function create () {}
var playerImages = new Array("../Images/ManNeutral.png","../Images/ManJump.png" ,"../Images/ManLeft.png", "Images/ManRight.png");
var player = new Player();
var board = [];
var platforms = [];
function addPlatform(x, y){
    platforms[x][y] = 1;
}
function startGame(){
    for(let i = 0; i < 500; i++){
        board.push([]);
        for(let j = 0; j< 500; j++){
            board[i][j].push(0);
            platforms[i][j].push(0);
        }

    }

    document.addEventListener('keydown', (key) => { //add a listener for key presses
        if (key.key === 'd') { //if the key is d
            moveLeft(); //move the player left
        }
        if (key.key === 'a') { //if the key is a
           moveRight(); //move the player right
        }
        if (key.key === ' ') { // if the key is a space
            jump();
        }
    });
    let canvas = document.getElementById("canvas");
    canvas.setAttribute("height", 500);
    canvas.setAttribute("width", 500);
    let ctx = canvas.getContext("2d");
    console.log(player);
    console.log(playerImages);
    setInterval(update, 63);
}
function update () {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, 500, 500);
    player.posy += 1;
    if(player.posy > 450)
    {
        player.posy = 450;
    }
    image = document.createElement("IMG");
    image.setAttribute("src", playerImages[player.sprite]);
    image.setAttribute("height", 32);
    image.setAttribute("width", 32);
    ctx.drawImage(image, player.posx, player.posy);
}
function Player(){
        this.sprite = 0;
        this.posx = 0;
        this.posy = 450;
}
function moveLeft() {
    player.sprite = 3;
    player.posx += 1;
}
function jump(){
    player.sprite = 1;
    player.posy -= 5;
}
function moveRight(){
    player.sprite = 2;
    player.posx -=1;
}
