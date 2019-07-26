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
    generatePiles ();
    shufflePile(drawPile); // Karten mischen
    dealCards();
    updateHTML(); // damit werden auch die Karten für die einzelnen Piles genereriert und angezeigt
}

function generatePiles() { // alle Karten sollen erstellt und in den drawPile eingefügt werden
   let newCardNumber : number; // Variablen zum Erstellen der einzelnen Karten
   let newCardColor : string;

   for (let i:number=1; i <= 9; i++){
       newCardNumber = i; // höchste Nummer soll bei 9 sein
       let j:number; // zum Bestimmen der Kartenfarbe wird neue Variable benötigt, 4 Farben sind möglich
    if (j == 0) {
        newCardColor = "redCard";
    }
    else if (j==1) {
        newCardColor = "blueCard";
    }
    else if (j==2) {
        newCardColor = "greenCard";
    }
    else if (j==3) {
        newCardColor = "yellowCard"
    }
    let newCard : Card = { // Karte soll mit zuvor ermittelten Wertigkeiten/Farben erstellt werden
        cardNumber : newCardNumber,
        cardColor : newCardColor
    }
    drawPile.push(newCard);
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
    console.log("Zufällige Karte: " + drawPile)
    return drawPile;
}

function dealCards (){
    for (let i:number = 0; i <= 7; i++){
        computerHand.push(drawPile[i]);
        drawPile.splice(0,1);
        playerHand.push(drawPile[i])
        drawPile.splice(0,1);
        // push fügt Karten dem "Handarray" hinzu und splice löscht ausgeteilte Karten aus dem Kartenstapel (drawPile)
    }
    discardPile.push(drawPile[0]); // erste Karte zu Ablagestapel hinzufügen
    drawPile.splice(0,1)
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
    holdingDivPlayer.setAttribute("class", "card");
    holdingDivPlayer.addEventListener("click", playCard(numberOfCard), false);
    document.getElementById("player").appendChild(holdingDivPlayer);

    let tempCardNumber: string = playerHand[numberOfCard].cardNumber + " "
    // Festlegung der Wertigkeit/Zahl der Karte
    let newCardNumber : HTMLElement = document.createElement("p");
    newCardNumber.innerHTML = tempCardNumber + "";
    newCardNumber.setAttribute("class", "cardNumber");
    holdingDivPlayer.appendChild(newCardNumber);
}

function generateComputerHand (numberOfCard : number) {
    let holdingDivComputer : HTMLElement = document.createElement("div");
    holdingDivComputer.setAttribute("class", "card");
    document.getElementById("computer").appendChild(holdingDivComputer);
}

function generateDrawPile (numberOfCard:number) {
    let holdingDivDraw : HTMLElement = document.createElement("div");
    holdingDivDraw.setAttribute("id", "draw");
    holdingDivDraw.setAttribute("class", "hiddenCard");
    holdingDivDraw.addEventListener("click", drawCard(numberOfCard));
    document.getElementById("draw").appendChild(holdingDivDraw);
}

function generateDiscardPile (numberOfCard:number) {
    let holdingDivDiscard : HTMLElement = document.createElement("div");
    holdingDivDiscard.setAttribute("class", "card");
    document.getElementById("discard").appendChild(holdingDivDiscard);
}
  
// Funktionen, um Karten auszuspielen

/*function playCard(array : Card) {
    if () {

    }
}
  function gameWon () { // Spiel soll bei Gewinn von Spieler oder Computer wieder von vorne anfangen

  }*/