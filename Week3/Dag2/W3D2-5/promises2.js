// const getSucceedingPromise = (message, ms) => {
//     let promiseShouldSucceed = Math.random() >= 0.5;
//     console.log(promiseShouldSucceed);
//   };
  //getSucceedingPromise(); // code werkt, Boolean die true/fals maakt

//   function randomMilliseconds(myMin, myMax) {
//     return Math.floor(Math.random() * (5 - 0 + 1) + 0);
//   };
 
//randomMilliseconds(); // code werkt, random nummer tussen 0 en 5.


//__________ oefening________________________________________
let test = new Promise((resolve, reject) => {
  let x = 2 * 5
  if(x === 5) {
    resolve("Getal is gelijk aan 5")
  } else {
    reject("Getal is meervoud van 5 ")
  }
})

test.then((text) => {
  console.log("Beoordeling:" + text)
}).catch((text) => {
 console.log("Beoordeling:" + text)
 });
//__________________________________________________________

// const getSucceedingPromise = (message, ms) => {
//     let promiseShouldSucceed = Math.random() >= 0.5;
//     console.log(promiseShouldSucceed);
//   };
 
//  const getFailingPromise = (errorMessage, ms) => {
//   // Maak hier je functie die een failing Promise retourneert
 
//  };
 
const getRandomSucceedingOrFailingPromise = id => {


const getSucceedingPromise = (message, ms) => {
    let promiseShouldSucceed = Math.random() >= 0.5;
    console.log(promiseShouldSucceed);
  };

    function randomMillisecond(myMin, myMax) {
      return Math.floor(Math.random() * (5 - 0 + 1) + 0);
  };

  let newPromise = new Promise((resolve, reject) => {
   if (promiseShouldSucceed) {
    return getSucceedingPromise(
      `Promise ${id} succeeded in ${randomMillisecond} ms.`,
      randomMillisecond )
        
  } else {
    return getFailingPromise (
      `Promise ${id} failed in ${randomMillisecond} ms.`,
      randomMillisecond)
    }

  });
  newPromise.then((text) => {
    console.log("Resolved" + text)
  }).catch((text) => {
   console.log("Rejected" + text)
   });
  };
//_____________________________________________________________________
 const createPromiseElement = promise => {
   const div = document.createElement("div");
   div.classList = promise.state;
   div.innerHTML = `Promise: ${promise.id}`;
   return div;
 };
 
 const showPromises = promises => {
   console.log("I get called every time a Promise rejects or resolves")
   const promisesDiv = document.querySelector(".promises");
   promisesDiv.innerHTML = "";
   const promisesElements = promises.map(createPromiseElement);
   promisesElements.forEach(element => promisesDiv.appendChild(element));
 };
 
 const add50Promises = () => {
   let i = 0;
   const allPromises = [];
   // fill the allPromises array with 50 objects that will soon be Promises. 
   // they all have an ID
   while (i <= 50) {
     let id = i;
     allPromises.push({
       id
     });
     consumePromise(allPromises, id);
     i++;
   }
 // Put the inital pending Promises in the DOM:
 showPromises(allPromises);
 };
 
 const consumePromise = function(allPromises, id) {
   const promise = getRandomSucceedingOrFailingPromise(id);
   //consumeer hier je Promise
 };
 
 const registerEventHandlers = () => {
   document.querySelector("button").addEventListener("click", add50Promises);
 };
 
 document.addEventListener("DOMContentLoaded", () => {
   registerEventHandlers();
 });
