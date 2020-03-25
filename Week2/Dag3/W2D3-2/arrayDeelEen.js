
// A cool toevoegen met push______________________________
const arrayWithWords = ["nice","awesome","tof"];

	arrayWithWords.push('cool');

console.log(arrayWithWords);

// B Elementen retourneren__________________________
let amountOfElementsInArray = ['appels', 'peren', 'citroenen'];
console.log(amountOfElementsInArray.length);

// C Eerste functie retourneren________________________
let selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];

console.log(selectBelgiumFromBenelux[0]);

// D Laatste element retourneren______________________
let lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];


console.log(lastElementInArray[lastElementInArray.length - 1]);
 
// E eerste element uit array. Rest returnen. Slice EN splice gebruiken.
const presidents = ["Trump", "Obama", "Bush", "Clinton"]; 

let trump = presidents.slice(1, 4);
console.log(trump);
// E1: Splice zorgt ervoor dat 




// const impeachTrumpSlice = function(array) {
//     (...)
//     }
//     const impeachTrumpSplice = function(array) {
//         (...)
//     }

// // F __Join all elements_________________________________
// let stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

// console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
// //resultaat: "Winc Academy is leuk ;-}"