
        //Current hero position tracker
        let hero = {
            top: 700,
            left: 550
        }

        //Current missile position tracker
        let missiles = [
        ]
        
        // Function to detect arrow key press and move
        

        document.onkeydown = function (e) {

            console.log(e)
            //Move left
            if (e.keyCode === 37) {
                console.log("left")
                hero.left = hero.left - 10
                moveHero()
            }
            //Move Right
            else if (e.keyCode === 39) {

            console.log("right")
            hero.left = hero.left + 10
            moveHero()
            }
            //Fire Missile by adding to array
            else if (e.keyCode === 32) {
            console.log("fire")
            missiles.push({
                left: hero.left +15 , 
                top: hero.top
            })
        }
    }
        // function to track player movement
        function moveHero() {
            document.getElementById('hero').style.left = hero.left + "px";
        }

        // Function to track and display missiles
        function drawMissiles() {
            document.getElementById('missiles').innerHTML = "";
            for (let missile = 0; missile <missiles.length; missile = missile +1) {
                document.getElementById('missiles').innerHTML += 
                `<div class = 'missile' style='left:${missiles[missile].left}px;
                top:${missiles[missile].top}px;'></div>`;
            }
        }
        function moveMissiles() { 
            for (let missile = 0; missile <missiles.length; missile = missile +1) {
                missiles[missile].top = missiles[missile].top -5;
        }
    }



        // This Gameloop function runs the game by repeat executing track functions
        function gameloop(){
            setTimeout(gameloop , 50)
            moveMissiles();
            drawMissiles();
        }
        gameloop()
    
    
