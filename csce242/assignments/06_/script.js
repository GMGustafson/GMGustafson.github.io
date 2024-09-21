/* Color SLider */



/* Picture Chooser*/ 
document.getElementById("exercise.2").onclick = (event) => 
{
    const button = event.target; 
    const img = document.getElementById("img");

    if (button == "small") 
    { 
        console.log("hi hi");
        //img.src="https://picsum.photos/100";
    }
    if (button == "medium") 
    { 
        console.log("hiiiii hi");
        //img.src="https://picsum.photos/300";
    }
    if (button == "large") 
    { 
        console.log("hi hiii");
        //img.src="https://picsum.photos/500";
    }
   
}