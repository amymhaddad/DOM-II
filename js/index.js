
const navHeader = document.querySelector("nav");

const navLinks = document.querySelectorAll(".nav-link");

const logoHeader = document.querySelector(".logo-heading");

const signUpButtons = document.querySelectorAll(".btn");

const pickDestination = document.querySelector(".content-destination h2");



function background(event) {
    event.target.style.background = "pink";
}

function color(event) {
    event.target.style.color = "blue";
}

//Correct ex of stopPropagation()?
function backgroundV2(event) {
    btn.stopPropagation()
    event.target.style.color = "green";
}

signUpButtons.forEach(btn => {
    btn.addEventListener("click", background);
})

signUpButtons.forEach(btn => {
    btn.addEventListener("click", color);
})

signUpButtons.forEach(btn => {
    btn.addEventListener("mouseenter", backgroundV2);
})


// navLinks.forEach(link => {
//     link.addEventListener("mouseleave", event => {
//         event.target.style.background = "white";
//     })
// })



function styleLinks(event) {
    navLinks.forEach(link => {
        event.target.style.color = "orange";    
    })
}

//event.stopPropagation() not working 
function mouseLeaves(event) {
    navLinks.forEach(link => {
        event.stopPropagation();
    })
}

navHeader.addEventListener("click", styleLinks);

navHeader.addEventListener("mouseleave", mouseLeaves);

// navHeader.addEventListener("dblclick", function(event) {
//     event.target.style.color = "green";
// })


logoHeader.addEventListener("mouseover", function(event) {
    event.target.style.width = "100px";
})



// pickDestination.addEventListener("mouseenter", function() {
//     alert("You'll have a great trip!")
// })
