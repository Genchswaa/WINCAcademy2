 let x = new Promise((resolve, reject) => {
 let a = 1 + 1;
 
 
 if ( a === 2) {
     resolve("(Inhoud van message RESOLVE)")
 } else {
     reject("Inhoud van message CATCH")
 }
});

// x.then staat altijd gelijk aan de resolve
// Ik wil het resolved hebben, EN DAN.....
x.then((message) => {
    // Als x gelijk is aan 2 zal het resolved worden
    // hij returnt dan onderstaande bericht.
    console.log("Dit komt in de THEN" + message)

    // Als x ongelijk is aan 2 zal het rejected worden
    // hij returnt dan onderstaande bericht.
}).catch((message) => {
    console.log("Dit komt in de CATCH" + message )
});

//Promises met callback functie___________________________________________
const amazingWednesday = true
const terrorWednesday = false

let y = new Promise((resolve, reject) => {
  
    if ( terrorWednesday) {
         resolve("(Het wordt een goede dag vandaag)")
         setTimeout(function(){ console.log("Gevuld met unicorns and rainbows")}, 5000);
    } else {
        reject("Het wordt lastig, maar we gaan ervoor!")
        setTimeout(function(){ console.log("Eat the codes for breakfast!")}, 3000);
    }
    });
   y.then((message) => {
       console.log("" + message)
   }).catch((message) => {
       console.log("" + message )
   });