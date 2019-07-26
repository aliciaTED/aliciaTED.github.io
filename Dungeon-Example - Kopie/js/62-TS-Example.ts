var i : number =5;
var n : number =-1;
var j : number = 0;
var elems: string []= ["dog", "weasel", "lazy", "black", "the", "star", "over", "jumps",
"left", "for", "sparkling", "brown", "false", "quick", "donut", "the", "coffee", ",",
"bogort", "humhrey", "I"];

for (var I : number = elems.length - 1; i>n; i-=2){
    j+=1;
    console.log("Ausgabe" + j + "i" + elems[i]);
}

interface Parkplatz {
    Bezeichnung: string;
    Reihen: number;
    StellplatzProReihe: number;
}

let Bezeichnung = ["I", "G", "A"];
let Reihen = 6;
let StellplatzProReihe = 10;

function StellplätzeGesamt(){
    for(let k : number = 0; k < Bezeichnung.length; k++){
        let StellplätzeGesamt : number = Reihen * StellplatzProReihe
        console.log("Anzahl der Stellplätze bei " + Bezeichnung[k] + " beträgt " + StellplätzeGesamt);
    }
}
  
function StellplätzeZuJahreszeiten (Jahreszeit : string, Bezeichnung : Parkplatz) {
    if (Jahreszeit == "Winter"){
        StellplatzProReihe -= 2;
        let StellplätzeGesamt = Bezeichnung.StellplatzProReihe * Bezeichnung.Reihen;
        console.log ("Im Winter sind beim " + Bezeichnung.Parkplatz + StellplätzeGesamt + " vorhanden.")
    }
    else if (Jahreszeit == "Herbst" || Jahreszeit == "Frühling"){
        StellplatzProReihe -= 1;
        let StellplätzeGesamt = StellplatzProReihe * Reihen;
        console.log("Im Herbst/Frühling sind beim " + Bezeichnung.Parkplatz + StellplätzeGesamt + " vorhanden.")
    }
    else {
        let StellplätzeGesamt = StellplatzProReihe * Reihen;
        console.log("Im Sommer sind beim" + Bezeichnung.Parkplatz + StellplätzeGesamt + " vorhanden.")}
}