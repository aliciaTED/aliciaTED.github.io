namespace L09_Canvas_Birdhouse {
    export class Bird {
        position: Vector;
        velocity: Vector;
        activity: string;
        color: string;
        size: number;

        constructor() {
            console.log("constructed");
            let x: number = 800 * Math.random();
            let y: number = 700 * golden * Math.random();
            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector(-5, 0);
        }

        move(_timeslice: number): void {
            //console.log("moved");
            this.position.add(this.velocity);

            //Vogel-Endless-Schleife
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        }

        drawFlyingBird(): void {
            //console.log("flying");

            // let radiusBird: number = 7 + Math.random() * 10;

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            //crc2.scale(this.size, this.size);
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);

            let head: number = -15;
            crc2.arc(head, -2, (1 / 2) * 15, 0, 2 * Math.PI);
            crc2.ellipse(5, -5, (1 / 3) * 15, 15, 13, 0, 2 * Math.PI);

            for (let drawn: number = 0; drawn < 20; drawn++) {
                let colorAngle: number = 120 - Math.random() * 290;
                let color: string = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
                let scale: number = 0.7 + Math.random() * 1;
                crc2.fillStyle = color;
                // crc2.save();
                // let x: number = Math.random() * _size.x;
                // let y: number = - (Math.random() * _size.y);
                // crc2.translate(x, y);
                crc2.transform(scale, 0, 0, scale, 0, 0);
                crc2.fill();
                // crc2.restore();
            }

            crc2.restore();
            crc2.closePath();

        }
    }
}