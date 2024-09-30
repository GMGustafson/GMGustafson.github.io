
const randNum = (val) => Math.ceil(Math.random() * val);

document.getElementById("btn").onclick = () => 
{
   const numofStars = parseInt(document.getElementById("txt-star").value);
   const Stars = document.createElement("div"); 
   let box = document.getElementById("box");


   if (numofStars>0) 
   {
      box.append(Stars);
     star.classList.add("star");
   }
   else 
   { 
      console.log("not valid"); 
   }
   
}
