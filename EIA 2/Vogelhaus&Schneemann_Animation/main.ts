namespace L09_Canvas_Birdhouse {
    export interface VectorBack {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;

    let snowflakes: Snowflake[] = [];
    let birds: Bird[] = [];
    let sittingBirds: SittingBird[] = [];

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 75, 200, "white", "grey");
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 50, 150, "lightgrey", "grey");
        drawTree();
        drawSnowman({ x: 400, y: 500 });
        drawBirdhouse();
        drawBirdsInTree({ x: 510, y: 400 }, { x: 180, y: 120 });

        let background: ImageData = crc2.getImageData(0, 0, 800, 600);

        drawBirds(15);
        drawSittingBirds(7);
        drawSnowflakes(111);

        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
    }

    function drawBirds(nBirds: number): void {
        console.log("(Hotdog) birds.");

        for (let i: number = 0; i < nBirds; i++) {
            let bird: Bird = new Bird();
            birds.push(bird);
        }

        // 
    }

    function drawSittingBirds(nBirds: number): void {
        for (let i: number = 0; i < nBirds; i++) {
            let sittingBird: SittingBird = new SittingBird();
            sittingBirds.push(sittingBird);
        }
    }


    function drawSnowflakes(nSnowflakes: number): void {
        console.log("Schneeflocken");
        //let nSnowflakes: number = 111;

        for (let i: number = 0; i < nSnowflakes; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflakes.push(snowflake);
        }
    }

    // update Background & Animation

    function update(_background: ImageData): void {
        console.log("updated");
        crc2.putImageData(_background, 0, 0);

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
}
