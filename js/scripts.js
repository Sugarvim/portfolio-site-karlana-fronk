console.log("Confetti cake");
// eslint-disable-next-line no-unused-vars
function  menuToggle(){
    var x= document.getElementById("myNavtoggle");
    if (x.className === ("navtoggle")) {
    x.className += " responsive";
    }
    else {
        x.className = "navtoggle";
    }
}