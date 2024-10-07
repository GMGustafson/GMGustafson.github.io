class Dog { 
    constructor(name, weight, lifespan, food, facts, pic) { 
        this.name = name; 
        this.weight = weight; 
        this.lifespan = lifespan; 
        this.food = food; 
        this.facts = facts; 
        this.pic = pic; 
    }

    get section() {
        const section = document.createElement("section");
        const h3 = document.createElement("h3"); 
        h3.innerHTML = this.name;


        const pic = document.createElement("img");
        pic.src = "images/" + this.pic; 
        pic.alt = this.name; 
        
        
        section.append(h3);
        section.append(pic); 
        
        section.onclick = () => {
            const dialog = document.getElementById("dialog");
            dialog.style.display = "block";
            const dialogContent = document.getElementById("dialog-content");
            dialogContent.innerHTML = ""; // Clear previous content
            dialogContent.appendChild(this.expandedSection);
        };

        return section; 
    }
    

    get expandedSection() {
        const expandedSection = document.createElement("div");
        
        // Create the columns container
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        
        // Create columns
        const firstColumn = document.createElement("div");
        const secondColumn = document.createElement("div");
        
        // Create and add image to the first column
        const img = document.createElement("img");
        img.src = "images/" + this.pic;
        img.alt = this.name;
        firstColumn.appendChild(img);
        
        // Create info data and add to the second column
        secondColumn.appendChild(this.paragraph("Breed", this.name));
        secondColumn.appendChild(this.paragraph("Weight", this.weight));
        secondColumn.appendChild(this.paragraph("Lifespan", this.lifespan));
        secondColumn.appendChild(this.paragraph("Food", this.food));
        secondColumn.appendChild(this.paragraph("Facts", this.facts));
        
        // Append columns to the container
        columnsDiv.appendChild(firstColumn);
        columnsDiv.appendChild(secondColumn);
        
        // Append the container to the expanded section
        expandedSection.appendChild(columnsDiv);
        
        return expandedSection;
    }
    

    

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

// Dog instances
const dogs = []; 
dogs.push(new Dog("Malti-poo", "5-20lbs", "14-16yrs", "kibble", "low-maintenance and hypoallergenic dog", "maltipoo.jpg")); 
dogs.push(new Dog("Golden Retriever", "60-75lbs", "10-13yrs", "high-protein meals", "friendly personality", "golden.jpg")); 
dogs.push(new Dog("Pug", "13-18lbs", "13-15 years", "kibble", "comical temperament and loyal nature", "pug.jpg")); 
dogs.push(new Dog("Labrador Retriever", "55-80lbs", "10-14 years", "kibble", "a symbol of kinship in America", "lab.jpg")); 

// Append dog items to the list
dogs.forEach((dog) => { 
    document.getElementById("dog-list").append(dog.section);
});



// Close dialog when clicking outside of the dialog content
window.onclick = (event) => {
    const dialog = document.getElementById("dialog");
    if (event.target == dialog) {
        dialog.style.display = "none";
    }
};
