
function huiswerkMaken(vak, callback) {
    //setTimeout zorgt er in dit geval voor dat de onderstaande zin 1000 ms later wordt getoont.
    setTimeout(function(){ console.log(`Ok ok, ik ga nu mijn ${vak} huiswerk maken`)}, 1000);
    callback();
};

function klaarMetHuiswerk() {
    console.log("Kijk Pa/Ma, ik ben klaar met mijn huiswerk")
};

huiswerkMaken("biologie", klaarMetHuiswerk);
