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
        // push fügt Karten dem "Handarray" hinzu und splice löscht ausgeteilte Karten aus dem Kartenstapel (drawPile); i bestimmt Anzahl der Karten --> 7 Karten pro Hand
    }
    // eine Karte soll auf dem Ablagestapel angezeigt werden, damit das Spiel begonnen werden kann
    discardPile.push(drawPile[0]);
    drawPile.splice(0,1);

    // Consolelogs zur Überprüfung
    console.log(computerHand);
    console.log(discardPile);
    console.log(drawPile);
    console.log(playerHand);
    console.log("Alle Karten wurden verteilt.")
}

function updateHTML () { // umfasst Erstellung und Leerung der HTML-Elemente, muss bei jeder Änderung des HTML durch Funktionen aufgerufen werden
    clearHTML();
    generateHTML();
}

function generateHTML () {
    for (let i = 0; i < playerHand.length; i++) { // mehrere Handkarten erstellen
        generatePlayerHand (i)
    }
    
    for (let i = 0; i < computerHand.length; i++) { // mehrere Computerkarten erstellen
        generateComputerHand (i)
    }
    generateDiscardPile (); // Ablagestapel soll erstellt werden
    generateDrawPile(); // Kartenstapel zum Ziehen soll erstellt werden

}
// Funktionen zum Erzeugen der HTML-Elemente (d.h. <div>, die mit CSS zu Karten gestyled wurden; Verwendung von AppendChild hilfreich, Aufruf durch updateHTML()
function generatePlayerHand (numberOfCard : number){
    let holdingDivPlayer : HTMLElement = document.createElement("div"); // div mithilfe von CSS gestyled stellt jede Karte dar
    holdingDivPlayer.setAttribute("id", "player" + (numberOfCard + 1)) // Zugriff auf Player-Section, in der div erstellt werden soll
    holdingDivPlayer.setAttribute("class", playerHand[numberOfCard].cardColor); // Zugriff auf Farbklasse inkl. generelles Styling einer Karte
    holdingDivPlayer.addEventListener("click", function () { playCard(numberOfCard); }, false); // Funktion playCard() wird aufgerufen, Parameter (Kartenzahl) kann eingesetzt werden
    document.getElementById("player").appendChild(holdingDivPlayer); // erstellte Karte wird zur Player-Section hinzugefügt (Zugriff über ID)
    
    // Festlegung der Wertigkeit/Zahl der Karte
    let newCardNumber : HTMLElement = document.createElement("p"); // Zahl wird innerhalb eines <p> erstellt
    newCardNumber.innerHTML = playerHand[numberOfCard].cardNumber + ""; // Zugriff auf Wertigkeit bzw. Zahl, die in HTML eingefügt werden soll
    newCardNumber.setAttribute("class", "cardNumber"); // Zugriff auf Klasse bzw. Styling der Zahl
    holdingDivPlayer.appendChild(newCardNumber); // Zahl wird zur Player-Section hinzugefügt
}

function generateComputerHand (numberOfCard : number) {
    let holdingDivComputer : HTMLElement = document.createElement("div");
    holdingDivComputer.setAttribute("id", "computer" + (numberOfCard + 1));
    holdingDivComputer.setAttribute("class", computerHand[numberOfCard].cardColor); // soll verdeckt angezeigt werden --> hiddenCard
    document.getElementById("computer").appendChild(holdingDivComputer);

    // Überprüfen der Computer-Hand, bis Code vollständig
    let newCardNumber : HTMLElement = document.createElement("p");
    newCardNumber.innerHTML = playerHand[numberOfCard].cardNumber + ""; 
    newCardNumber.setAttribute("class", "cardNumber");
    holdingDivComputer.appendChild(newCardNumber);
}

function generateDrawPile () {
    let holdingDivDraw : HTMLElement = document.createElement("div");
    holdingDivDraw.setAttribute("id", "draw");
    holdingDivDraw.setAttribute("class", "hiddenCard");
    holdingDivDraw.addEventListener("click", drawCard, false)
    document.getElementById("drawPile").appendChild(holdingDivDraw); // Karte soll genau auf gepunkteter Fläche erscheinen, daher Zugriff auf #drawPile

}

function generateDiscardPile () {
    let holdingDivDiscard : HTMLElement = document.createElement("div");
    holdingDivDiscard.setAttribute("id", "discard")
    holdingDivDiscard.setAttribute("class", discardPile[discardPile.length-1].cardColor);
    document.getElementById("discardPile").appendChild(holdingDivDiscard); // Karte soll genau auf gepunkteter Fläche erscheinen --> #discardPile

    // Festlegung der Wertigkeit/Zahl der Karte
    let newCardNumber : HTMLElement = document.createElement("p");
    newCardNumber.innerHTML = drawPile[discardPile.length-1].cardNumber + "";
    newCardNumber.setAttribute("class", "cardNumber");
    holdingDivDiscard.appendChild(newCardNumber);
}
  
// fehlende Funktionen: drawCard für Kartenstapel; playCards (von Spieler & Computer), clearHTML (um Spiel mit Button neu zu starten), Funktion mit Alert, dass man gewonnen bzw. verloren hat (und dann einfach Neustart???)

function playCard(cardNumber:number) {

}

function drawCard(){}


function gameWon () { // Spiel soll bei Gewinn von Spieler oder Computer wieder von vorne anfangen

  }
function clearHTML(){}