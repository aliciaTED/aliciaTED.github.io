/*interface Monster {
    Animal : string,
 
}*/

function greeter (surname: string, lastname: string) : void {
    let message = "Hallo, mein Name ist ";
    message += surname;
    message += " ";
    message += lastname;
    message += " "; 

    console.log(message)
}

function getRandomName() : string
{
    return;
}

// Funktionsaufruf
greeter ("Pingu", "Penguin")
greeter ("Leon", "Löwe")

let valueOne : number = 2
let valueTwo : number = 3

function calculateSum (age1 : number, age2 : number) : number {
 let calculateSum : number = valueOne + valueTwo
 return calculateSum
}

let Lion : Animal {
    let surname = "Leon", 
// Blablabla nicht mitgekommen, siehe Skript
}

/////////////////////////////Schleifen, die Code verkürzen/////////////////////////////////

let i : number = 0; // normalerweise in der Klammer definiert und dann nur dort verwendbar
let penguinTotal : number = 15

let names : string [] = ["Karl", "Heinz", "Karl-Heinz"]

for(let i : number = 0; i < names.length; i++) {      // in diesem Beispiel werden die zuvor bestimmten Namen abgearbeitet
    console.log("i = " + i + ", Name = " + names[1]);
}

// While-Schleife --> wird so lange ausgeführt, bis Bedingung nicht mehr erfüllt wird; kopfgesteuert
// while (condition) {
    // code block to be executed    
//}
while (i <= penguinTotal) {
    console.log("Hallo, ich bin Pingu Nummer" + i);
    i++; // mit jeder Zeile wird i erhöht. 
}

//Do-While-Schleife - fußgesteuert; ähnlich wie While-Schleife; Unterschied: wird mindestens einmal ausgeführt, bevor sie abbricht
do {
    console.log("Hallo, ich bin Pingo Numero " + i);
    i++;
}

var penguinsTotal : number = 15;
//for-Schleife
for (let i : number = 0; i <= penguinsTotal; i++) {
    console.log ("Hallo, ich bin Pingu Numero " + i)
}
