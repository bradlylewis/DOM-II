// Your code goes here

// Selectors
const nav = document.querySelectorAll('a');
const title = document.querySelector('h1');
const destinationBtn = document.querySelectorAll('.destination .btn');
const boatImg = document.querySelector('.content-destination img');

// Listeners
// 1 - 2) Mouseover & Mouseleave
nav.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.stopPropagation();
        event.target.style.color = "red";
        console.log(event.type)
     })
     element.addEventListener('mouseleave', navBarHover => {
        navBarHover.stopPropagation();
        navBarHover.target.style.color = "#212529";
        console.log(event.type)
     })
});

// 3) Click
for(let i = 0; i < destinationBtn.length; i++) {
    const colors = ['gold', 'red', 'green'];
    destinationBtn[i].addEventListener('click', event => {
        event.target.style.backgroundColor = colors[i];
        console.log(event.type)
    }
)};

// 4) Resize
window.addEventListener('resize', event => {
    alert('Who do you think you are? Resize someone your own size!');
    console.log(event.type)
});

// 5) dblclick
title.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = 'yellow';
    console.log(event.type)
});

// 6) Keydown - using a callback function for this one
function escKey(event) {
    if (event.keyCode === 27) { // Escape key
        alert("Don't press that button!");
    }
    console.log(event.type)
}
document.addEventListener('keydown', escKey)

// 7) Wheel
document.addEventListener('wheel', event => {
    console.log('Scrolling your life away.'), console.log(event.type);;
});

// 8) Load
window.addEventListener("load", event => {
    alert("Houston, we DON'T have a problem.");
    console.log(event.type);
  });

// 9) Focus / Blur

 
boatImg.addEventListener('mousedown', element => {
   element.target.style.visibility = 'hidden';
 });

// 10) GSAP
// const banner = document.querySelector("#banner");
// banner.addEventListener("mousedown", function (){
//   banner.classList.remove("fade-in");
//   TweenMax.to(banner, 1, {opacity: 0});
// });
// banner.addEventListener("mouseup", function (){
//   TweenMax.to(banner, 1, {opacity: 1});
// })
