/* hollandsBroodje
/*  Leg de het onderste broodje klaar
    leg hier kaas op
    Dek af met bovenste broodje */

function hollandsBroodje() {
    console.log('Leg de het onderste broodje klaar');
    console.log('leg hier kaas op');
    console.log('Dek af met bovenste broodje');
};

hollandsBroodje()


// De functie declareer je net zoals hieronder. Eerst function en in
// haakjes zet je wat het betekent.
function makeSandwich(topping) {
    console.log('There you go, a sandwich with' +  topping);
};

// Zoals hieronder roep je de functie aan.
makeSandwich() 

//Opgave 8
makeSandwich('cheese')


/*const calculateDiscountedPrice = function (totalAmount, discount){
    console.log(totalAmount / discount)
}
calculateDiscountedPrice(16, 12)*/

const calculateDiscountedPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);
}


const price = calculateDiscountedPrice(20, 5);
console.log(calculateDiscountedPrice(19.25, 12.24));

const calculateDiscountedPriceTwee = function (totalAmount, discount) {
if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
} else {
    return totalAmount;
}
};
console.log(calculateDiscountedPriceTwee(75, 25));