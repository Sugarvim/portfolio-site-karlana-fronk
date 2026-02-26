/* eslint-disable no-unused-vars */
console.log("Confetti cake");

const kip = document.querySelector("#Kip")
const kipBtn = document.querySelector("#kip-btn")
const lock = document.querySelector("#Lock")
const lockBtn = document.querySelector("#lock-btn")
const nav = document.querySelector("#myNavtoggle")

function  menuToggle(){
    if (nav.className === "navtoggle") {
    nav.className += " responsive";
    }
    else {
        nav.className = "navtoggle";
    }
}

kipBtn.addEventListener("click", () =>{
    if(kipBtn.classList.contains("open")){
        kipBtn.classList.remove("open")
        kip.classList.remove("shrink")
    }else{
        kipBtn.classList.add("open")
        kip.classList.add("shrink")
    }
})
lockBtn.addEventListener("click", () =>{
    if(lockBtn.classList.contains("open")){
        lockBtn.classList.remove("open")
        lock.classList.remove("shrink")
    }else{
        lockBtn.classList.add("open")
        lock.classList.add("shrink")
    }
})
