/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
  };


/* document.getElementById("btn-loop").onclick = () => 
{ 
   const ul = document.getElementById("numbers"); 
   for (let i = 0; i<10 ; i++)
    {
        const li = document.createElement("li"); 
        li.innerHTML = i + 1; 
        ul.append(li); 
        li.setAttribute("id", " li" + i); 

        li.onclick = () => 
        { 
            console.log (`li ${i+1} was clicked`); 
        }; 
    }; 
}*/

document.getElementById("btn-go").onclick = () => 
{ 
    const start = parseInt(document.getElementById("txt-start").value); 
    const end = parseInt(document.getElementById("txt-end").value); 
    const ul = document.getElementById("numbers"); 


        for (let i = start; i<=end ; i++)
        {
                const li = document.createElement("li"); 
                li.innerHTML = i; 
                ul.append(li); 
                li.setAttribute("id", " li" + i); 
        };

}