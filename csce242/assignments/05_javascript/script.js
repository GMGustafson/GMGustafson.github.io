
    /*slider*/ 
        var slider = document.getElementById("myRange");
        output.innerHTML = slider.value; // Display the default slider value

        slider.oninput = function() {
        output.innerHTML = this.value;}

    /*counter*/ 
    myButton.onclick = () => {
        document.getElementById("myButton").innerHTML = innerHTML ++;
    }
