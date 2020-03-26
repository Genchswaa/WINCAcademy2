
// Onderstaande code voegt een functie toe aan alle knoppen met de class van big-five-button.
// 
const buttonAnimals = document.querySelectorAll(".big-five-button");
console.log(buttonAnimals);
console.log(Array.from(buttonAnimals));

// Met forEach een functie toevoegen aan elke knop buttonAnimals.
Array.from(buttonAnimals).forEach((buttonAnimals) => {
    buttonAnimals.addEventListener('click', function(){
        alert('TESTESTEST')
    });   
});
//____________________________________________________________________
//____________________________________________________________________
Array.from(buttonAnimals).forEach((buttonAnimals) => {
    console.log(buttonAnimals.textContent)
});



let newAnimal = document.createElement('li');
console.log(newAnimal);

let newSpecies = document.createElement('spotted-animals-list');

let spottedAnimalsMenu = document.getElementById("spotted-animals-list").getElementsByTagName("ul")[0];
console.log(spottedAnimalsMenu);

newSpecies.appendChild(newAnimal);
console.log(newSpecies);


// OPDRACHT 2:_______Verwijder elementen uit DOM
// Bij klik moet eend verdwijnen.

const removeDuckButton = document.querySelector(".remove-first-item-button");
console.log(removeDuckButton);
// removeDuckButton.addEventListener('click', function(){
 
// });

// node.remove();
// <li class="spotted-animals-list-item">Duck</li>