"use strict";
var L09_Canvas_Birdhouse;
(function (L09_Canvas_Birdhouse) {
    class Bird {
        constructor() {
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 700 * L09_Canvas_Birdhouse.golden * Math.random();
            this.position = new L09_Canvas_Birdhouse.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new L09_Canvas_Birdhouse.Vector(-5, 0);
        }
        move(_timeslice) {
            //console.log("moved");
            this.position.add(this.velocity);
            //Vogel-Endless-Schleife
            if (this.position.x < 0)
                this.position.x += L09_Canvas_Birdhouse.crc2.canvas.width;
        }
        drawFlyingBird() {
            //console.log("flying");
            // let radiusBird: number = 7 + Math.random() * 10;
            L09_Canvas_Birdhouse.crc2.beginPath();
            L09_Canvas_Birdhouse.crc2.save();
            L09_Canvas_Birdhouse.crc2.translate(this.position.x, this.position.y);
            //crc2.scale(this.size, this.size);
            L09_Canvas_Birdhouse.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            let head = -15;
            L09_Canvas_Birdhouse.crc2.arc(head, -2, (1 / 2) * 15, 0, 2 * Math.PI);
            L09_Canvas_Birdhouse.crc2.ellipse(5, -5, (1 / 3) * 15, 15, 13, 0, 2 * Math.PI);
            for (let drawn = 0; drawn < 20; drawn++) {
                let colorAngle = 120 - Math.random() * 290;
                let color = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
                let scale = 0.7 + Math.random() * 1;
                L09_Canvas_Birdhouse.crc2.fillStyle = color;
                // crc2.save();
                // let x: number = Math.random() * _size.x;
                // let y: number = - (Math.random() * _size.y);
                // crc2.translate(x, y);
                L09_Canvas_Birdhouse.crc2.transform(scale, 0, 0, scale, 0, 0);
                L09_Canvas_Birdhouse.crc2.fill();
                // crc2.restore();
            }
            L09_Canvas_Birdhouse.crc2.restore();
            L09_Canvas_Birdhouse.crc2.closePath();
        }
    }
    L09_Canvas_Birdhouse.Bird = Bird;
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=bird.js.map