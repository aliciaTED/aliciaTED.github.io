namespace L09_Canvas_Birdhouse {
    
    // Funktionen für alle Hintergrundelemente
    export function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "HSL(220, 30%, 90%)");
        gradient.addColorStop(1, "white");
 
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function drawSun(_position: VectorBack): void {
        console.log("Sun" + _position);

        let r1: number = 25;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 40%, 0");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawCloud(_position: VectorBack, _size: VectorBack): void {
        console.log("Cloud" + _position, _size);
        let nParticles: number = 30;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();
    }

    export function drawMountains(_position: VectorBack, _min: number, _max: number, _colorHigh: string, _colorLow: string): void {
        console.log("Mountains" + _position, _min, _max, _colorHigh, _colorLow);
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 80;
        let x: number = 0;

        crc2.save();

        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }

    export function drawTree(): void {
        console.log("Tree");
        let transform: DOMMatrix = crc2.getTransform();

        // let x: number = Math.random() * 800;
        let nBranches: number = 50;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(600, 470, maxRadius, 0, 2 * Math.PI);

        crc2.fillStyle = "HSL(30, 70%, 40%)"; // Baumstamm
        crc2.fillRect(600, 450, 20, -100);
        crc2.save();
        crc2.translate(0, -120);

        do {
            let y: number = Math.random() * 150;
            let x: number = (Math.random() - 0.5) * 2 * maxRadius;

            crc2.save();
            crc2.translate(0, -y);
            crc2.translate(x, 0);

            let colorAngle: number = 120 - Math.random() * 60;
            let color: string = "HSLA(" + colorAngle + ", 50%, 60%, 0.5)";

            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);

        crc2.restore();
        crc2.setTransform(transform);
    }

    export function drawSnowman(_position: VectorBack): void {
        console.log("Snowman");

        let snowman: Path2D = new Path2D;
        let r1: number = 70;
        let r2: number = 40;
        let r3: number = 25;

        snowman.arc(_position.x, _position.y, r1, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowman);
        crc2.strokeStyle = "black";
        crc2.stroke(snowman);

        let snowman1: Path2D = new Path2D;
        let y2: number = 500 - (r1 + r2);

        snowman1.arc(_position.x, y2, r2, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowman1);
        crc2.strokeStyle = "black";
        crc2.stroke(snowman1);

        let snowman2: Path2D = new Path2D; 
        let y3: number = y2 - (r2 + r3);

        snowman2.arc(_position.x, y3, r3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowman2);
        crc2.strokeStyle = "black";
        crc2.stroke(snowman2);

        let smile: Path2D = new Path2D;

        smile.arc(_position.x, y3, 10, 0, Math.PI);
        crc2.stroke(smile);

        let eye1: Path2D = new Path2D;

        eye1.arc(390, 315, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill(eye1);
        crc2.stroke(eye1);

        let eye2: Path2D = new Path2D;

        eye2.arc(410, 315, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill(eye2);
        crc2.stroke(eye2);

        let nose: Path2D = new Path2D;

        nose.arc(400, 322, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill(nose);
        crc2.stroke(nose);
    }

    export function drawBirdhouse(): void {
        console.log("Birdhouse");

        //Gehäuse
        crc2.fillStyle = "HSL(30, 70%, 15%)";
        crc2.fillRect(150, 550, 15, -70);
        crc2.save();
        crc2.translate(0, -120);

        crc2.fillStyle = "HSL(30, 70%, 50%)";
        crc2.fillRect(118, 600, 80, -90);

        // Loch
        let hole: Path2D = new Path2D;

        hole.arc(158, 560, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill(hole);
        crc2.stroke(hole);

        // Dach
        crc2.beginPath();
        crc2.moveTo(110, 510); // Strich
        crc2.lineTo(158, 448); // Ecke oben
        crc2.lineTo(205, 510);
        crc2.closePath();
        crc2.fillStyle = "darkred";
        crc2.fill();

    }

    export function drawBirdsInTree(_position: VectorBack, _size: VectorBack): void {
        console.log("Birds in Tree");

        let nBirds: number = 3;
        let radiusBird: number = 10 + Math.random() * 10;
        let bird: Path2D = new Path2D();

        bird.arc(0, 0, radiusBird, 0, 2 * Math.PI);

        let wing: number = 0 - radiusBird;
        bird.arc(wing, 0, radiusBird, 0, 0.5 * Math.PI);
        crc2.stroke(bird);

        let head: number = 0 - radiusBird;
        bird.arc(0, head, (1 / 2) * radiusBird, 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(_position.x, _position.y);


        for (let drawn: number = 0; drawn < nBirds; drawn++) {
            let colorAngle: number = 120 - Math.random() * 290;
            let color: string = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
            crc2.fillStyle = color;
            crc2.save();
            let x: number = Math.random() * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(bird);
            crc2.restore();
        }
        crc2.restore();
    }

}