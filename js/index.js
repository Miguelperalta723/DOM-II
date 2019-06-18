// Your code goes here
//click >>>
// mouseover >>>
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick >>>

const funBus = document.querySelector('h1');
const container = document.querySelector('.home');
const img = document.querySelectorAll('img');
const buttons = document.querySelectorAll('.btn');
const header = document.querySelector('header');
const footer = document.querySelector('.footer');
const destinations = document.querySelector('.content-destination');
const links = document.querySelector('nav');


funBus.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'dodgerblue';
    setTimeout(function(){
        event.target.style.backgroundColor = 'white';
    }, 500)
})

container.addEventListener('dblclick', function(event){
    event.target.style.display = 'none';
    destinations.addEventListener('dblclick', function(event){
        event.target.style.backgroundColor = "pink";
        event.stopPropagation;
    })
    setTimeout(function(){
        event.target.style.display = 'flex';
    }, 5000)
})


img.forEach(function(image){
    image.addEventListener('click', function(event){
        event.target.style.border = '2px solid green';
    })
})
buttons.forEach(function(button){
    button.addEventListener('mousedown', function(event){
        event.target.style.borderRadius = '50%';
        setTimeout(function(){
        event.target.style.borderRadius = '15px';
    }, 2000)
    })
})

header.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'orange';
    setTimeout(function(){
        event.target.style.backgroundColor = 'white';
    }, 500)
})

window.addEventListener('load', function(){
    alert('im loaded');
})


footer.addEventListener('contextmenu', function(){
   event.preventDefault();
})


const body = document.querySelector('body');
body.addEventListener("keydown", function(){
   header.style.opacity = "0.3";
});


let allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => {
   p.addEventListener('copy', function(event){        
       event.target.style.color = 'yellow';
   })
})

const middleImg = document.querySelector(".img-content");
// Drags image to scale in size
middleImg.addEventListener('drag', (event) => {event.target.style.transform = 'scale(0.75)';
});

links.addEventListener('click', function(event){
    event.preventDefault;
})


