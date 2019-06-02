/*let monsterName0 : string = "Karl" // bei Programmieren wird mit 0 angefangen, da das die kleinste darstellbare Zahl ist
let monsterName1 : string = "Rüdiger"
let monsterName2 : string = "Frederic"*/

//kompaktere Schreibweise für obere Anzeige (Array)
/*let monsterName : string [];
monsterName[0] = "Karl"
monsterName[1] = "Rüdiger"
monsterName[2] = "Frederic"
monsterName[3] = "Heinz"*/

//noch kompaktere Schreibweise:
let monsterName = ["Karl", "Rüdiger", "Frederic", "Heinz"] //Array; wird mit let monsterName[x] auf x begrenzt
console.log(monsterName.length) //Ausgabe der Anzahl der Elemente des Arrays

/*let monsterHitPoints0 : number = 5
let monsterHitPoints1 : number = 7
let monsterHitPoints2 : number = 18*/
 

let monsterHitPoints = [5, 10, 8, 10]

function getMonsterData(){
    console.log("Monster 0 " + monsterName[0] + " hp: " + monsterHitPoints[0]);
    console.log("Monster 1 " + monsterName[1] + " hp: " + monsterHitPoints[1]);
    console.log("Monster 2 " + monsterName[2] + " hp: " + monsterHitPoints[2]);
    console.log("Monster 3 " + monsterName[3] + " hp: " + monsterHitPoints[3]);
    console.log("Monster 4 " + monsterName[4] + " hp: " + monsterHitPoints[4]);
}

function pushMonster()
{ 
    let newName = "Newbie";
    monsterName.push(newName) // push = Array vergrößern; pop = Array verkleinern

    let newHitPoints /*: number */ = 11
    monsterHitPoints.push(newHitPoints)

}

/*let penguin : Monster = {
    name: "Pingu"
    age: 2
    food: ["Seelachs", "Dorade", ]
}*/