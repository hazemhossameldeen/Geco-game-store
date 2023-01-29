// main Nav - Start
let btn = document.getElementById("sm-nav-btn");
let smNav = document.getElementById("smNav");

btn.addEventListener("click",function(){
    smNav.classList.toggle("active");
    
    if(btn.innerHTML ===`
                    <span></span>
                    <span></span>
                    <span></span>
                `){
        btn.innerHTML = 'X'
    }
    else if(btn.innerHTML === 'X'){
        btn.innerHTML = `
                    <span></span>
                    <span></span>
                    <span></span>
                `;
    }
})
// main Nav - End

// dropDown - Start
let dropDown = document.querySelectorAll(".expand");

dropDown.forEach(function(el){
    el.addEventListener("click",function(){
        el.classList.toggle("show")
    })
})
// dropDown - End

// Change color - Start
let img = document.getElementById('hero-img');
let span = document.getElementById('span');
let green = document.getElementById('green');
let red = document.getElementById('red');
let blue = document.getElementById('blue');

function greenClr(){
    img.setAttribute("src", "./assets/images/chair-hero01.png");
    span.style.color= '#c8ff0b'
    green.style.borderRadius = '50%'
    red.style.borderRadius = "5px";
    blue.style.borderRadius = "5px";
}
function redClr(){
    img.setAttribute("src","./assets/images/chair-hero02.png")
    span.style.color = "#ee5519";
    red.style.borderRadius = "50%";
    green.style.borderRadius = "5px";
    blue.style.borderRadius = "5px";
}
function blueClr(){
    img.setAttribute("src","./assets/images/chair-hero03.png")
    span.style.color = "#17a2b8";
    blue.style.borderRadius = "50%";
    red.style.borderRadius = "5px";
    green.style.borderRadius = "5px";
}
// Change color - End

// Slider - Start
let slider = document.getElementById("slider")
let chairZoom = document.getElementById("chair-zoom");
i = 1
b = 1
setInterval(function(){
    slider.setAttribute("src", `./assets/images/chair0${i++}.png`);
    chairZoom.setAttribute("src", `./assets/images/chair_zoom0${b++}.png`);
    if(i === 4){
        i = 1
    }
    if(b === 4){
        b = 1
    }
},2000)
// Slider - End