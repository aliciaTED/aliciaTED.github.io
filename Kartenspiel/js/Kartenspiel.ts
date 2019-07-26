// Interface zu Karten

interface Card {
    cardColor: string; // Farbe der Karte
    cardNumber: number; // Wertigkeit/Zahl der Karte
}

// Variablen & Arrays zum Spiel

let drawPile : Card [] = []; // Ziehstapel/Kartenstapel
let discardPile : Card [] = []; // Ablagestapel
let computerHand : Card [] = []; // Hand des Computers
let playerHand : Card [] = []; // Hand des Spielers

let topCard: Card; // oberste Karte auf dem discardPile(Ablagestapel)
let player: boolean; // wichtig, um zu definieren, ob Player gerade an der Reihe ist und Karten ablegen bzw. aufnehmen kann
let playedCard: boolean = false; //Karten, die bereits gespielt/aufgenommen wurden

window.onload = function () {
    document.getElementById("start").addEventListener("click", startGame, false); // Klick auf den Start-Button soll Spiel beginnen und Karten sichtbar machen
    console.log("Spiel kann gestartet werden.")
}

// Funktion zum Starten des Spiels, d.h. Karten mischen und an beide Spieler aufteilen, sowie 1. Karte auf Ablagestapel legen
function startGame (){
    let element = <HTMLInputElement> document.getElementById("start");
    element.disabled = true; // Start-Button wird bis zum Ende des Spiels ausgeschaltet --> erst wieder eingeschaltet, wenn Spieler gewinnt oder verliert
    clearAllHTML();
    generatePiles (); // alle Karten generieren

    shufflePile(drawPile); // Kartenstapel mischen
    dealCards(); // Karten verteilen
    updateHTML(); // damit werden auch die Karten für die einzelnen Piles genereriert und angezeigt
}

function generatePiles() { // alle Karten sollen erstellt und in den drawPile eingefügt werden
   let generatedCardNumber : number; // Variable zum Erstellen der Kartennummer/-zahl
   let generatedCardColor : string; // Variable zum Erstellen der Kartenfarbe

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
        drawPile.push(generatedCard); // alles muss dem Kartenstapel (drawPile) hinzugefügt werden
        }
   }
   console.log("Karten wurden erstellt und in den Stapel eingefügt.")
}

function shufflePile(array : Card []) { // Karten nach Generierung einmal mischen [Verwendung des Fisher-Yates-Shuffle-Algorithmus]
    let m = array.length, t, i;
    while(m) {
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    console.log(drawPile);
    console.log("Karten wurden gemischt.")
    return array;

    //Durstenfeld-Shuffle, ändert ursprüngliches Array, daher lieber Fisher-Yates-Shuffle verwenden
    /*let j, x, i;
    for (i = drawPile.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = drawPile[i];
        drawPile[i] = drawPile[j];
        drawPile[j] = x;
    }
    console.log("Karten wurden gemischt.");
    console.log(drawPile)
    return drawPile;*/
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
    clearAllHTML();
    generateHTML();
}

function generateHTML () {
    for (let i = 0; i < playerHand.length; i++) { // mehrere Handkarten erstellen
        generatePlayerHand (i)
    }
    
    for (let i = 0; i < computerHand.length; i++) { // mehrere Computerkarten erstellen
        generateComputerHand (i)
    }
    generateDiscardPile (); // Ablagestapel soll erstellt, aber nur mit einer Karte angezeigt werden, daher keine Schleife
    generateDrawPile(); // Kartenstapel zum Ziehen soll erstellt, aber nur mit einer Karte angezeigt werden, daher keine Schleife
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
    newCardNumber.innerHTML = computerHand[numberOfCard].cardNumber + ""; 
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
    newCardNumber.innerHTML = discardPile[discardPile.length-1].cardNumber + "";
    newCardNumber.setAttribute("class", "cardNumber");
    holdingDivDiscard.appendChild(newCardNumber);
}
  
// fehlende Funktionen: drawCard für Kartenstapel; playCards (von Spieler & Computer), clearHTML (um Spiel mit Button neu zu starten)

function playCard(nrOfcardPlayed : number) {
    let topCard = discardPile[discardPile.length-1];
    let playedCard = playerHand[nrOfcardPlayed];
        if(topCard.cardColor == playedCard.cardColor || topCard.cardNumber == playedCard.cardNumber){ // überprüfen, ob Karte auf discardPile abgelegt werden darf --> entweder gleiche Farbe ODER gleiche Zahl ODER beides
            discardPile.push(playedCard); // gespielte Karte zum Ablagestapel hinzufügen
            topCard = playedCard;
            console.log(topCard);
            playerHand.splice(nrOfcardPlayed,1) // gespielte Karte aus der Spielerhand entfernen
            updateHTML();
            console.log(playerHand);
            console.log(discardPile);
            console.log("Spieler hat eine Karte abgelegt.");
            if (playerHand.length < 1){
                winOrLoss(); // Funktion, die über Gewinn entscheiden bzw. diesen überprüft
            } else {setTimeout(computerPlaysCard, 450)} // nach kurzer Verzögerung wird Funktion für Gegnerzug aufgerufen/ausgeführt
        } else {
            alert("Diese Karte kann nicht abgelegt werden. Du musst ziehen.")
            console.log("Karte kann nicht abgelegt werden. Spieler zieht & Computer ist dran."); 
        }
    }

function computerPlaysCard(){ // ähnliches Prinzip wie bei playCard() --> Vergleichen, ob eine Handkarte gelegt werden kann, dann entsprechende Aktion ausführen
    let playableCard : boolean = false; // Kann (bzw. konnte) Karte gelegt werden? Ja = true; nein = false!
    let topCard = discardPile[discardPile.length - 1];
    let firstDraw = drawPile[drawPile.length - 1];
    for(let i = 0; i < computerHand.length; i++){ // mit Schleife überprüfen, welche Karte gespielt werden kann
        if (computerHand[i].cardColor == topCard.cardColor || computerHand[i].cardNumber == topCard.cardNumber){
            topCard = computerHand[i];
            discardPile.push(topCard);
            computerHand.splice(i, 1);
            updateHTML();
            console.log(discardPile);
            console.log(computerHand);
            if (computerHand.length == 0) { // überprüfen, ob Computer gewonnen hat
                winOrLoss();
            } else {
                playableCard = true; // wichtig, um zu erkennen, dass Karte abgelegt werden konnte
            }
            break;
        }
        if(playableCard = false){ // d.h. Karte konnte nicht gelegt werden
            computerHand.push(firstDraw);
            drawPile.splice(drawPile.length-1,1);
            updateHTML();
            console.log("Computer hat eine Karte gezogen. Der Spieler ist wieder an der Reihe.")
        }
    }   
}

function drawCard(){ // Spieler kann eine Karte ziehen, soll oberste vom drawPile sein, daher length-1
    let drawnCard = drawPile[drawPile.length - 1];
        playerHand.push(drawnCard);
        drawPile.splice(drawPile.length - 1,1);
        updateHTML();
        console.log("Der Spieler hat eine Karte gezogen. (" + drawnCard.cardNumber + " " + drawnCard.cardColor + ")")
        console.log(playerHand);
        console.log(drawPile);
        computerPlaysCard();
}

function clearAllHTML(){ // wird noch in updateHTML() aufgerufen
    clearHTML();
    /*clearHTML("computer");
    clearHTML("player");
    clearHTML("draw");
    clearHTML("discard");*/
}

// Parameter cardClass greift auf die einzelnen Bereiche zu, die geleert werden sollen
function clearHTML() { // soll alle HTML-Elemente bei erneutem Drücken des Start-Knopfes löschen und neu einfügen
  /* let toBeCleared:HTMLElement = document.getElementById(cardClass);
   if(toBeCleared.hasChildNodes){
        while (toBeCleared.firstChild) {
            toBeCleared.removeChild(toBeCleared.firstChild);
        }
   }
}*/
    // Computerkarten leeren
    let computerHandHTML : HTMLElement = document.getElementById("computer");
    while (computerHandHTML.hasChildNodes()){
        computerHandHTML.removeChild(computerHandHTML.firstChild);
    }
    
    // Playerkarten leeren
    let playerHandHTML : HTMLElement = document.getElementById("player");
    while (playerHandHTML.hasChildNodes()){
        playerHandHTML.removeChild(playerHandHTML.firstChild);
    }
    
    // Kartenstapel leeren
    let drawPileHTML= document.getElementById("drawPile");
    while (drawPileHTML.hasChildNodes()){
        drawPileHTML.removeChild(drawPileHTML.firstChild);
    }
    // Ablagestapel leeren
    let discardPileHTML= document.getElementById("discardPile");
    while (discardPileHTML.hasChildNodes()){
        discardPileHTML.removeChild(discardPileHTML.firstChild);
    }
}

function winOrLoss () { // Spiel soll bei Gewinn von Spieler oder Computer wieder von vorne anfangen
    if(playerHand.length < 1) {
        alert("Du hast gewonnen! Möchtest du nochmal spielen?");
        playerHand = [];
        computerHand = [];
        discardPile = [];
        drawPile = [];
        let element = <HTMLInputElement> document.getElementById("start");
        element.disabled = false;
        updateHTML();
    } else if (computerHand.length < 1) {
        alert("Du hast verloren! Möchtest du es noch einmal versuchen?");
        playerHand = [];
        computerHand = [];
        discardPile = [];
        drawPile = [];
        let element = <HTMLInputElement> document.getElementById("start");
        element.disabled = false;
        updateHTML();
    }
}