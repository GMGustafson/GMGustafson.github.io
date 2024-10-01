/*
change which image currently has the class of hidden applied to it 
do it with a friend 
querySelector
*/


const slide = () => 
{ 
    const currentImage = document.querySelector("#slideshow :not(.hidden)"); 
    let nextImage = currentImage.nextElementSibling;

     
    
    //reached the end of the list 
    if (nextImage == null)
    { 
        nextImage = document.querySelector("#slideshow :first-child"); 
    }
    
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");

    console.log("sliding");

}

setInterval(slide, 1000); 