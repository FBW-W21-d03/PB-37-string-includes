// Aufgabe 1


let articel = "Ich habe mir immer gewünscht, dass mein Computer so leicht zu bedienen ist wie mein Telefon; mein Wunsch ging in Erfüllung: mein Telefon kann ich jetzt auch nicht mehr bedienen.";


// Aufgabe 2

let isIncluded = articel.includes("Telefon");

console.log(isIncluded);


// Aufgabe 3
let isIncluded1 = articel.includes("Stroustrup");

console.log(isIncluded1);


// Aufgabe 4


let zitat = "Ich habe mir immer gewünscht, dass mein Computer so leicht zu bedienen ist wie mein Telefon; mein Wunsch ging in Erfüllung: mein Telefon kann ich jetzt auch nicht mehr bedienen.";

 
function check(searchWord) {
  let included2 = zitat.includes(searchWord);
  console.log("Suchergebnis:", included2);
}
check("Telefon");
check("Stroustrup");
