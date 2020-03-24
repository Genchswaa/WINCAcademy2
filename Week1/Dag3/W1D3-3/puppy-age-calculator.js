function calculateDogAge(humanAge){
    console.log ('Calculating dog age based on the human age: ' + humanAge);
    return humanAge * 7;
};


console.log( calculateDogAge(2) )

const dogAge = calculateDogAge(11);
console.log('Age of the dog: ' + dogAge);