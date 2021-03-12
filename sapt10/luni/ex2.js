//1 
//Adaugati un tag script pentru a face legatura intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor si faceti un story din ele ex "Xulescu este innebunit dupa bere neagra"

const firstInput = document.getElementById('name');
const secondInput = document.getElementById('adjective');
const thirdInput = document.getElementById('random-word');

const postTheGossip = () => {
        const firstInputValue = firstInput.value; // name input's value
        const secondInputValue = secondInput.value; // adjective's input value
        const thirdInputValue = thirdInput.value; // random-word's input value
      
        const story = document.getElementById('story');
      
        // story.innerText = "text value"
        story.innerHTML = `${firstInputValue} ${secondInputValue} ${thirdInputValue}`;
      };

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', postTheGossip);


