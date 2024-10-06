class Dog { 
    constructor(name, weight, lifespan, food, facts, pic) { 
        this.name = name; 
        this.weight = weight; 
        this.lifespan = lifespan; 
        this.food = food; 
        this.facts = facts; 
        this.pic = pic; 
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        // Create a header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        section.append(h3);

        // When section is clicked, open dialog
        section.onclick = () => {
            const dialog = document.getElementById("dialog");
            dialog.style.display = "block";
            const dialogContent = document.getElementById("dialog-content");
            dialogContent.innerHTML = ""; // Clear previous content
            dialogContent.appendChild(this.expandedSection());
        };

        return section; // Return the created section
    }

    expandedSection() {
        const section = document.createElement("div");
        
        // Create my columns
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);
        const firstColumn = document.createElement("div");
        columnsDiv.append(firstColumn);
        const secondColumn = document.createElement("div");
        columnsDiv.append(secondColumn);

        // Create image and add to first column
        firstColumn.append(this.picture(this.pic));

        // Create info data and add to second column
        secondColumn.classList.add("hidden");
        secondColumn.append(this.paragraph("Breed", this.name));
        secondColumn.append(this.paragraph("Weight", this.weight));
        secondColumn.append(this.paragraph("Lifespan", this.lifespan));
        secondColumn.append(this.paragraph("Food", this.food));
        secondColumn.append(this.paragraph("Facts", this.facts));

        // Append the columns to the section
        section.append(columnsDiv);
        
        return section; // Return the expanded section
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info; // Ensure this path is correct
        pic.alt = this.name; // Add alt text for accessibility
        return pic;
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
dogs.push(new Dog("Labrador Retriever", "55-80lbs", "10-14 years", "nibble", "a symbol of kinship in America", "lab.jpg")); 

// Append dog items to the list
dogs.forEach((dog) => {
    document.getElementById("dog-list").append(dog.item);
});

// Close dialog functionality
/*document.getElementById("dialog-x").onclick = () => {
    const dialog = document.getElementById("dialog");
    dialog.style.display = "none"; // Close dialog when 'X' is clicked
};*/

// Close dialog when clicking outside of the dialog content
window.onclick = (event) => {
    const dialog = document.getElementById("dialog");
    if (event.target == dialog) {
        dialog.style.display = "none";
    }
};
