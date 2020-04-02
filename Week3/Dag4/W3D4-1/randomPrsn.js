// const removeDuckButton = document.getElementById("remove-first-item-but)
// removeDuckButton.addEventListener('click', function(){
//     // In het event wordt hetgeen je weg wilt gekoppeld aan de functie remove
//         duckElement.remove();
//     });



// LANDENNAMEN GESORTEERD OP NAAM
const alleLanden = randomPersonData.map((randomPersonData) => {
    return randomPersonData.region
});

alleLanden.sort(function (a, b) {
    if (b > a) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

alleLanden.forEach(landenInArray);
function landenInArray(item) {
  let ulList = document.getElementById("landenlijst").innerHTML
  += "<li>" + item + "</li>";
};
//______________________________________________________________________________________



    const genderFemale = randomPersonData.filter((randomPersonData) => randomPersonData.gender.includes("female"))
    
    const ageFemale = genderFemale.filter((genderFemale) => randomPersonData.age > 30)
    console.log(ageFemale)

    // const steenbokVrouwen = randomPersonData.filter((x => x.age > 30 && x.gender == 'female') => {
    //     return steenbokVrouwen
    // };

genderFemale.forEach(steenbokArray);
function steenbokArray(item) {
    let ulList = document.getElementById("steenboklijst").innerHTML
    += "<li>" + item + "</li>";
};


// const newReleases = (movielist) => {
//     // Filter eerst alle films uit de lijst na 2014. list.year moet hoger zijn dan 2014.
//     // eerst een variabale aanmaken die filtert hierop (releaseAfter2014)
//     const releaseAfter2014 = movielist.filter((list) => list.Year > 2014)
//     // Nog een variabele maken om door de filter van releaseAfter2004 te mappen.
//     // Hieruit selecteer ik dan weer de titels van de film met list.title.
//     const release1 = releaseAfter2014.map((list) => list.Title);
//     // Ik wil dat wanneer ik de funtie aanroep deze mij release1 terug gaat geven.
//     return release1
//   };











// const movieLink = movieList.map((movieList) => {
//     return movieList.Poster
//   });
//   movieLink.forEach(moviesInArray);
//   function moviesInArray(item) {
//     let ulList = document.getElementById("movieArrayList").innerHTML
//     += "<li>" + item + "</li>";
  
      // let li = document.createElement("li");
      // let a = document.createElement("a")
      // let imgPosterLink = document.createElement("img")
        // a.href = "https://www.imdb.com/title/" + movieList.imdbID;
      // imgPosterLink.src = movieLink.Poster
