// 1.Scrieti o functie care verifica daca un input este sau nu de tip string. 
function is_string (x) {
    return typeof x === 'string';
}
// 2.Scrieti o functie care verifica daca un string este gol sau nu.
function is_blank (str) {
    return str.length !== 0;
}
// 3.Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
function is_blank (str) {
    return res = str.split(" ");
}
// 4.Scrieti o functie care transforma un string in forma abreviata:
// function abbrev_name (example) {
//     return abbvr = example.match(/[A-Z]/g).join('');
// }
// 5.Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
function capitalize (firstLetter) {
    return firstLetter[0].toUpperCase() + firstLetter.slice(1);
}
// 6.Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
// 7.Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
function isUpperCaseAt (example, x) {
    return !!/[A-Z]/.exec(example[x]);
}
// 8.Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
// 9.Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
// 10.Scrieti o functie care compara doua string-uri case-insensitive:
function compare_strings (firstString, secondString) {
    return areSimilar = firstString.toUpperCase() === secondString.toUpperCase();
}
// 11.Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
function unCapitalize (aString) {
    return aString.charAt(0).toLowerCase() + aString.slice(1);
}
