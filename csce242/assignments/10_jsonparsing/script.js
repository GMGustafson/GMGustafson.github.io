const getIceCream = async () => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";
    
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showIceCream = async () => {
    const iceCream = await getIceCream();
    
    iceCream.forEach((iceCream) => {
        document.getElementById("Ice-cream-section").append(getIceCreamSection(iceCream));
    });
};

const getIceCreamSection = (iceCream) => {
    const section = document.createElement("section");

    const image = document.createElement("img");
    image.src = "images/" + iceCream.image; 
    section.appendChild(image);


   
// hover 

const namesection = document.createElement("section"); 
namesection.id = `${iceCream.name} - name`;  
namesection.classList.add("name", "hidden"); 
section.append(namesection); 

const name = document.createElement("p"); 
name.innerHTML = iceCream.name; 
namesection.append(name); 

section.addEventListener("mouseover", () => 
    { 
        namesection.classList.remove("hidden"); 
    }); 
section.addEventListener("mouseout", () => 
    { 
        namesection.classList.add("hidden"); 
    });    

    return section;

};
// Show all of the ice creams when the page loads
showIceCream();


