
const getBrewery = async() => 
{ 

    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        console.log("hii"); 
        return response.json();
    } catch(error){
        console.log(error);
}
}

const showBrewery = async() => {

    const brewery = await getBrewery(); 

    brewery.forEach((brewery) => {
        document.getElementById("breweries-section").append(getBrewerySection(brewery)); 
    });
}

const getBrewerySection = (brewery) => {

    const section = document.createElement("section"); 



}


