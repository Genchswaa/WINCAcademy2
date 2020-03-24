alert('Welkom! ');

let name = prompt('Wat is je naam?', '');

alert('Hey ' + name);

alert('Voer een nummer in tussen de 0 en 25 om te beginnen met raden:');

let gok = prompt('Ik gok met het volgende nummer', '');

x = Math.floor(Math.random(0, 26));
pogingen = 5
let maxGetal = 25
let minGetal = 0
let range = prompt('Ik wil spelen met de onderstaande nummers tussen de' + minGetal +  'en' + maxGetal);



for(i = 0; i < 6; i++)
if (gok === x) {
    prompt('Gefeliciteerd, je hebt gewonnen, het spel is nu af')
    break 

}else if (gok !== x) {
    gok++; 

    prompt('Dat is niet correct, opnieuw raden aub') 
    alert('je hebt nog ' + pogingen-- + ' pogingen over')
    
};
alert('Helaas, je pogingen zijn op')
alert('Dag ' + name  + ' Tot de volgende keer');