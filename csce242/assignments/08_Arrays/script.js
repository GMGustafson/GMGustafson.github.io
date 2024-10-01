


  let pictures = [];
  pictures["images/birthday.jpg"] = "Birthday - Happy Birthday!";
  pictures["images/clown.jpg"] = "Clown - Did I scare you? ";
  pictures["images/rain.jpg"] = "Rain - I hope you have your umbrella";
  pictures["images/read.jpg"] = "Read - Whats your favorite book?";
  pictures["images/shovel.jpg"] = "Shovel - Gardening time :) ";
  pictures["images/work.jpg"] =  "Work - Love doing work";
 

/* Associative array*/
const container = document.querySelector("#pictures-list");

for(let name in pictures){
  let div = document.createElement("div");
  div.classList.add("pic-div");
  
  let img = document.createElement("img"); 
  img.src = name; 

  div.appendChild(img); 

  img.onclick = () => {
    document.getElementById("image-name").innerHTML = pictures[name]; 
}
container.appendChild(div);

}
