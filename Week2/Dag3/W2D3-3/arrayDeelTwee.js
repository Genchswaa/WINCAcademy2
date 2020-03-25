//A Functie moet item vinden en returnen op basis van value

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    let findSpiderMan = superheroes.find((superheroes) => {
            return superheroes.name === 'Spiderman';
    });
    console.log(findSpiderMan);
//_________________________
//B Array returnen met verdubbelde integers

// geef eerst een functie aan doubleArraysValue.
function doubleArrayValues(numbers){
    // Ik wil in de parameter de nummers verdubbeld hebben.
    // Ik maak een .method aan en ik wil dat deze de functie krijgt om
    // nummers * 2 terug te geven.
    return numbers.map(numbers => numbers * 2);
};
console.log(doubleArrayValues([1, 2, 3]));

// //________________________________________
// //C Array met integers. functie die checkt of integer > 10

function containsNumberBiggerThan10(numbersOfString){
    return numbersOfString.some(numbersOfString => numbersOfString > 10)
};
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

//__________________________________________
// D Kijken of Italy in de string aanwezig is.

function theGreatSeven(whereIsItaly) {
    return whereIsItaly.includes('Italy');
};

console.log(theGreatSeven(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));
//_____________________________________________
// E Array met integers
function tenFold(tenTimes){
    return tenTimes.map(tenTimes => tenTimes * 10);
};

console.log(tenFold([1, 4, 3, 6, 9, 7, 11]));
//________________________________________________
// F array met integers. Check of alle waardes onder 100 zijn.

function isBelow100(checkIfLowerThan100) {
    return checkIfLowerThan100.every(every => every < 100);
};

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));

//___________________________________________________
// G bonus
