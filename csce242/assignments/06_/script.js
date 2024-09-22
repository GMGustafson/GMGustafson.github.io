

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};



/* Color SLider */

document.getElementById("myslider").vlaue = 0; 

document.getElementById("myslider").onchange = (e) => {
    document.querySelector(":root").style.setProperty("--box-color", e.target.value);
}

document.getElementById("myslider").oninput= () => 
{
    let color = document.getElementById("myslider").value; 
    const message = document.getElementById("message");
    document.getElementById("exercise-1").style.backgrounColor = "rgb(" + color + ", 0, 0)";
    

    if(color >= 50 && color < 155){
        message.innerHTMl = "Fun!"
    }
    else if(color >= 155 && color < 255){
        message.innerHTMl = "Oh Really Fun!"
    }
    else if (color == 255) 
    {
         message.innerHTMl = "SO AWESOME!"
    }
   
}

/* Picture Chooser*/ 
document.getElementById("exercise-2").onclick = (event) => 
{
    const button = event.target;

    if (button == "small") 
    { 
        document.getElementById.src = "https://picsum.photos/100";
    }
    else if (button == "medium") 
    { 
        document.getElementById.src=img.src = "https://picsum.photos/300";
    }
    else if (button == "large") 
    { 
        document.getElementById.src=img.src = "https://picsum.photos/500";
    }
   
}