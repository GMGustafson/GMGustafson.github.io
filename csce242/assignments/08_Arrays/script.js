


  let pictures = [];
  pictures["images/birthday.jpg"] = "Birthday - Happy Birthday!";
  pictures["images/clown.jpg"] = "Clown - Did I scare you? ";
  pictures["images/rain.jpg"] = "Rain - I hope you have your umbrella";
  pictures["images/read.jpg"] = "Read - Whats your favorite book?";
  pictures["images/shovel.jpg"] = "Shovel - Gardening time :) ";
  pictures["images/work.jpg"] =  "Work - Love doing work";
 

/* Associative array*/
const table = document.querySelector("#pictures-list");

for(let name in pictures){
  let tr = document.createElement("tr");

  const td1 = document.createElement("td");
  let img = document.createElement("img"); 
  img.src = name; 
  td1.appendChild(img); 
  tr.append(td1);

  
  img.onclick = () => {
    document.getElementById("image-name").innerHTML = pictures[name]; 
}
table.appendChild(tr);

}