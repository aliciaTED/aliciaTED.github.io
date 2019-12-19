"use strict";
var L09_Canvas_Birdhouse;
(function (L09_Canvas_Birdhouse) {
    class Snowflake {
        constructor() {
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new L09_Canvas_Birdhouse.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new L09_Canvas_Birdhouse.Vector(0, 3);
        }
        move(_timeslice) {
            //console.log("moved");
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(this.velocity);
            //Schneeflocken-Endless-Schleife
            if (this.position.y > 600)
                this.position.y -= L09_Canvas_Birdhouse.crc2.canvas.height;
        }
        draw() {
            //console.log("drawn");
            let gradient = L09_Canvas_Birdhouse.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            L09_Canvas_Birdhouse.crc2.beginPath();
            L09_Canvas_Birdhouse.crc2.save();
            L09_Canvas_Birdhouse.crc2.translate(this.position.x, this.position.y);
            // crc2.scale(this.size, this.size);
            L09_Canvas_Birdhouse.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_Canvas_Birdhouse.crc2.fillStyle = gradient;
            L09_Canvas_Birdhouse.crc2.fill();
            L09_Canvas_Birdhouse.crc2.restore();
            L09_Canvas_Birdhouse.crc2.closePath();
        }
    }
    L09_Canvas_Birdhouse.Snowflake = Snowflake;
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=snowflake.js.map