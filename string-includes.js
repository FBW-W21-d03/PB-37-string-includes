// Aufgabe 1
let zitat = "Ich habe mir immer gewünscht, dass mein Computer so leicht zu bedienen ist wie mein Telefon; mein Wunsch ging in Erfüllung: mein Telefon kann ich jetzt auch nicht mehr bedienen."

// Aufgabe 2
// let isIncluded = Zitat.includes("Telefon");
// console.log(isIncluded);


// // Aufgabe 3
// isIncluded = Zitat.includes("Stroustrup");
// console.log(isIncluded);

function isIncluded (includes) { 

    if (zitat.includes(includes)) {
        console.log("includes: ", true);
    } else {
        console.log("includes: ", false);
    };

};

isIncluded("Telefon");

isIncluded("Stroustrup");