// UITWERKING OPDRACHTEN ONDERAAN!
const superHeroList = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher":  "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "",
    }
  ];

  //1: Alle superhelden namen___________________________________________________________________
  // Ik wil alle namen uit de lijst in een array stoppen.
  // Ik maak een const aan genaamd superHerNames.
  // Deze geef ik de functie om alle namen uit de lijst te zoeken met superherolist.map
  // Superhernames moet aan mij alle namen terug gegeven zodra ik Superhernames aanroep.
  const superHeroNames = superHeroList.map((superHeroNames) => {
    return superHeroNames.name
  });
 //console.log(superHeroNames);

 //2: Alle lichte superhelden_____________________________________________________
 // Ik wil alle superhelden die minder dan 190 wegen. 
 // Ik maak een const aan genaamd superHeroLightWeight
 // Uit de list wil ik de gewichten filteren. 
 // Geef mij de superhelden terug met gewicht onder de 190.
 
 const superHeroLightWeight = superHeroList.filter((superHeroList) => {
  
  return superHeroList.weight <= 190
   
 });
 //console.log(superHeroLightWeight);

 //3: Array met alleen de namen van boven de 200 pounds___________________


 //const name = () => superHeroList.name
 const superHeroWeight200 = (superHeroList) => {
  const weightEqualTo200 = superHeroList.filter((hero) => hero.weight === '200')
  const outcome = weightEqualTo200.map((hero) => hero.name);
  // return outcome;
}
//console.log(superHeroWeight200(superHeroList));


//4: Array met firt appearances van de superhelden_____________

const allFirstAppearances = (superHeroList) => {
  const firstTime = superHeroList.filter((hero) => hero.first_appearance)
  const overview = firstTime.map((hero) => hero.first_appearance);
  return overview;
};
// console.log(allFirstAppearances(superHeroList));

//5A Lijst met alle DC helden________________________________________

const allDc = (superHeroList) => {
  const allDcHeroes = superHeroList.filter((hero) => hero.publisher === "DC Comics")
  const overview = allDcHeroes.filter((hero) => hero.name);
  return overview;
};
//console.log(allDc(superHeroList));
//5B Lijst met alle DC helden________________________________________
const allMarvel = (superHeroList) => {
  const allMarvelHeroes = superHeroList.filter((hero) => hero.publisher === "Marvel Comics")
  const overview = allMarvelHeroes.filter((hero) => hero.name);
  return overview;
};
// console.log(allMarvel(superHeroList));



//_6,7 en 8 NOG NIET AF.___________________________________________________
// 6 Gewicht van alle superhelden bij elkaar___________
// const weightOfAllHeroes = (superHeroList) => {
//   const seperateWeight = superHeroList.filter((hero) => hero.weight)
//   const totalWeight = allMarvelHeroes.reduce((hero) => hero.name);
//   return totalWeight;
// };
// console.log(weightOfAllHeroes(superHeroList));

//_____________________________________________

// const weightOfAllHeroes = superHeroList.reduce((totalHeroSolo, superHeroList) => {
//   return superHeroList.weight + totalHeroSolo
// }, 0);
// ;
// console.log(weightOfAllHeroes);
//_______________________________________________

