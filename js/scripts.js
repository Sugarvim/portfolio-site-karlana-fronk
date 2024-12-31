console.log("Confetti cake");
function  menuToggle(){
    let x= document.getElementById("myNavtoggle");
    if (x.className === ("navtoggle")) {
    x.className += " responsive";
    }
    else {
        x.className = "navtoggle";
    }
}