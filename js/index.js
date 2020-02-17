
const navHeader = document.querySelector("nav");

const navLinks = document.querySelectorAll(".nav-link");

const logoHeader = document.querySelector(".logo-heading");

const signUpButtons = document.querySelectorAll(".btn");

const pickDestination = document.querySelector(".content-destination h2");



navLinks.forEach(link => {
    link.addEventListener("mouseenter", function(event) {
        if (link == navLinks[0]) {
            event.preventDefault();
            event.target.style.background = "black";
        }
        else {
            event.target.style.background = "lightblue";
        }
    })
} )




navLinks.forEach(link => {
    link.addEventListener("mouseleave", event => {
        event.target.style.background = "white";
    })
})


navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.target.style.color = "orange";
    })
})


navHeader.addEventListener("dblclick", function(event) {
    event.target.style.color = "green";
})


logoHeader.addEventListener("mouseover", function(event) {
    event.target.style.width = "100px";
})


signUpButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.background = "pink";
    })
})

signUpButtons.forEach(button => {
    button.addEventListener("mouseleave", event => {
        event.target.style.background = "lightblue";
    } )
})


pickDestination.addEventListener("mouseenter", function() {
    alert("You'll have a great trip!")
})
