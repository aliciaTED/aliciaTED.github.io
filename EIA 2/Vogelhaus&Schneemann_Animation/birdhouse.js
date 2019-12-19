"use strict";
var L09_Canvas_Birdhouse;
(function (L09_Canvas_Birdhouse) {
    window.addEventListener("load", handleLoad);
    L09_Canvas_Birdhouse.golden = 0.62;
    let snowflakes = [];
    let birds = [];
    let sittingBirds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Canvas_Birdhouse.crc2 = canvas.getContext("2d");
        L09_Canvas_Birdhouse.drawBackground();
        L09_Canvas_Birdhouse.drawSun({ x: 100, y: 75 });
        L09_Canvas_Birdhouse.drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        L09_Canvas_Birdhouse.drawMountains({ x: 0, y: L09_Canvas_Birdhouse.crc2.canvas.height * L09_Canvas_Birdhouse.golden }, 75, 200, "white", "grey");
        L09_Canvas_Birdhouse.drawMountains({ x: 0, y: L09_Canvas_Birdhouse.crc2.canvas.height * L09_Canvas_Birdhouse.golden }, 50, 150, "lightgrey", "grey");
        L09_Canvas_Birdhouse.drawTree();
        L09_Canvas_Birdhouse.drawSnowman({ x: 400, y: 500 });
        L09_Canvas_Birdhouse.drawBirdhouse();
        L09_Canvas_Birdhouse.drawBirdsInTree({ x: 510, y: 400 }, { x: 180, y: 120 });
        let background = L09_Canvas_Birdhouse.crc2.getImageData(0, 0, 800, 600);
        drawBirds(15);
        drawSittingBirds(7);
        drawSnowflakes(111);
        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
    }
    function drawBirds(nBirds) {
        console.log("(Hotdog) birds.");
        for (let i = 0; i < nBirds; i++) {
            let bird = new L09_Canvas_Birdhouse.Bird();
            birds.push(bird);
        }
        // 
    }
    function drawSittingBirds(nBirds) {
        for (let i = 0; i < nBirds; i++) {
            let sittingBird = new L09_Canvas_Birdhouse.SittingBird();
            sittingBirds.push(sittingBird);
        }
    }
    function drawSnowflakes(nSnowflakes) {
        console.log("Schneeflocken");
        //let nSnowflakes: number = 111;
        for (let i = 0; i < nSnowflakes; i++) {
            let snowflake = new L09_Canvas_Birdhouse.Snowflake();
            snowflakes.push(snowflake);
        }
    }
    // update Background & Animation
    function update(_background) {
        console.log("updated");
        L09_Canvas_Birdhouse.crc2.putImageData(_background, 0, 0);
        for (let snowflake of snowflakes) {
            snowflake.move(1.5);
            snowflake.draw();
        }
        for (let bird of birds) {
            bird.move(1);
            bird.drawFlyingBird();
        }
        for (let sittingBird of sittingBirds) {
            sittingBird.move(1);
            sittingBird.draw();
        }
    }
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=birdhouse.js.map