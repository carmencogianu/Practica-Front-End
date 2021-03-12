// 1. Scrieti o functie care sa protejeze emailul unui user de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

var emailHide = function (example) {
    var exampleSplit = example.split("@");
    firstElem = exampleSplit[0];
    secElem = exampleSplit[1];
    firstElemDotAt = firstElem.indexOf('.');
    if (firstElemDotAt == 1) {
        substrSurname = firstElem.substr(firstElemDotAt, firstElem.length - 1);
        return result = firstElem.replace(substrSurname, '...').concat('@').concat(secElem);
    } else {
        substrSec = firstElem.substr(3, firstElem.length);
        return result1 = firstElem.replace(substrSec, '...').concat('@').concat(secElem);
    }
}

// 2. Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string de ex: myFunction("i am superman") sa printeze "I Am Superman"

function capFirstLetter (text) {
    var textArr = text.toLowerCase().split(' ');
    for (var i = 0; i < textArr.length; i++) {
        var firstElem = textArr[i].split('');
        for (var j = 0; j < firstElem.length; j++) {
            firstElem[0] = firstElem[0].toUpperCase();
        }
        textArr[i] = firstElem.join('');
    }
    return textArr.join(' ');
}


// 3. Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function myFunction (examplesss) {
    var example = examplesss.split('');
    console.log(example);
    for (var i = 0; i < example.length; i++) {
        if (example[i] === example[i].toLowerCase()) {
        example[i] = example[i].toUpperCase();
        console.log(example[i]);
        } else {
        example[i] = example[i].toLowerCase();
        console.log(example[i]);
    }   
} return example[i] = example.join("");
}

// 4. Scrieti o functie care sa concateneze un string de cate ori ii zicem de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome

function concatStr (smth, x) {
    return result = smth.repeat(x);
}

// 5. A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function palindrome (str) {
    var str1 = "";
        for (var i = str.length - 1; i >= 0; i--) {
            str1 += str[i];
        } 
        if (str === str1) {
            return "The string is palindrome.";
        }
        return "The string isn't palindrome.";
}

// 6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
// Mai am de lucru la ex asta.
function biggestNumbers (arr) {
    for (var i = 0; i < arr.length; i++) {
        smallArr = arr[i];
        var biggest;
        for (var j = 0; i < smallArr.length; j++) {
            smallArr.sort(function(a, b) {
                return b - a;
            })
            console.log(smallArr[0]);
        }
    } 
}

// 7. Implementati o functie care face reverse la un string

function reverseString (example) {
    var firstStr = "";
    for (var i = example.length - 1; i >= 0; i--) {
        firstStr += example[i];
    }
    return firstStr;
}
// 8. Implementati o functie care calculeaza factorialul unui numar
function numberFact (n) {
    if (n == 0) {
        return 1;
    }
    return (n * factorialize(n - 1));
}

// 9. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma 
//aici presupun ca pot fi mai multe cazuri dar am luat numai unul
function checkArgs (firstArg, secArg) {
    var firstArgSplit = firstArg.split(' ');
    var lastArg = firstArgSplit.pop(); 
        if ( lastArg === secArg) {
            return "First arg ends with the second"
        } return "First arg doesn't end with the second"
}

// 10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat
// Si ex 10 mai trebuie sa il fac
// 11. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string
function checkLetters (first, second) {
    for (var i = 0; i < second.length; i++) {
        let x = false;
        for (var j = 0; j < first.length; j++) {    
            if (second[i] === first[j]) {
                x = true;
            }  
        }
        console.log(x)
    }
}
// 12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata
function arrCheck (arr, value) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (i === value) {
            return;
        }
    }
}
// 13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
function eliminateFalseSt (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === NaN ||  arr[i] === 0 || arr[i] === false || arr[i] === null || arr[i] === undefined || arr[i] === "") {
            arr.splice(i, 1);
            i = i-1;
        }
    }
    return arr;
}

// 14. Scrieti o functie care repeta un string de n ori specificate
function repeatString (n) {
    for (var i = 0; i < n; i++) {
        console.log("something");
    }
}