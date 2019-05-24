console.log("Test, Test...");
// Terminal > run task > watch (jedes Mal beim 1. Mal öffnen)
window.onload = function () {
    console.log("Website wurde geladen"); /* wird bei "Untersuchen" im Console-Bereich angezeigt*/
    document.getElementById("erste").addEventListener("click", Klassenänderung); //Klasse des ersten Paragraphs wird geändert
    document.getElementById("zweite").addEventListener("click", MehrText); //zweiter Paragraph wird mit etwas Text ergänzt
    document.getElementById("greenbutton").addEventListener("click", neuerKnopf); // zweiter Button
    document.getElementById("redbutton").addEventListener("click", Warnung); // red button 
    document.getElementById("Danke").addEventListener("click", Befreiung); //test button
}

function Klassenänderung () {
    console.log("Ups, da hat wohl jemand die Klasse gewechselt.");
    document.getElementById("erste").className = "Neue Klasse";
}

function MehrText () {
    document.getElementById("zweite").innerHTML = "Naja, dieser Knopf hier ist zwar nicht rot, aber du solltest ihn trotzdem NICHT klicken."
}

function neuerKnopf () {
    document.getElementById("greenbutton").style.color = "green";
    document.getElementById("greenbutton").outerHTML = "Ich bin frei! ヽ(*o*)ノ";  // button verschwindet und Text wird normal angezeigt
    console.log("Gut gemacht, du hast den Smiley befreit!")
}

// Rechnung in Funktion "Warnung" einbegriffen
function Warnung () {
    alert("Ich sagte doch, dass du NICHT klicken sollst! (╯°□°）╯︵ ┻━┻");
    document.getElementById("redbutton").style.color = "red";
    console.log("Hey, jetzt ist der Knopf ja doch rot! Und du hast eine (sinnfreie) Rechnung ausgelöst...");
    let Farbe = "rot";
    let Farbe2 = "grün";
    let number1 = "12"
    let number = "1"
    number = "3" // neuen Wert zu bereits deklarierten Variable zugeordnet (?)
    console.log(Farbe + Farbe2);
    console.log(Farbe + number1)
    console.log(Farbe2 + number)
    console.log (number1 + number)
}


function Befreiung (){ // hier wird ein neues HTML-Element erstellt (--> Paragraph)
    let newPara = document.createElement("p"); // Angabe, welches HTML-Element erstellt werden soll
    let position = document.getElementById("Warnung"); // in welchem Bereich soll das neue Element auftauchen? (siehe IDs)
    position.appendChild(newPara);
    newPara.innerHTML = "Danke, dass du den Smiley befreit hast!"; // nacheinander oder untereinander
    console.log("Kleines (undendliches) Dankeschön.");
}