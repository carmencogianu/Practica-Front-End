// 1. Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la
// iteratia numarul [index]” - Scrieti codul in doua variante(un exp cu for si unul cu while)

// for example
function loopExp (x) {
    if ( typeof x !== "number") { 
        return "Wrong arg";
    }
    for (i = 0; i < x; i++) {
    console.log("Sunt la iteratia: " + i + "<br>");        
    }
}

// while example
function loopSecExp (x) {
    var i = 0;
    if ( typeof x !== "number") {
        return "Wrong arg";
    }
    while (i < x) {
    console.log("Sunt la iteratia: " + i + "<br>");
    i++;    
    } 
}

// 2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
// Scrieti codul in doua variante(for, while)

// for example
var evenNr = [2, 4, 6, 8, 10]
function showElem (evenNr) {
    for (i = 0, len = evenNr.length; i < len; i++) {
        console.log("Elem de pe pozitia " + i +" este "+ evenNr[i]);
    }
}
showElem(evenNr);

// while example
var randomNr = [7, 42, 3, 74, 8, 6]
function showElemSec (randomNr) {
    var i = 0;
    while (i < randomNr.length) {
        console.log("Elem de pe pozitia " + i +" este "+ randomNr[i]);
        i++;
    }
}
// 3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
// scrieti codul in doua variante(for, while)

// for example
var user = {
    name: "Jane",
    gender: "female",
    age: 25
};
var objKeys = Object.keys(user);
var objKeysLength = objKeys.length; 
function firstObj (user) {
    for (i = 0; i < objKeysLength; i++) {
        console.log(user[objKeys[i]]);
     }
}

firstObj(user);

// while examample
var user = {
    name: "John",
    gender: "male",
    age: 25
};
var objKeys = Object.keys(user);
var objKeysLength = objKeys.length; 
function secondObj (user) {
    var i = 0;
    while (i < objKeysLength) {
        console.log(user[objKeys[i]]);
        i++;
    }
}

secondObj(user);

// Cerinte:
// 1. 0 100 200 300 400 500 600 700 800 900 1000
// 2. 1 2 4 8 16 32 64 128
// 3. 0 2 4 6 8 10
// 4. 3 6 9 12 15
// 5. 9 8 7 6 5 4 3 2 1 0
// 6. 1 1 1 2 2 2 3 3 3 4 4 4
// 7. 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// 1. 0 100 200 300 400 500 600 700 800 900 1000
function firstLoop (x) {
    if ( typeof x !== "number") { 
        return "Wrong arg";
    } var i = 0;
        while (true)
        {
        console.log(i * 10 + " oameni mai sunt in asteptare");
        i += 1;
        if (i == 11)
        {
        break;
        }
        }
}

