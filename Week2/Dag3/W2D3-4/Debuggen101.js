const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    
    //1. Log alle objecten van de persoon___________________
    console.log('Dit is de gehele persoon', person)
    
    //2. Alle namen en introductie___________
    console.log('Hallo, dit is:', person.name)
    
    //3. Geboortejaar________________________
    // jaartal van nu - actuele leeftijd.
    let jaartal = 2020
    console.log('Deze persoon is geboren in', (jaartal - person.age))

    //4 Alle namen plus beroep_______________
    console.log(person.name, "werkt in het dagelijks leven als", person.profession)
  
    //5 If statement met checkt 50+
    if (person.age > 50){
        console.log('Er zitten mensen tussen de 50 tussen.')
    }

};