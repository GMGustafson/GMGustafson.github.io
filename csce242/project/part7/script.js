
/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("main-items").classList.toggle("hidden-small");
};
