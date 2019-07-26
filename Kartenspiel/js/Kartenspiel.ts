// Interface zu Karten

interface Card {
    cardColor: string; // Farbe der Karte
    cardNumber: number; // Wertigkeit der Karte
}

// Variablen & Arrays zum Spiel

let drawPile : Card [] = []; // Ziehstapel
let discardPile : Card [] = []; // Ablagestapel
let computerHand : Card [] = []; // Hand des Computers
let playerHand : Card [] = []; // Hand des Spielers
//let cardNumber : number [] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

window.onload = function () {
    document.getElementById("start").addEventListener("click", startGame, false);
    console.log("Spiel kann gestartet werden.")
}

// Funktion zum Starten des Spiels, d.h. Karten mischen und an beide Spieler aufteilen, sowie 1. Karte auf Ablagestapel legen
function startGame (){
    generatePiles (); // alle Karten generieren
    drawPile = shufflePile(drawPile); // Karten mischen
    dealCards(); // Karten verteilen
    updateHTML(); // damit werden auch die Karten für die einzelnen Piles genereriert und angezeigt
}

function generatePiles() { // alle Karten sollen erstellt und in den drawPile eingefügt werden
   let generatedCardNumber : number; // Variablen zum Erstellen der einzelnen Karten
   let generatedCardColor : string;

   // Farbe der Karte bestimmen, 4 verschiedene Fälle bzw. Bedingungen möglich --> 1 Bedingung pro Farbe
   for (let j:number = 0; j < 4; j++){
        if (j==0) {
            generatedCardColor = "redCard"; // Zugriff auf Klasse "redCard" 
        }
        else if (j==1) {
            generatedCardColor = "blueCard"; // Zugriff auf Klasse "blueCard"
        }
        else if (j==2) {
            generatedCardColor = "greenCard"; // Zugriff auf Klasse "greenCard"
        }
        else if (j==3) {
            generatedCardColor = "yellowCard" // Zugriff auf Klasse "yellowCard"
        }  
        // Wertigkeit der Karte bestimmen
        for (let i:number=1; i <= 9; i++){
        generatedCardNumber = i; // höchste Nummer soll bei 9 sein
        let generatedCard : Card = { // Karte soll mit zuvor ermittelter Farbe bzw. Wertigkeit erstellt werden
            cardNumber : generatedCardNumber,
            cardColor : generatedCardColor
        }
        drawPile.push(generatedCard); // alles muss dem drawPile hinzugefügt werden
        }
   }
   console.log("Karten wurden erstellt und in den Stapel eingefügt.")
}

function shufflePile(drawPile : Card []) { // Karten nach Generierung einmal mischen [mithilfe von Fisher-Yates-Shuffle-Algorithmus]
    let j, x, i;
    for (i = drawPile.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = drawPile[i];
        drawPile[i] = drawPile[j];
        drawPile[j] = x;
    }
    console.log("Karten wurden gemischt.");
    console.log(drawPile)
    return drawPile;
}

function dealCards (){
    for (let i:number = 0; i < 7; i++){
        computerHand.push(drawPile[0]);
        drawPile.splice(0,1);
        playerHand.push(drawPile[0])
        drawPile.splice(0,1);
        // push fügt Karten dem "Handarray" hinzu und splice löscht ausgeteilte Karten aus dem Kartenstapel (drawPile)
    }
    //eine Karte soll auf dem Ablagestapel angezeigt werden, damit das Spiel begonnen werden kann
    discardPile.push(drawPile[0]);
    drawPile.splice(0,1);

    // Consolelogs zur Überprüfung
    console.log(computerHand);
    console.log(discardPile);
    console.log(drawPile);
    console.log(playerHand);
    console.log("Alle Karten wurden verteilt.")
}

function updateHTML () { // umfasst Erstellung und Leerung der HTML-Elemente
    clearHTML();
    generateHTML();
}

function generateHTML () {
    for (let i = 0; i < playerHand.length; i++) {
        generatePlayerHand (i)
    }
    for (let i = 0; i < computerHand.length; i++) {
        generateComputerHand (i)
    }
    for (let i = 0; i < playerHand.length; i++) {
        generateDiscardPile (i)
    }
}
// Funktionen zum Erzeugen der HTML-Elemente (d.h. <div>, die mit CSS zu Karten gestyled wurden; Verwendung von AppendChild hilfreich, Aufruf durch updateHTML()
function generatePlayerHand (numberOfCard : number){
    let holdingDivPlayer : HTMLElement = document.createElement("div");
    holdingDivPlayer.setAttribute("id", "player" + (numberOfCard + 1))
    holdingDivPlayer.setAttribute("class", "card" + playerHand[numberOfCard].cardColor);
    holdingDivPlayer.addEventListener("click", playCard, false);
    document.getElementById("player").appendChild(holdingDivPlayer);

    // Festlegung der Wertigkeit/Zahl der Karte
    let newCardNumber : HTMLElement = document.createElement("p");
    newCardNumber.innerHTML = playerHand[numberOfCard].cardNumber + ""; 
    newCardNumber.setAttribute("class", "cardNumber");
    holdingDivPlayer.appendChild(newCardNumber);
}

function generateComputerHand (numberOfCard : number) {
    let holdingDivComputer : HTMLElement = document.createElement("div");
    holdingDivComputer.setAttribute("id", "computer" + (numberOfCard + 1));
    holdingDivComputer.setAttribute("class", "card" + "hiddenCard"); // soll verdeckt angezeigt werden
    document.getElementById("computer").appendChild(holdingDivComputer);
}

function generateDrawPile (numberOfCard:number) {
    let holdingDivDraw : HTMLElement = document.createElement("div");
    holdingDivDraw.setAttribute("id", "draw" + (numberOfCard + 1));
    holdingDivDraw.setAttribute("class", "card" + "hiddenCard");
    holdingDivDraw.addEventListener("click", drawCard(numberOfCard));
    document.getElementById("draw").appendChild(holdingDivDraw);

}

function generateDiscardPile (numberOfCard:number) {
    let holdingDivDiscard : HTMLElement = document.createElement("div");
    holdingDivDiscard.setAttribute("id", "discard")
    holdingDivDiscard.setAttribute("class", "card");
    document.getElementById("discard").appendChild(holdingDivDiscard);

    // Festlegung der Wertigkeit/Zahl der Karte
    let newCardNumber : HTMLElement = document.createElement("p");
    newCardNumber.innerHTML = drawPile[numberOfCard].cardNumber + "";
    newCardNumber.setAttribute("class", "cardNumber");
    holdingDivDiscard.appendChild(newCardNumber);
}
  
// fehlende Funktionen: drawCard für Kartenstapel; playCards (von Spieler & Computer), clearHTML (um Spiel mit Button neu zu starten), Funktion mit Alert, dass man gewonnen bzw. verloren hat (und dann einfach Neustart???)

/*function playCard(array : Card) {
    if () {

    }
}
  function gameWon () { // Spiel soll bei Gewinn von Spieler oder Computer wieder von vorne anfangen

  }*/