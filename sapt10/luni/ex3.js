//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

//3
// Bonus: faceti sa functioneze si la key press pe langa click


const square = document.getElementById('square');
const half = document.getElementById('half');
const firstPercent = document.getElementById('percent1');
const secondPercent = document.getElementById('percent2');
const area = document.getElementById('area')

// const eventHandlerBtn = () => {
//     const squareValue = square.value;
//     const halfValue = half.value;
//     const firstPercentValue = firstPercent.value;
//     const secondPercentValue = secondPercent.value;
//     const areaValue = area.value;

//     const solution = document.getElementById('sol');

//     solution.innerHTML = `${squareValue} ${halfValue} ${firstPercentValue} ${secondPercentValue} ${areaValue}`;
// };

const sqrNum = () => {
     const squareValue = square.value;
     alert(squareValue * squareValue);
}
const firstButton = document.getElementById('sqr-btn');
firstButton.addEventListener('click', sqrNum);

const halfNum = () => {
    const halfValue = half.value;
    alert(halfValue / 2);
}
const secondButton = document.getElementById('half-btn');
secondButton.addEventListener('click', halfNum)

const percentNum = () => {
    const firstPercentValue = firstPercent.value;
    const secondPercentValue = secondPercent.value;
    const firstNumber = (firstPercentValue / 100) * secondPercentValue;
    alert (firstNumber);
}
const thirdButton = document.getElementById('prc-btn');
thirdButton.addEventListener('click', percentNum);

const areaCircle = () => {
    const areaValue = area.value;
    alert(3.14 * (areaValue * areaValue));
}
const fourthButton = document.getElementById('area-btn');
fourthButton.addEventListener('click', areaCircle);
