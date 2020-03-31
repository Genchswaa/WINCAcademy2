

// Rest staat gelijk aan een hele array.
// ...numbers zorgt ervoor dat alle cijfers bij elkaar worden opgeteld.
// Ik maak een functie aan met argument ...numbers.
function manyNumbers(...numbers) {
    //Reduce itereert en de functie telt de vorige bij de huidige op.
    return numbers.reduce(function(prev, current) {
        // Ik wil prev en current returnen.
        return prev + current;
    })
};
//Ik log de functie en de cijfers die ik wil optellen
console.log(manyNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//_________________________________________

// Spread doet het tegenovergestelde (wel zelfde syntax!__...nummers)
// Nummers staan al in array. Deze array ga ik bij elkaar optellen.
function sum(a, b, c, d, e){

    return a + b + c + d + e;
};
let nummers = [1, 2, 3, 4, 5];
// In de console log komt dus -- ...(variabele van de let nummers array)
console.log(sum(...nummers));

// bij spread staat de data meer vast. 
