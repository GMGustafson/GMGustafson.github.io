/* Santas expenses */
let pictures = [];
pictures["birthday"] = birthday; 
pictures["clown"] =clown;
pictures["rain"] = rain;
pictures["read"] = read;
pictures[src = "images/shovel"] = shovel ;
pictures[src="images/work.jpg"] = work;


/* Associative array*/
const table = document.querySelector("#pictureslist");

for(let name in pictures){
  let tr = document.createElement("tr");
  table.append(tr);
  const td1 = document.createElement("td");
  td1.innerHTML = name;
  tr.append(td1);

  const td2 = document.createElement("td");
  td2.innerHTML = pictures[name];
  tr.append(td2);
  
  tr.onclick = () => {
    console.log(name + ": " + picture[name]);
  }
}