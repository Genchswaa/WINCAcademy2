
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
Array.from(buttonAnimals).forEach((buttonAnimals) => {
    console.log(buttonAnimals.textContent)
});
//____________________________________________________________________
//____________________________________________________________________
// Instructie van de video. Ik wil een nieuwe list item maken.
let newAnimal = document.createElement('li');
console.log(newAnimal);

let newSpecies = document.createElement('spotted-animals-list');

let spottedAnimalsMenu = document.getElementById("spotted-animals-list").getElementsByTagName("ul")[0];
console.log(spottedAnimalsMenu);

newSpecies.appendChild(newAnimal);
console.log('aap', newSpecies);


// OPDRACHT 2:_______Verwijder elementen uit DOM

let parent = document.getElementById
//________________________________________________________________________
// Bij klik moet eend verdwijnen.
// maak eerst een variabele aan voor de knop (removeDuckButton)
const removeDuckButton = document.getElementById("remove-first-item-button");

// Check dit met de console.log
console.log(removeDuckButton); // ok check

// maak een variabele voor datgene wat je weg wil hebben.
const duckElement = document.getElementById("spotted-animals-list")

// check dit met de console.log
console.log(duckElement); // ok check

// Koppel een event aan de knop.
// in de function van het event zeg je wat het moet doen bij een klik.
//const donaldDuck = document.querySelectorAll("spotted-animals-list-item");

removeDuckButton.addEventListener('click', function(){
// In het event wordt hetgeen je weg wilt gekoppeld aan de functie remove
    duckElement.remove();
});

//___________________________________________________________________________

// Opdracht 3:______
const removeAllAnimals = document.getElementById("remove-all-button");
console.log(removeAllAnimals);
const listOfAllAnimals = document.getElementById("spotted-animals-list");
console.log(listOfAllAnimals);removeAllAnimals.addEventListener('click', function(){
    listOfAllAnimals.remove();
});