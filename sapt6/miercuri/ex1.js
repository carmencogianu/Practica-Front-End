// 1. Scrieti o functie de tip named function denumita greatestNrBetween care:
// - Primeste ca argumente doua numere
// - Returneaza numarul care este mai mare
// Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“
function greatestNrBetween (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return "wrong arg";
    }; 
    if (x > y) {
        return "Numarul mai mare dintre " + x + " si " + y + " este " + x;
    } else if (x < y) {
        return "Numarul mai mare dintre " + x + " si " + y + " este " + y;
    } else {
        return "Numerele sunt egale";
    };
}

// 2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
// - Primeste ca argument codul unei limbi: “en”, “es”, “de”
// - Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
// - Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
// Apelati functia pentru fiecare caz in parte.
var helloWorldInLang = function (a) {
    if (typeof a !== "string") {
        return "wrong arg";
    }
    switch (a) {
        case "en": return "Hello world";
        break;
        case "es": return "Ola"
        break;
        case "de": return "Hallo"
        break;
        default : "Hello world";
    }
}

// 3. Scrieti o functie numita pluralizeWord care:
// - accepta doua argumente: un substantiv in engleza si un numar
// - returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
// - adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 
function pluralizeWord (word, n) {
// daca nr e egal cu 1 returnam cuvantul 
// daca e >1 returnam cuvantul +s
// daca cuv e egal sheep ,goose returnam sheep,geese,mice
if (n === 1) {
    return word;
} else if (n !== 1) {
    return word + 's';
} else if (word === "sheep" && word === "goose") { //nu-i bun, mai trebuie sa faci inca 3 if-uri
    return "special cases";
}
}

// 4. Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
// corespunzatoare considerand urmatoarele criterii:
// - daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
// - daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
// - pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
// Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de
// y”

function anualIncome (x) {
    if (x <= 30000) {
        var y = x * (0/100);
        return "Pentru un venit anual de " + x + ", aveti de platit taxe in valoare de " + y;
    } else if (50000 < x < 99999) {
        var y = x * (35/100);
        return "Pentru un venit anual de " + x + ", aveti de platit taxe in valoare de " + y;
    } else if (x > 100000) {
        var y = x * (40/100);
        return "Pentru un venit anual de " + x + ", aveti de platit taxe in valoare de " + y;
    }
}

// 5. Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
// afiseaza:
// - AA if points is greater than 90
// - AB if points is greater than 80 and less than or equal to 90
// - BB if points is greater than 70 and less than or equal to 80
// - BC if points is greater than 60 and less than or equal to 70
// - CC if points is greater than 50 and less than or equal to 60
// - CD if points is greater than 40 and less than or equal to 50
// - DD if points is greater than 30 and less than or equal to 40
// - FF if points is less than or equal to 30