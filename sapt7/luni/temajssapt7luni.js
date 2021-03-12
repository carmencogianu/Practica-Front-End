// Cerinte:
// Observatii: - inainte de a scrie o linie de cod, specificati un comentariu in care spuneti exact procedura pe care o urmati (ex: “declar functia
// de tip named / function expression care accepta argumentele…, declar variabila x, fac comparatia y si verific daca z, samd… ); chiar daca nu duceti o functie pana la capat, atasati codul cu comentarii pana la linia la care v-ati oprit;

// 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for

// for 
// declar functia de tip named function 
function evenOrOdd () {
    for (var i = 0; i < 21; i++) {
        // verific daca i este par si afisez mesajul corespunzator
        if ( i % 2 === 0) {
            console.log(i + " este numar par");
        } else {
            console.log(i + " este numar impar");
        }
    }
}

// while
// declar functia de tip named function 
function evenOrOddW () {
    // declar variabila i si ii atribui valoarea 0
    var i = 0;
    // cat timp i<21
    while (i < 21) {
         // verific daca i este par si afisez mesajul corespunzator
        if ( i % 2 === 0) {
            console.log(i + " este numar par");
            i++;
        } else {
            console.log(i + " este numar impar");
            i++;
        }
    }
}

// 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
// rezultatul. (exemplu: “3*9=27”).
//  Scrieti functia in doua variante: while si for

// for
// declar functia de tip named function 
function multiplyByNine () {
    //pentru i=0 pana la i=10 se afiseaza rezultatul i*9
    for (i = 0; i < 11; i++) {
        console.log(i*9);
    }
}

// while
// declar functia de tip named function 
function multiplyByNineW () {
    //declar variabila i si ii atribui valoarea 0
    var i = 0;
    //cat timp i<11 se afiseaza rezultatul i*9
    while (i < 11) {
        console.log(i*9);
        i++:
    }
}

//  3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
// (exemplu: 1 * 0 = 0
//  1 * 1 = 1
//  …
//  1 * 10 = 10 )
// Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.

// declar functia de tip named function 
function multiplyEachNr (x) {
    //pun conditia ca datele introduse sa fie de tip number iar in cazul in cafre nu sunt se afiseaza mesajul "Wrong argument!"
    if (typeof x !== "number") {
        return "Wrong argument!"
    }
    //pentru i=1 pana la 1=10 se afiseaza i*x
    for (i = 1; i < 11; i++) {
            console.log(i * x + " \n");
    }
}

// 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
// poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
// calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
// dezvoltate la tema anterioara ! 

var grade = function () {
    // Am luat fiecare caz in parte, mai precis l-am comparat pe x cu fiecare valoare si in functie de caz a afisat mesajul corespunzator.
    // In cazul in care datele introduse nu se incadreaza in nici un caz se afiseaza mesajul default.
   for (i = 1; i < 11; i++) {
    switch (i) {
        case 1 : console.log("Pentru " + 1 + " obtii calificativul E");
        break;
        case 2 :console.log("Pentru " + 2 + " obtii calificativul E");
        break;
        case 3 : console.log("Pentru " + 3 + " obtii calificativul E");
        break;
        case 4 :console.log("Pentru " + 4 + " obtii calificativul D");
        break;
        case 5 :console.log("Pentru " + 5 + " obtii calificativul D");
        break;
        case 6 :console.log("Pentru " + 6 + " obtii calificativul D");
        break;
        case 7 :console.log("Pentru " + 7 + " obtii calificativul B");
        break;
        case 8 :console.log("Pentru " + 8 + " obtii calificativul B");
        break;
        case 9 :console.log("Pentru " + 9 + " obtii calificativul A");
        break;
        case 10 :console.log("Pentru " + 10 + " obtii calificativul A");
        break;
        default :
            return "Not a grade!";
    }
    }
}
console.log(grade(1));