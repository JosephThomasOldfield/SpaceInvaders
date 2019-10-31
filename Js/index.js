
//Current hero position tracker
let hero = {
    top: 600,
    left: 550,
}

//Current missile position tracker
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

    console.log(e)
    //Move left
    if (e.keyCode === 37) {
        console.log("left")
        hero.left = hero.left - 15
        moveHero()
    }
    //Move Right
    else if (e.keyCode === 39) {

        console.log("right")
        hero.left = hero.left + 15
        moveHero()
    }
    //Fire Missile by adding to array
    else if (e.keyCode === 90) {
        console.log("fire")
        missiles.push({
            left: hero.left + 15,
            top: hero.top
        })
    }
}

//Function to update score 
function playerScore() {
    document.getElementById('score').innerHTML = `${Math.round(1700 / (enemies.length +1)) -68}`
}
// function to track player movement
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
    for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
        enemies[enemy].top = enemies[enemy].top + 1;
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
                console.log("hit")
                enemies.splice(enemy, 1)
                missiles.splice(missile, 1)
            }
        }
    }
}




// This Gameloop function runs the game by repeat executing track functions
function gameloop() {
    setTimeout(gameloop, 50);
    moveMissiles();
    drawMissiles();
    moveEnemies();
    drawEnemies();
    collisionDetect();
    playerScore();
}
gameloop()





