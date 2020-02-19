
//stopPropagation() example 1
const anchors = document.querySelectorAll("a");
anchors.forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        anchor.style.backgroundColor = 'red';
        event.stopPropagation();
    })
})

const nav = document.querySelector(".nav");
nav.addEventListener("click", function() {
    nav.style.backgroundColor = 'blue';
})

const navContainer = document.querySelector(".nav-container");
navContainer.addEventListener("click", function() {
    navContainer.style.backgroundColor = 'green';
})

//stopPropagation() example 2
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        button.innerHTML = "Mouse Entered!";
        event.stopPropagation();
    })
})

const destinations = document.querySelectorAll(".destination");
destinations.forEach(destination => {
    destination.addEventListener("click", function() {
        destination.style.backgroundColor = "red";
    })
})

const allDestinations = document.querySelector(".content-pick");
allDestinations.addEventListener("click", function() {
    allDestinations.style.backgroundColor = "orange";
})


//Trying to get preventDefault() to work on the button 
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        button.innerHTML = "<code>preventDefault()<code> won't let you click";
        event.preventDefault();
    })
})

//Use preventDefault to prevent re-loading a page
const anchors = document.querySelectorAll("a");
anchors.forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
    })
})