"use strict";
var L09_Canvas_Birdhouse;
(function (L09_Canvas_Birdhouse) {
    // Funktionen für alle Hintergrundelemente
    function drawBackground() {
        console.log("Background");
        let gradient = L09_Canvas_Birdhouse.crc2.createLinearGradient(0, 0, 0, L09_Canvas_Birdhouse.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_Canvas_Birdhouse.golden, "HSL(220, 30%, 90%)");
        gradient.addColorStop(1, "white");
        L09_Canvas_Birdhouse.crc2.fillStyle = gradient;
        L09_Canvas_Birdhouse.crc2.fillRect(0, 0, L09_Canvas_Birdhouse.crc2.canvas.width, L09_Canvas_Birdhouse.crc2.canvas.height);
    }
    L09_Canvas_Birdhouse.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun" + _position);
        let r1 = 25;
        let r2 = 150;
        let gradient = L09_Canvas_Birdhouse.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 40%, 0");
        L09_Canvas_Birdhouse.crc2.save();
        L09_Canvas_Birdhouse.crc2.translate(_position.x, _position.y);
        L09_Canvas_Birdhouse.crc2.fillStyle = gradient;
        L09_Canvas_Birdhouse.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fill();
        L09_Canvas_Birdhouse.crc2.restore();
    }
    L09_Canvas_Birdhouse.drawSun = drawSun;
    function drawCloud(_position, _size) {
        console.log("Cloud" + _position, _size);
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L09_Canvas_Birdhouse.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_Canvas_Birdhouse.crc2.save();
        L09_Canvas_Birdhouse.crc2.translate(_position.x, _position.y);
        L09_Canvas_Birdhouse.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_Canvas_Birdhouse.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_Canvas_Birdhouse.crc2.translate(x, y);
            L09_Canvas_Birdhouse.crc2.fill(particle);
            L09_Canvas_Birdhouse.crc2.restore();
        }
        L09_Canvas_Birdhouse.crc2.restore();
    }
    L09_Canvas_Birdhouse.drawCloud = drawCloud;
    function drawMountains(_position, _min, _max, _colorHigh, _colorLow) {
        console.log("Mountains" + _position, _min, _max, _colorHigh, _colorLow);
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 80;
        let x = 0;
        L09_Canvas_Birdhouse.crc2.save();
        L09_Canvas_Birdhouse.crc2.translate(_position.x, _position.y);
        L09_Canvas_Birdhouse.crc2.beginPath();
        L09_Canvas_Birdhouse.crc2.moveTo(0, 0);
        L09_Canvas_Birdhouse.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_Canvas_Birdhouse.crc2.lineTo(x, y);
        } while (x < L09_Canvas_Birdhouse.crc2.canvas.width);
        L09_Canvas_Birdhouse.crc2.lineTo(x, 0);
        L09_Canvas_Birdhouse.crc2.closePath();
        let gradient = L09_Canvas_Birdhouse.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_Canvas_Birdhouse.crc2.fillStyle = gradient;
        L09_Canvas_Birdhouse.crc2.fill();
        L09_Canvas_Birdhouse.crc2.restore();
    }
    L09_Canvas_Birdhouse.drawMountains = drawMountains;
    function drawTree() {
        console.log("Tree");
        let transform = L09_Canvas_Birdhouse.crc2.getTransform();
        // let x: number = Math.random() * 800;
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(600, 470, maxRadius, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fillStyle = "HSL(30, 70%, 40%)"; // Baumstamm
        L09_Canvas_Birdhouse.crc2.fillRect(600, 450, 20, -100);
        L09_Canvas_Birdhouse.crc2.save();
        L09_Canvas_Birdhouse.crc2.translate(0, -120);
        do {
            let y = Math.random() * 150;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            L09_Canvas_Birdhouse.crc2.save();
            L09_Canvas_Birdhouse.crc2.translate(0, -y);
            L09_Canvas_Birdhouse.crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60;
            let color = "HSLA(" + colorAngle + ", 50%, 60%, 0.5)";
            L09_Canvas_Birdhouse.crc2.fillStyle = color;
            L09_Canvas_Birdhouse.crc2.fill(branch);
            L09_Canvas_Birdhouse.crc2.restore();
        } while (--nBranches > 0);
        L09_Canvas_Birdhouse.crc2.restore();
        L09_Canvas_Birdhouse.crc2.setTransform(transform);
    }
    L09_Canvas_Birdhouse.drawTree = drawTree;
    function drawSnowman(_position) {
        console.log("Snowman");
        let snowman = new Path2D;
        let r1 = 70;
        let r2 = 40;
        let r3 = 25;
        snowman.arc(_position.x, _position.y, r1, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fillStyle = "white";
        L09_Canvas_Birdhouse.crc2.fill(snowman);
        L09_Canvas_Birdhouse.crc2.strokeStyle = "black";
        L09_Canvas_Birdhouse.crc2.stroke(snowman);
        let snowman1 = new Path2D;
        let y2 = 500 - (r1 + r2);
        snowman1.arc(_position.x, y2, r2, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fillStyle = "white";
        L09_Canvas_Birdhouse.crc2.fill(snowman1);
        L09_Canvas_Birdhouse.crc2.strokeStyle = "black";
        L09_Canvas_Birdhouse.crc2.stroke(snowman1);
        let snowman2 = new Path2D;
        let y3 = y2 - (r2 + r3);
        snowman2.arc(_position.x, y3, r3, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fillStyle = "white";
        L09_Canvas_Birdhouse.crc2.fill(snowman2);
        L09_Canvas_Birdhouse.crc2.strokeStyle = "black";
        L09_Canvas_Birdhouse.crc2.stroke(snowman2);
        let smile = new Path2D;
        smile.arc(_position.x, y3, 10, 0, Math.PI);
        L09_Canvas_Birdhouse.crc2.stroke(smile);
        let eye1 = new Path2D;
        eye1.arc(390, 315, 3, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fillStyle = "black";
        L09_Canvas_Birdhouse.crc2.fill(eye1);
        L09_Canvas_Birdhouse.crc2.stroke(eye1);
        let eye2 = new Path2D;
        eye2.arc(410, 315, 3, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fillStyle = "black";
        L09_Canvas_Birdhouse.crc2.fill(eye2);
        L09_Canvas_Birdhouse.crc2.stroke(eye2);
        let nose = new Path2D;
        nose.arc(400, 322, 3, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fillStyle = "orange";
        L09_Canvas_Birdhouse.crc2.fill(nose);
        L09_Canvas_Birdhouse.crc2.stroke(nose);
    }
    L09_Canvas_Birdhouse.drawSnowman = drawSnowman;
    function drawBirdhouse() {
        console.log("Birdhouse");
        //Gehäuse
        L09_Canvas_Birdhouse.crc2.fillStyle = "HSL(30, 70%, 15%)";
        L09_Canvas_Birdhouse.crc2.fillRect(150, 550, 15, -70);
        L09_Canvas_Birdhouse.crc2.save();
        L09_Canvas_Birdhouse.crc2.translate(0, -120);
        L09_Canvas_Birdhouse.crc2.fillStyle = "HSL(30, 70%, 50%)";
        L09_Canvas_Birdhouse.crc2.fillRect(118, 600, 80, -90);
        // Loch
        let hole = new Path2D;
        hole.arc(158, 560, 15, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.fillStyle = "black";
        L09_Canvas_Birdhouse.crc2.fill(hole);
        L09_Canvas_Birdhouse.crc2.stroke(hole);
        // Dach
        L09_Canvas_Birdhouse.crc2.beginPath();
        L09_Canvas_Birdhouse.crc2.moveTo(110, 510); // Strich
        L09_Canvas_Birdhouse.crc2.lineTo(158, 448); // Ecke oben
        L09_Canvas_Birdhouse.crc2.lineTo(205, 510);
        L09_Canvas_Birdhouse.crc2.closePath();
        L09_Canvas_Birdhouse.crc2.fillStyle = "darkred";
        L09_Canvas_Birdhouse.crc2.fill();
    }
    L09_Canvas_Birdhouse.drawBirdhouse = drawBirdhouse;
    function drawBirdsInTree(_position, _size) {
        console.log("Birds in Tree");
        let nBirds = 3;
        let radiusBird = 10 + Math.random() * 10;
        let bird = new Path2D();
        bird.arc(0, 0, radiusBird, 0, 2 * Math.PI);
        let wing = 0 - radiusBird;
        bird.arc(wing, 0, radiusBird, 0, 0.5 * Math.PI);
        L09_Canvas_Birdhouse.crc2.stroke(bird);
        let head = 0 - radiusBird;
        bird.arc(0, head, (1 / 2) * radiusBird, 0, 2 * Math.PI);
        L09_Canvas_Birdhouse.crc2.save();
        L09_Canvas_Birdhouse.crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < nBirds; drawn++) {
            let colorAngle = 120 - Math.random() * 290;
            let color = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
            L09_Canvas_Birdhouse.crc2.fillStyle = color;
            L09_Canvas_Birdhouse.crc2.save();
            let x = Math.random() * _size.x;
            let y = -(Math.random() * _size.y);
            L09_Canvas_Birdhouse.crc2.translate(x, y);
            L09_Canvas_Birdhouse.crc2.fill(bird);
            L09_Canvas_Birdhouse.crc2.restore();
        }
        L09_Canvas_Birdhouse.crc2.restore();
    }
    L09_Canvas_Birdhouse.drawBirdsInTree = drawBirdsInTree;
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=background.js.map