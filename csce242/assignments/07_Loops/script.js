
const randNum = (val) => Math.ceil(Math.random() * val);

document.getElementById("btn").onclick = () => 
{
   const numofStars = parseInt(document.getElementById("txt-star").value);
   const Stars = document.createElement("div"); 
   let box = document.getElementById("box");


   if (numofStars>0) 
   {
      for (let i = 0; i < numofStars; i++) 
      {
         box.append(Stars);
         Stars.classList.add("star");
      }
   }
   else 
   { 
      console.log("not valid"); 
   }
   
}
