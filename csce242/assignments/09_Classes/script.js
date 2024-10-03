class Dog
{ 
    constructor(name, weight, lifespan, food, facts,pic)
    { 
        this.name=name; 
        this.weight=weight; 
        this.lifespan=lifespan; 
        this.food=food; 
        this.facts=facts; 
        this.pic = pic; 
    }

get item(){
    const section = document.createElement("section");
    section.classList.add("dog");

    //create a header
    const h3 = document.createElement("h3");
    h3.innerHTML = this.name;
    section.append(h3);

    //create my columns
    const columnsDiv = document.createElement("div");
    columnsDiv.classList.add("columns");
    section.append(columnsDiv);
    const firstColumn = document.createElement("div");
    columnsDiv.append(firstColumn);
    const secondColumn = document.createElement("div");
    columnsDiv.append(secondColumn);

    //create image and add to first column
    firstColumn.append(this.picture(this.pic));

    //create info data and add to second column
    secondColumn.classList.add("hidden");
    secondColumn.append(this.paragraph("Breed", this.name));
    secondColumn.append(this.paragraph("Weight", this.weight));
    secondColumn.append(this.paragraph("Lifespan", this.lifespan));
    secondColumn.append(this.paragraph("Food", this.food));
    secondColumn.append(this.paragraph("Facts", this.facts));
    

    //create exand / contract arrow
    const expCon = document.createElement("a");
    expCon.href="#";
    expCon.innerHTML = "&#x2964;";
    h3.append(expCon);

    expCon.onclick = () => {
        secondColumn.classList.toggle("hidden");
    };


    return section;
    
}
picture(info){
    const pic = document.createElement("img");
    pic.src = "images/" + info;
    return pic;
}

paragraph(title, info){
    const p =document.createElement("p");
    p.innerHTML = `<strong>${title}</strong>: ${info}`;
    return p;
}
}

const dogs = []; 
dogs.push(new Dog("Malti-poo", "5-20lbs", "14-16yrs", "kibble", "low-maintenance and hypoallergenic dog")); 
dogs.push(new Dog("Golden-retriever", "60-75lbs", "10-13yrs", "high-protein meals", "friendly personality")); 
dogs.push(new Dog("pug", "13-18lbs", "13-15 years", "kibble", "comical temperament and loyal nature")); 
dogs.push(new Dog("Labrador retriever", "55-80lbs", "10-14 years", "nibble", "a symbol of kinship in America")); 


dogs.forEach((dog)=>{
    document.getElementById("dog-list").append(dog.item);
});



