// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.

// EINGEBAUTE FEHLER: Innerhalb jedes Programmteiles wurden ein paar fiese Fehler eingebaut!
// Diese werden vermutlich erst in der Browser-Konsole angezeigt. 
// Testet also alle Funktionen, jeden Button welchen ihr finden könnt!
// Hilfe: Benutzt auf Verdacht ein Konsolen-Log oder ruft die Variable in der Konsole des Browsers auf.
// Hilfe2: Betrachtet den umliegenden Code. Trackt die Werte von Variablen, falls euch etwas komisch vorkommt!

// ------- interfaces --------- //
// INSGESAMT EINGEBAUTE FEHLER bei den interfaces: Keine. (0 / null)

// Monster sind vielfältig und können sehr unterschiedlich sein. Dennoch werden sie durch allgemeine Attribute, wie Name und Lebenspunkte, vereint.
// Deshalb wird hier ein interface genutzt!ss
// Ein interface erlaubt das Erstellen von einem ungefährem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen

interface Monster {
    monsterName : string; // Name des Monsters
    monsterHealthPoints : number; // Lebenspunkte
    monsterExperience : number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier : string []; // Monster-Verstärker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall für die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    monsterAttack: string; // Monsterattacke
    monsterFave: string; // Etwas, dass das Monster wirklich liebt
    monsterImage: string;
    monsterLevel: number // Level des Monsters, soll von 0 - 10 gehen
}


// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer) gefunden 1/1

let monsterHolder : string = "monsterHoldingCell"; // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.

let playerName : string = "Spielername"; // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP : number = 0; // Stellt die gesammelte Erfahrung des Spielers dar. FEHLER: Variable wurde nicht genauer definiert, Aufaddierung daher nicht möglich.
let playerXPperLevel : number = 500; // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
let playerLevel : number = 1 // Player-Level startet bei Level 1

// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix : string[] = ["Wald-", "Seuchen-", "aus der Steinzeit stammende/r/s ", "Gift-", "Flammenwerfende/r/s ", "Kniescheibenzertrümmernde/r/s ", "unsichtbare/r/s "]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName : string[] = ["Motte", "Schnabeltier", "Axolotl", "Anglerfisch", "Liger"]; // length = 5, da 5 Einträge. Von 0-4.
let suffix : string[] = [" des Verderbens", " aus der Hölle", " der Lethalität", " aus den wilden Wäldern", " des Krafmaga", " der Zerstörung", " deiner schlimmsten Albträume", " der fallenden Engel"]; // length = 6, da hier 6 Einträge sind. Von 0-5.

let monsterModifers : string[] = ["Linkshänder", "hat Pollenallergie", "würde alles für Schokolade tun", "braucht alle drei Stunden einen Mittagsschlaf", "hat panische Angst vor der Farbe Pink", "kann keiner Fliege etwas zu Leide tun", "Verfehlt häufig", "Prokrastiniert", "Wasserscheu", "Bipolar", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterAttack: string[] = ["Speiender Feuerball", "Zerschneidende Kralle", "Haaaaii-ja!", "Hypnose der Gefühle", "Explodierender Matschhaufen", "Jäher Zorn"] // Attacke der Monster
let imgsrc: string[] = ["Motte.jpg", "Schnabeltier.png", "Axolotl.png", "Anglerfisch.png", "Liger.png"]; // Bildquellen für Generierung der Monster
let monsterFave: string [] = ["Brokkoli", "Schokolade", "verregnete Sommertage", "Gewitter", "Kaugummi", "Briefe jeglicher Art", "Nachtspaziergänge durch den Wald"]
let Monsters: any[] | string[] = [];
let monsterLevel: number [];

// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray : Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray ); // Gebe das Monster-Array einmal zu Beginn aus. Es sollte leer sein.


// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf), gefunden 5/5

// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    console.log("" + document.getElementById("monsterSpawner").innerHTML); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt. FEHLER: console.log war nicht in der window.onload function! 
    document.getElementById("allMonsters").addEventListener("click", fightallMonsters);
    document.getElementById("weakMonsters").addEventListener("click", fightallweakMonsters);
    document.getElementById("weakestMonster").addEventListener("click", fightweakestMonster);
    updatePlayerLevel(0);
    document.getElementById("ArrayPush").addEventListener("click", pushpush);
}

// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() // NEU: soll eine zufällige Monsteranzahl von 1 - 3 erzeugen
{   
    let multipleMonsters = 1 + getRNGNumber(2) + 1;
    for(let i : number = 0; i < multipleMonsters; i++) {

    let newMonsterName : string = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurück gibt.
    let newMonsterHP : number = generateMonsterHitPoints();             // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterXP : number = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterModifier : string [] = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
    let newMonsterAttack : string = generateMonsterAttack();
    let newMonsterFave : string = generateMonsterFave();
    let newMonsterImage : string = generateMonsterImage();
    let newMonsterLevel : number = getRNGNumber(11);

    let newMonster : Monster = {                                      // Monster wird erstellt.
        monsterName : newMonsterName, 
        monsterHealthPoints : newMonsterHP,
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
        //monsterMoney : 0,                                                FEHLER: Geld der Monster wurde nirgends definiert --> exisitiert nicht?!
        monsterAttack : newMonsterAttack,
        monsterFave : newMonsterFave,
        monsterImage : newMonsterImage,
        monsterLevel : newMonsterLevel,
        };
    
    monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefügt
    
    console.log(monsterArray[monsterArray.length - 1].monsterExperience); // FEHLER: length war nicht definiert, hätte man auch einfach durch 0 ersetzen können oder komplett löschen // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
}
    updateHTML();                                                        // Triggere das Updaten von HTML
}

function updateHTML () {
    clearMonsterCell();
    monsterGenerateHTMLAII();
    getMonsterCount();
}

function clearMonsterCell () { // Soll sich "monsterHoldingCell" raussuchen und alle KindElemente davon entfernen --> hilfreich: childNode & firstChild
    let monsterCell = document.getElementById("monsterHoldingCell");
    if(monsterCell.hasChildNodes) { // auf ChildNodes (Kindelemente) überprüfen & entsprechende Funktion ergänzen bzw. was passieren soll
        while (monsterCell.firstChild) {
            monsterCell.removeChild(monsterCell.firstChild) // somit lassen sich alle Kindelemente löschen // Anmerkung: mit ChildNode können auch Listen von allen Kindelementen erstellt werden
        }
    }
    console.log("MonsterCell geleert.")
}

function getMonsterCount() { // gibt tatsächliche Anzahl der Monster aus
    return monsterArray.length;
}

function fightallMonsters() {
    for (let i = monsterArray.length - 1; i >= 0; i--) // Array-Länge von hinten durchgehen, um Verschiebungen zu vermeiden
    {
        fightMonster(i);
    }
}

function fightallweakMonsters() {
    for (let i = monsterArray.length - 1; i >= 0; i--)
    {
        if(playerLevel >= monsterArray[i].monsterLevel){
            fightMonster(i);
        }
    }
}

function fightweakestMonster() {
    let _indexweakest: number = 0;
    let findWeakest: number = monsterArray[0].monsterLevel;
       for (let i = monsterArray.length - 1; i >= 0; i--)
       {
            if (monsterArray[i].monsterLevel < findWeakest){
            _indexweakest = i;
            findWeakest = monsterArray[i].monsterLevel;
            }
        }
        let weakestMonster = monsterArray[_indexweakest].monsterName;
        console.log(weakestMonster + " ist das schwächste Monster! Greif es an!")
        fightMonster(_indexweakest);
}

function monsterGenerateHTMLAII () { // neue Funktion mit Schleife
    for(let i : number = 0; i < monsterArray.length; i++) {
    monsterGenerateHTML(i); // muss sich auf "i" beziehen, damit Aussage nach console.log Sinn ergibt (Du hast 1 Monster gefunden --> Anzahl der Monster 1.)
    }
}

// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(count : number) // Operator soll erstellt werden, aber wie?!
{  
    let holdingDiv : HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + count);     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster");                        // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"

    let monsterName : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterName.innerHTML = monsterArray[count].monsterName; // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterMod : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[count].monsterModifier[0] + ", " +  monsterArray[count].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterImg : HTMLElement = document.createElement("img");      // Erstelle ein <img>-Element
    monsterImg.setAttribute ("src", "imgs/" + monsterArray[count].monsterImage);                 // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster");            // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg);                                 // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)

    let monsterLvl : HTMLElement = document.createElement("p");
    monsterLvl.innerHTML = "Level " + monsterArray[count].monsterLevel;
    holdingDiv.appendChild(monsterLvl);

    let monsterHP: HTMLElement = document.createElement("p");
    monsterHP.innerHTML = "HP " + monsterArray[count].monsterHealthPoints;
    monsterHP.style.backgroundColor = "#02a310d0";
    monsterHP.style.width = monsterArray[count].monsterHealthPoints + "%";
    holdingDiv.appendChild(monsterHP);

    let monsterXP : HTMLElement = document.createElement("p");
    monsterXP.innerHTML = "XP: " + monsterArray[count].monsterExperience;
    holdingDiv.appendChild(monsterXP);

    let monsteratt : HTMLElement = document.createElement("p");
    monsteratt.innerHTML = "Attacke: " + monsterArray[count].monsterAttack
    holdingDiv.appendChild(monsteratt)

    let monsterfav : HTMLElement = document.createElement("p");
    monsterfav.innerHTML = "Mag: " + monsterArray[count].monsterFave
    holdingDiv.appendChild(monsterfav);

    let monsterBtn : HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn);                                 // Füge den Button zu dem holding-div hinzu.

    let monsterCount : number = count;                    // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);


    monsterBtn.addEventListener(                                       // Füge dem Monster eine Funktion hinzu.
        'click', function() {                                           // Wird bei Maus-Click ausgelöst.
            fightMonster(count);                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);                                                      // Ignoriert das false.
}

// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber : number) : number
{
    return Math.floor (Math.random() * _maxNumber);
}


// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monstergenerierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName() : string // string hintendran heißt, dass man in den Funktionen auf Variablen zugreift bzw. die Funktion selbst eine Variable ist (?) und man somit Namen per Zufallsprinzip generieren kann.
{ 
    let generatedMonsterName : string = ""; // Erstelle einen leeren String für das Monster

    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber : number = getRNGNumber(prefix.length);               // rngNumber = Random Number // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                     // FEHLER: Monstername muss mit rngNumber ausgewählt werden, nicht mit 0! // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen (dafür nötig: +=): nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}


// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints() : number
{
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 50) + 1 zurück.
    let tempMonsterHP : number = 1 + getRNGNumber(50); 
    return tempMonsterHP;
}


// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP() : number
{
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP : number = 200 + getRNGNumber(500); // Erfahrungspunkte des Monsters erhöht.
    return tempMonsterXP;
}


// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer() : string[]
{
    let tempMonsterMod : string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}

function generateMonsterAttack()
{
    let rngNumber = getRNGNumber(monsterAttack.length);
    return monsterAttack[rngNumber];
}

function generateMonsterFave()
{
    let rngNumber = getRNGNumber(monsterFave.length);
    return monsterFave[rngNumber];
}

function generateMonsterImage() {
    let rngNumber = getRNGNumber(imgsrc.length);
    return imgsrc[rngNumber];
}
 
// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte. Wie ändere ich die Reichweite dieser Erfahrungspunkte?? 
function fightMonster(_index : number)
{
    let monsterLevel:number = monsterArray[_index].monsterLevel;
    console.log("Fighting Monster of Level " + monsterLevel);
    if(monsterLevel <= playerLevel)
    {
        monsterArray[_index].monsterHealthPoints -= 10;
        playerXP += monsterArray[_index].monsterExperience;
        updateHTML()
        
        if(monsterArray[_index].monsterHealthPoints < 1)
        {
            console.log("Spieler kämpft gegen Monster und gewinnt!");
            updatePlayerLevel(0 + monsterArray[_index].monsterExperience);
            monsterArray.splice(_index, 1);
            updateHTML();
        }
    }
    else if(monsterLevel > playerLevel) 
    {
        console.log("Das Monster weigert sich zu verschwinden.");
        updatePlayerLevel(0 - monsterArray[_index].monsterExperience);
    }
}
// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel(XPchange : number) // jetzt muss für jede update-Player-Level-Funktion ein Argument folgen!!!
{                                                
    playerXP += XPchange;   
    if (Math.floor(playerXP / playerXPperLevel) + 1 >= 1) // math.floor = rundet auf kleinere Zahl ab / Spieler-Level = XP / XPproLevel, keine Veränderung für größere Reichweite
    {
        playerLevel = Math.floor(playerXP / playerXPperLevel) + 1; // damit nicht bei 0 angefangen wird (LEVEL DARF NICHT UNTER 1 GEHEN)
    }

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + playerLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")" // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + playerLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.
    
    if(playerLevel == 20){
        alert("Du hast GENAU Level 20 erreicht und somit gewonnen! Jetzt kannst du von vorne anfangen.");
        playerLevel = 1;
        playerXP = 0;
        monsterArray = [];
        updatePlayerLevel(0);
        updateHTML();
    }    
}

// Funktion zum Pushen
function pushpush() {
    Monsters.push("Monster");
    console.log(Monsters);
}