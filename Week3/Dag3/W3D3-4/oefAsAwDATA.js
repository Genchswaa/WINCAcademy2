async function responseData() {
    
    const data = await getData();

    //mijnfunctie(data);

    console.log("Movie arrays", data);
    //data wil jij jouw html zien
    //dus die moet je sturen naar je html verwerk functie
    moviesToDom(data);

};

responseData();
