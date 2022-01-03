// AUFGABE TEIL 1:
const zitat ="Ich habe mir immer gewünscht, dass mein Computer so leicht zu bedienen ist wie mein Telefon; mein Wunsch ging in Erfüllung: mein Telefon kann ich jetzt auch nicht mehr bedienen.";

// AUFGABE TEIL 2:
let isIncluded = zitat.includes("Telefon");
console.log(isIncluded);

// AUFGABE TEIL 3:
let isIncluded1 = zitat.includes("Stroustrup");
console.log(isIncluded1)


// NEUE AUFGABE:
// Schreibe die Überprüfung in einer Funktion "check(searchWord)".
// Übergebe die Begriffe "Telefon" und "Stroustrup" als Argument

function check(searchWord) {
    
    let included2 = zitat.includes(searchWord);
    console.log("suchergebnis:", included2);

}

check("Telefon");
check("Stroustrup");


