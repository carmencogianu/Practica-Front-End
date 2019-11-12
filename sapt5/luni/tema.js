// 1.Scrieti o functie care verifica daca un input este sau nu de tip string. 

function isString (x) {
    return typeof x === 'string';
}

// 2.Scrieti o functie care verifica daca un string este gol sau nu.

function isBlank (str) {
    return str.length !== 0;
}

// 3.Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

function stringToArray (str) {
    return res = str.split(" ");
}

// 4.Scrieti o functie care transforma un string in forma abreviata:
// function abbrev_name (example) {
//     return abbvr = example.match(/[A-Z]/g).join('');
// }

function abbrevName (example) {
    var exampleArray = example.split(' ');
    var char = exampleArray.indexOf(1);
    var secElement = char[1];
    return secElement;
}

// 5.Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

function capitalize (firstLetter) {
    return firstLetter[0].toUpperCase() + firstLetter.slice(1);
}

// 6.Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

function charRemove (str) {
    return result = str.slice(7, str.length);
}

// 7.Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

function isUpperCaseAt (example, x) {
    return !!/[A-Z]/.exec(example[x]);
}

// 8.Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

function insertStr (firstStr, secondStr, n) {
    var firstStrLength = firstStr.length;
    console.log(firstStrLength);
    var removedStr = firstStr.substr(0, n);
    return result = removedStr + secondStr + " "+ firstStr.slice(n, firstStr.length);
}

// 9.Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// "The quick brown fox jumps over lazy dog"

//Not sure about this one :D
function removeFirstOccurence (str) {
    var firstOccurence = str.match("the");
    return arr = str.replace(firstOccurence , '');   
}

// 10.Scrieti o functie care compara doua string-uri case-insensitive:
// console.log(compare_strings('abcd', 'AbcD'));
// true

function compareStrings (firstString, secondString) {
    return areSimilar = firstString.toUpperCase() === secondString.toUpperCase();
}

// 11.Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

function unCapitalize (aString) {
    return aString.charAt(0).toLowerCase() + aString.slice(1);
}
