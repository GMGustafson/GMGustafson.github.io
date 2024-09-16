
    
    /*Slider*/ 
    document.getElementById("myslider").value = 0; 
    document.getElementById("myslider").oninput = () => 
    {
    const val = document.getElementById("myslider").value * 1.25;
    document.getElementById("slider-pic").style.left = val + "px";
    }

    /*counter*/ 
    let taps = 0; 
    document.getElementById("counter").onclick = () => 
    {
        taps += 1; 
        document.getElementById("myButton").innerHTML = taps;
    };
