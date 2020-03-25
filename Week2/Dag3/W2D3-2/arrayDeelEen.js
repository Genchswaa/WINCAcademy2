
// // A cool toevoegen met push______________________________
const arrayWithWords = ["nice","awesome","tof"];
//___________________________________________________________
// verkeerde zonder function
// arrayWithWords.push('COOL');
//___________________________________________________________
const addTheWordCool = (array) => {
	array.push('COOL');
	return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
//_____________________________________________________________
// // B Elementen retourneren__________________________
//let amountOfElementsInArray = ['appels', 'peren', 'citroenen'];
// // console.log(amountOfElementsInArray.length);
//______________________________________________________________
let amountOfElementsInArray = (array) => {
	return array.length};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//_____________________________________________________
// // C Eerste functie retourneren________________________
//let selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];
// console.log(selectBelgiumFromBenelux[0]);
//_______________________________________________________

let selectBelgiumFromBenelux = (array) => {
	return array[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
//_______________________________________________________

// // D Laatste element retourneren______________________
// let lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];
// console.log(lastElementInArray[lastElementInArray.length - 1]);

let lastElementInArray = (array) => {
	return array[array.length - 1];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//______________________________________________________________
// // E eerste element uit array. Rest returnen. Slice EN splice gebruiken.

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = (array) => {
  return presidents.slice(1, 4)
}
// splice selecteert het gebied tussen 1 en 4 en geeft dat terug.

const impeachTrumpSplice = (array) => {
	return presidents.splice(1, 3)
}
// splice selecteert alleen de 3 aangegeven objecten in de functie zegmaar.
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F Alle elementen moeten in een string komen__________

let stringsTogether = (array) => {
	return array.join();
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

// G combineer 2 arrays tot 1___________________

let array1 = [1,2,3];
let array2 = [1,2,3];
let combineArrays = (array) => {
	return array1.concat(array2);
}
console.log(combineArrays([1,2,3], [4,5,6]))