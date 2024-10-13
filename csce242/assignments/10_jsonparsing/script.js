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

    const div = document.createElement("div");
    div.classList.add("overlay");

    const overlayText = document.createElement("p");
    overlayText.innerHTML = iceCream.name;
    div.append(overlayText);

    section.append(div);
    return section;  
}; 



// Show all of the ice creams when the page loads
showIceCream();