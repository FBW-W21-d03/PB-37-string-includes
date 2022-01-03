/*javascript-string-includes

## Aufgabenstellung - Teil 1
Schreibe eine Variable mit folgendem Zitat von Bjarne Stroustrup:*/

let zitat = "Ich habe mir immer gewünscht, dass mein Computer so leicht zu bedienen ist wie mein Telefon; mein Wunsch ging in Erfüllung: mein Telefon kann ich jetzt auch nicht mehr bedienen."

/* Aufgabenstellung - Teil 2
Verwende die Methode includes(), um zu prüfen, ob der Begriff "Telefon" enthalten ist.*/

let isZitat = zitat.includes("Telefon;")
console.log(isZitat)

/* Aufgabenstellung - Teil 3
Verwende die Methode includes(), um zu prüfen, ob der Begriff "Stroustrup" enthalten ist.*/

let isZitat1 = zitat.includes("Stroustrup")
console.log(isZitat1)