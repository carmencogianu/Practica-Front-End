/* 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/

const fct = () => {
    alert("ai apasat pe buton.");
}
const b = document.getElementsByTagName('button')[0];

b.addEventListener('click', fct);

/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/
const textInputEventHandler = () => {
    alert("Textul din input a fost schimbat.");
}
const textInp = document.getElementsByTagName('input')[0];

textInp.addEventListener('change', textInputEventHandler);
/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/
const cameleonEventHandler = () => {
    p.style.color = changeColor();
}
const p = document.getElementsByTagName('p')[0];

function changeColor () {
    return '#' + Math.floor(Math.random() * (256*256*256)).toString(16);
}


window.onkeydown = function(){
    cameleonEventHandler();
}