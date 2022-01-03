// string-includes
let myString = "Welcome in 2022!".includes("Welcome");
let doesContain = "Hello World".includes("Worth");
console.log(doesContain);
console.log(myString);

let employees = ["Bob" , "Chuck" , "Sam" , "Peter"];
let isEmployeed = employees.includes("Sam");
console.log("ist eingestellt: " , isEmployeed);

let article = "blabla bla blubb, bla  blubb blubber blubb";
let isIncluded = article.includes("bla");
console.log(isIncluded);

console.log("----------------------------------------")

// aufgabe1 -Schreibe eine Variable mit folgendem Zitat von Bjarne Stroustrup:

let article2 = "Ich habe mir immer gewünscht, dass mein Computer so leicht zu bedienen ist wie mein Telefon; mein Wunsch ging in Erfüllung: mein Telefon kann ich jetzt auch nicht mehr bedienen.";
console.log("aufgabe1: " , article2);

// aufgabe 2 -Verwende die Methode includes(), um zu prüfen, ob der Begriff "Telefon" enthalten ist.

let isIncluded2 = article2.includes("Telefon");
console.log("aufgabe2: " , isIncluded2);

// aufgabe 3 -Verwende die Methode includes(), um zu prüfen, ob der Begriff "Stroustrup" enthalten ist.

let isIncluded3 = article2.includes("Stroustrup");
console.log("aufgabe3: " , isIncluded3);

isIncluded3 = article2.includes("schnibbeldibbel");
console.log("testest: " , isIncluded3);


console.log("-------------NEU-----------------------")

function check(searchWord){
    let included = article2.includes(searchWord);
    console.log("Ergebnis: " , included)
}
check("Telefon");
check("Stroustrup");