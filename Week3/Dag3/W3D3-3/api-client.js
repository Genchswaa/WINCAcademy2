//Helderheid
// .then/.catch zijn niet meer nodig bij het gebruik van async await
// In plaats van .then noteer je AWAIT en dan hetgeen je wil dat moet gebeuren.
// Dit wordt later dan nog uitgevoerd.


//Hier maak je een constante aan voor de key
const API_KEY = "e6deb05a8dd30c00c7018a19b386ddf6";

// Je maakt een async functie aan.
async function getData(){
   
    // je maakt een variabele in de functie aan met de url
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
     
    //try/catch block zorgt ervoor dat errors worden opgevangen.
    // hele blok van code gaat tussen de brackets van try.
    //MAAK DIT PAS AAN HET EINDE. Vergeet catch niet!
    try {
    //Met .fetch wil ik data van de API fetchen. 
    // Deze moet een get functie hebben en op AWAIT staan.
    // Dit komt terug zodra apiUrl wordt aangeroepen.
    
    //Gebruik de fetch() functie met de GET methode om de data van 
    //API te fetchen. Stop de fetch functie in een variable res die 
    //je await.
    const res = await fetch(apiUrl, {method: "GET"});

    // De response moet ook nog even omgezet worden naar een json() bestand. 
    // .json() is ook weer een promise in disguise. 
    // Dus in een async functie kun je die afwachten! 
    const data = await res.json();
    return data;
    } catch (err) {
        console.log(err)
    }
};
