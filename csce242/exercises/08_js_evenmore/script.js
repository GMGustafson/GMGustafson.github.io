/* when the hamburger is clicked, toggle between showing and hiding the nav items*/ 

//document.getElementbyId("toggle-nav")

document.querySelector("#toggle-nav").onclick = () => 
{ 
    document.getElementById("nav-items").classList.toggle("hidden-small");  
};

/* dont go to links desititation when clicked */ 
document.getElementById("click-link").onclick = (event) => 
{ 
    event.preventDefault(); //dont go to the links desination 
    console.log("you clicked a link"); 
};


