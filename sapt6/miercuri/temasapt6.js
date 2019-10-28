// Nu aveti voie sa folositi console.log in corpul functiilor, ci doar in afara lor !

// - Se va lua in considerare si utilizarea de nume sugestive pentru functii, parametri, variable.


// - Fiecare functie trebuie sa fie precedata de un comentariu pe mai multe linii in care veti descrie sub forma de pseudocod logica functiei

// 1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

function checkGender (x) {
    // Pentru inceput am pus conditiile ca datele introduse sa fie de tip number si numarul de caractere introdus sa fie de 13.
    if ( typeof x === "number" && x.toString().length === 13) {
        // Am transformat numarul in string, am luat caracterul de pe prima pozitie, am transformat din nou string-ul in numar si am stocat valoare in variabila firstDigit.
        var firstDigit = Number(x.toString()[0]);
        // Am verificat daca cifra stocata in variabila de mai sus este para; daca este para afiseaza mesajul "Persoana verificata este de sex feminin" daca nu, afiseaza mesajul "Persoana verificata este de sex Masculin".
        if (firstDigit % 2 === 0) {
            return "Persoana verificata este de sex feminin";
        } else  {
            return "Persoana verificata este de sex Masculin";
        } 
    }
    // In cazul in care datele introduse nu indeplinesc conditiile de mai sus afiseaza mesajul "Datele introduse nu sunt corecte";
    else {
        return "Datele introduse nu sunt corecte";
    }
}
console.log(checkGender(1234567891234));

// 2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var grade = function (x) {
    // Am pus conditia ca datele introduse sa fie de tip number, in caz contrar sa afiseze mesajul "Wrong argument!".
    if (typeof x !== "number") {
        return "Wrong argument!"
    }
    // Am luat fiecare caz in parte, mai precis l-am comparat pe x cu fiecare valoare si in functie de caz a afisat mesajul corespunzator.
    // In cazul in care datele introduse nu se incadreaza in nici un caz se afiseaza mesajul default.
    switch (x) {
        case 1 : return "E";
        break;
        case 2 : return "E";
        break;
        case 3 : return "E";
        break;
        case 4 : return "D";
        break;
        case 5 : return "D";
        break;
        case 6 : return "D";
        break;
        case 7 : return "B";
        break;
        case 8 : return "B";
        break;
        case 9 : return "A";
        break;
        case 10 : return "A+";
        break;
        default :
            return "Not a grade!";
    }
}
console.log(grade(7));
// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. Una dintre implementari trebuie sa fie bazata pe Object Literals ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )

// 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var cars = [
//   {name: "John",  salary: 20000 },
//   { name: "Danny", salary: 30500 },
//   { name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat

 var cars = [
    { name: "John",  salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
    ]; 
 (function sortSomething (cars) {   
     cars.sort(function (a, b) {
         return a.salary - b.salary;
     }); 
    console.log(cars)
     
 })(cars);
// Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.
