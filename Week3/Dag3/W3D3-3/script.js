//Je bent nu klaar! Je kunt de data nu gaan gebruiken in je script.js 
//file. Hoe dan?

// Je wilt de functie getData() afwachten. Hoe krijg je toegang tot 
// het keyword await? Door deze in een async functie te zetten. 
// Dus maak een asyncronous functie waarin je getData() afwacht. 

getData();

async function waitForData() {
    
    const retrieveData = await getData();
    console.log(retrieveData)

};

waitForData();