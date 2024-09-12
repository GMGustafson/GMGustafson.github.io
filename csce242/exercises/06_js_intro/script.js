
//functions
// multiple times 
const doStuff = () => {
    alert("hello world"); 
}



//calling function 

const myButton = document.getElementById("btn-click"); 
//myButton.onclick= doStuff;
// only one time 
//myButton.onclick = () => {
    //alert("hello"); 
//}

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special"); 
}

// add second button called say goodbye
// when clicked change text to goodbye everyone and remove the special styles


//notes
// var vs let scopping issues, var is global, let is key 
// const(ance) meaning you will never change it ,default
// dont call things "Dostuff"




