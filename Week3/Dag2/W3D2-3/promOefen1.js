/*
Exercise 1:
Write a function testNum that takes a number as an argument and 
returns a Promise that tests if the value is less than or 
greater than the value 10. Log the result to the console.
*/


function testNum(x) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (x < 10) {
            resolve("Getal is kleiner dan 10");
        } else {
            reject("Getal is groter dan 10"); 
        } 
        });  
        });
    }

testNum(2)
.catch(xNr => console.log(xNr));

  
/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

// const makeAllCaps = () => {};  
// const sortWords = () => {};

// const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
// const complicatedArray = ['cucumber', 44, true];

// call both functions, chain them together and log the result to the console