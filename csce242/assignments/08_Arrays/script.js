


  let pictures = [];
  toyPrices["images/birthday.jpg"] = "birthday";
  toyPrices["images/clown.jpg"] = "clown";
  toyPrices["images/rain.jpg"] = "rain";
  toyPrices["images/read.jpg"] = "read";
  toyPrices["images/shovel.jpg"] = "shovel";
  toyPrices["images/work.jpg"] =  "work";
 

/* Associative array*/
const table = document.querySelector("pictures-list");

for(let name in pictures){
  let tr = document.createElement("tr");
  table.append(tr);

  const td1 = document.createElement("td");
  let img = document.createElement("img"); 
  img.src = src; 
  td1.appendChild(img); 
  tr.append(td1);

  const td2 = document.createElement("td");
  td2.innerHTML = pictures[src];
  tr.append(td2);
  
  img.onclick = () => {
    document.getElementById("image-name").innerHTML = pictures[src]; 
}

}