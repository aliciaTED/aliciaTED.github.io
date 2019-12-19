namespace L09_Canvas_Birdhouse {
    export class SittingBird {
        position: Vector;
        velocity: Vector;
        activity: string;
        color: string;
        size: number;

        constructor() {
            console.log("constructed");
            let x: number = 800 * Math.random();
            let y: number = 700 - (80 * Math.random());
            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector(1, 0);
        }

        move(_timeslice: number): void {
            //console.log("moved");
            this.position.add(this.velocity);

            //Vogel-Endless-Schleife
            if (this.position.x > 800)
                this.position.x -= crc2.canvas.width;
        }

        draw(): void {
            //console.log("sitting");

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            //crc2.scale(this.size, this.size);
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);

            let wing: number = -10;
            crc2.arc(wing, 0, 10, 0, 0.5 * Math.PI);
            crc2.arc(0, wing, (1 / 2) * 10, 0, 2 * Math.PI);


            let color: string = "HSLA(100%, 90%, 50%, 0.7)";
            crc2.fillStyle = color;
            crc2.fill();
        
            crc2.restore();
            crc2.closePath();

        }
    }
}