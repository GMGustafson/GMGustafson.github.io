const getCocktails = async() => {
    try {
        return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")).json();
    } catch(error) {
        console.log(error);
    }
}

const showCocktailSection = async() => {
    const cocktail = await getCocktails();
    const drinks = cocktail.drinks; 
    
    drinks.forEach((cocktail)=>{
        document.getElementById("cocktails-section").append(getCocktailSection(cocktail));
    });
};

const getCocktailSection = (cocktail) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = cocktail.strDrink;
    section.append(h3);
      
    const image = document.createElement("img");
    image.src = cocktail.strDrinkThumb; 
    section.appendChild(image);

    

    image.onclick = () => {
        const instructions = document.createElement("p");
        instructions.innerHTML = cocktail.strInstructions;
        section.append(instructions);
    };
    return section;

}; 





showCocktailSection(); 


