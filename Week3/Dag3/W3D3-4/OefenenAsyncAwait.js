// Aandachtspunten
// simpele lijstjes in HTML met filmcatagorien
// aparte functie ophalen van data (synchroon of a synchroon)
// in de functiebenaming altijd REST methode (GET PUT POST of DELETE)
// rating maken = bijvoorbeeld postMovieRating

const API_KEY = "e6deb05a8dd30c00c7018a19b386ddf6";

// Je maakt een async functie aan.
async function getData(){

    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {

    const res = await fetch(apiUrl, {method: "GET"});

    const data = await res.json();
    return data;
    } catch (err) {
        console.log(err)
    }
}

// const moviesToDom = function() {
//     // console.log('moviesToDom wordt aangeroepen');
    
//      data.map(function(data) {
//          listAvailablemovies(array);
//      });
// }
// moviesToDom();

// const listAvailablemovies = function(array){
//     let availableMovies = document.getElementById("movies");
//     let newLi = document.createElement("li");
//     let newA = document.createElement("a");
//     // for (let i = 0; i < getData.length; ++i) {
//     //     queryAll[i].innerHTML = li;
//     //   }
//     newLi.appendChild(newA);
//     availableMovies.appendChild(newLi);
//     return newLi;
// }
// listAvailablemovies();
// getData();
//krijg data
//ik wilde functie aanroepen als ik data heb
//....

//listAvailablemovies(); //echt iets doen!