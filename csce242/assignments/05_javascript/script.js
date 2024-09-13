
        let count = 0; // Variable to track the count

        // Set up the button click event listener
        document.getElementById("myButton").onclick = () => {
            count += 1; // Increment the count
            document.getElementById("clickme").innerHTML = count; // Update the h1 content
        }

        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value; // Display the default slider value

        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
        output.innerHTML = this.value;}