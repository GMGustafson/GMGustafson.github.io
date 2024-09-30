
const randNum = (val) => Math.ceil(Math.random() * val);

document.getElementById("btn").onclick = () => 
{
   const numofStars = parseInt(document.getElementById("txt-star").value);
   const Stars = document.querySelector("star"); 
   let box = document.getElementById("box");


   if (numofStars>0) 
   {
     console.log(numofStars); 
   }
   else 
   { 
      console.log("not valid"); 
   }
   
}
