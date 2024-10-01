
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
         
         const txt = document.getElementById("txt-box");
         star.onclick = () =>
         { 
            txt.innerHTML = "You clicked star number  " + (i+1) +  " !!" ; 
         } 
      }
   }

   else 
   {  
      const txt = document.getElementById("txt-box");
      txt.innerHTML = "You entered an invalid number. It has to be greater than 0." ;
      console.log("not valid"); 
   }
}
   


