

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};




/* Color SLider */
document.getElementById("myslider").oninput= () => 
{
    let color = document.getElementById("myslider").value; 
    const message = document.getElementById("message");
    document.getElementById("exercise-1").style.backgroundColor = "rgb(" + color + ", 0, 0)";
    

    if(color >= 50 && color < 155){
        message.innerHTML = "Fun!";
    }
    else if(color >= 155 && color < 255){
        message.innerHTML = "Oh Really Fun!";
    }
    else if (color == 255) 
    {
        message.innerHTML = "SO AWESOME!";
    }
   
}

/* Picture Chooser*/ 
document.getElementById("exercise-2").onclick = (event) => 
{
    const button = event.target;

    
    if (button.id == "small") 
    { 
        document.getElementById("image").src = "https://picsum.photos/100";
    }
    else if (button.id == "medium") 
    { 
        document.getElementById("image").src = "https://picsum.photos/200";
    }
    else if (button.id == "large") 
    { 
        document.getElementById("image").src = "https://picsum.photos/300";
    }
   
}