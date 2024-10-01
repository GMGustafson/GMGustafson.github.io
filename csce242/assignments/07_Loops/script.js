
const randNum = (val) => Math.ceil(Math.random() * val);

document.getElementById("btn").onclick = () => 
{
   const number = parseInt(document.getElementById("txt-star").value);
   let box = document.getElementById("box");
   
   box.innerHTML = '';

   if (number>0) 
   {
      for (let i = 0; i < number; i++) 
      {
         const star = document.createElement("div"); 
         star.classList.add("star");
         
         const x = randNum(box.clientWidth) - 20; 
         const y = randNum(box.clientHeight) - 20; 
         star.style.left = `${x}px`;
         star.style.top = `${y}px`;

         box.append(star);
         
         star.onclick = () =>
         { 
            console.log("you clicked a star");
         } 
      }
   }
   else 
   {  
      console.log("not valid"); 
   }
}
   


