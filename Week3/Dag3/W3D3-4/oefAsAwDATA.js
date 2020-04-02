async function responseData() {
    const data = await getData();
    console.log("Movie arrays", data);
    
    // Koppel ul lijst aan de functie
    const movieGenresList = document.getElementById("movies");
    // Van de data die binnen komt wil ik de genres hebben. data.genres
    const movieGenres = data.genres
    // Voor elk van die data.genres wil ik een li maken.
    // dat li bevat een textnode met de naam van de film en de id van de film.
    movieGenres.forEach(movieGenre => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `genre: ${movieGenre.name} heeft id: ${movieGenre.id}`
        )
        // Voeg content toe aan de li
        li.appendChild(liContent)
        // Voeg il toe aan de UL
        movieGenresList.appendChild(li)
    })
    //data wil jij jouw html zien
    //dus die moet je sturen naar je html verwerk functie
};
responseData();

// const getFavoriteMovie = async function () {
//     const favoriteFilm = "tt0112230"
//     const apiUrl = `https://api.themoviedb.org/find${favoriteFilm}?external_source=imdb_
// }
// //     const pulpFiction = "tt0110912";
// //     const apiUrl = `https://api.themoviedb.org/find${pulpFiction}?external_source=imdb_id;
// //     try {

//     const res = await fetch(apiUrl, {method: "GET"});

//     const data = await res.json();
//     return data;
//     } catch (err) {
//         console.log(err)
//     }
// }