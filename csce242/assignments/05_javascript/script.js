
    // Slider
document.getElementById("slider").value = 0; // Initial value of slider

document.getElementById("slider").oninput = () => {
    console.log("Check"); // Check input function
    val = document.getElementById("slider").value * 1.25;
    document.getElementById("slide-box").style.left = val + "px";
}
        
    /*counter*/ 
    let taps = 0; 
    document.getElementById("myButton").onclick = () => {
        taps +=1; 
        document.getElementById("myButton").innerHTML = taps;
    }
