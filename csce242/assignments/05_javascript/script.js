
    // Slider
document.getElementById("slider").value = 0; 

document.getElementById("slider").oninput = () => {
    val = document.getElementById("slider").value * 1.25;
    document.getElementById("slider-pic").style.left = val + "px";
}
        
    /*counter*/ 
    let taps = 0; 
    document.getElementById("counter").onclick = () => 
    {
        taps += 1; 
        document.getElementById("myButton").innerHTML = taps;
    };
