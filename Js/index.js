var f = 0
//Current hero position tracker
let hero = {
    top: 600,
    left: 550,
}

//Array for missiles. 
let missiles = []
let enemies = [
{left: 200, top: 100},
{left: 300, top: 100},
{left: 400, top: 100},
{left: 500, top: 100},
{left: 600, top: 100},
{left: 700, top: 100},
{left: 800, top: 100},
{left: 900, top: 100},
{left: 200, top: 175},
{left: 300, top: 175},
{left: 400, top: 175},
{left: 500, top: 175},
{left: 600, top: 175},
{left: 700, top: 175},
{left: 800, top: 175},
{left: 900, top: 175},
{left: 200, top: 250},
{left: 300, top: 250},
{left: 400, top: 250},
{left: 500, top: 250},
{left: 600, top: 250},
{left: 700, top: 250},
{left: 800, top: 250},
{left: 900, top: 250},
]



// Function to detect arrow key press and move
document.onkeydown = function (e) {
    //Move left
    if (hero.left > 10){
    if (e.keyCode === 37) {
        hero.left = hero.left - 20
        moveHero()
        }
    } 
    if(hero.left < 1155) {  
    if (e.keyCode === 39) {
        hero.left = hero.left + 20
        moveHero()
        }
    }
    
    if (e.keyCode === 90) {
        missiles.push({
            left: hero.left + 15,
            top: hero.top
        })
    }
}
i = 1
//Function to update hero position
function moveHero() {
    document.getElementById('hero').style.left = hero.left + "px";
}

// Function to track and display missiles
function drawMissiles() {
    document.getElementById('missiles').innerHTML = "";
    for (let missile = 0; missile < missiles.length; missile = missile + 1) {
        document.getElementById('missiles').innerHTML +=
            `<div class = 'missile' style='left:${missiles[missile].left}px;
                top:${missiles[missile].top}px;'></div>`;
    }
}
// Function for missile movement 
function moveMissiles() {
    for (let missile = 0; missile < missiles.length; missile = missile + 1) {
        missiles[missile].top = missiles[missile].top - 5;
    }
}
//function to generate missiles
function drawEnemies() {
    document.getElementById('enemies').innerHTML = "";
    for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
        document.getElementById('enemies').innerHTML +=
            `<div class = 'enemy' style='left:${enemies[enemy].left}px;
                top:${enemies[enemy].top}px;'></div>`;
    }
}
//function to move missiles
function moveEnemies() {
    if (loss = 1) {
    for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
        enemies[enemy].top = enemies[enemy].top + 1;
        }
    }
}
//function to detect unit collision 
function collisionDetect() {
    for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
        for (let missile = 0; missile < missiles.length; missile = missile + 1) {
            //Vertical condition
            if (
                (missiles[missile].top <= enemies[enemy].top + 50) &&
                (missiles[missile].top >= enemies[enemy].top) &&
                (missiles[missile].left >= enemies[enemy].left) &&
                (missiles[missile].left <= enemies[enemy].left + 50)  
                ){
                enemies.splice(enemy, 1)
                missiles.splice(missile, 1)
                
                document.getElementById('points').innerHTML = `Score:${(f+=1) * 99}`
            }
        }
    }
}
//A function to detecgt when you lose the game by enemy unit movement 
function lossDetect() {
    for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
    if(enemies[enemy].top == 675) {
        document.getElementById("lossWin").style.visibility = "visible";
        }
    }
}
//A function to increase the game speed with time 
var counter = 60
function speedIncrease() {
    if (enemies.length == 0) {
        i += 1
        document.getElementById('score').innerHTML = `Round ${i}`
        missiles = []
        enemies.push
        ({"left": 200 , "top": 100},
        {"left": 300, "top": 100},
        {"left": 400, "top": 100},
        {"left": 500, "top": 100},
        {"left": 600, "top": 100},
        {"left": 700, "top": 100},
        {"left": 800, "top": 100},
        {"left": 900, "top": 100},
        {"left": 200, "top": 175},
        {"left": 300, "top": 175},
        {"left": 400, "top": 175},
        {"left": 500, "top": 175},
        {"left": 600, "top": 175},
        {"left": 700, "top": 175},
        {"left": 800, "top": 175},
        {"left": 900, "top": 175},
        {"left": 200, "top": 250},
        {"left": 300, "top": 250},
        {"left": 400, "top": 250},
        {"left": 500, "top": 250},
        {"left": 600, "top": 250},
        {"left": 700, "top": 250},
        {"left": 800, "top": 250},
        {"left": 900, "top": 250})
        counter = counter - 3
        console.log(counter)
        return counter
    }
    else {return counter}
}

// This Gameloop function runs the game by repeat executing track functions
function gameloop() {
    setTimeout(gameloop, speedIncrease());
    speedIncrease();
    moveMissiles();
    drawMissiles();
    moveEnemies();
    drawEnemies();
    collisionDetect();
    lossDetect()
    
}
gameloop()

//do not make changes to the gameloop
//change






