
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



//Why won't this work? Is this where I add preventDefault() to stop the navigation items from refreshing the page
function updateLinks(event) {
    event.target.style.background = "lightblue";
    event.preventDefault();
}

navLinks.forEach(link => {
    link.addEventListener("click", updateLinks);
    debugger
})




// navLinks.forEach(link => {
//     link.addEventListener("mouseenter", function(event) {
//         if (link == navLinks[0]) {
//             event.preventDefault();
//             event.target.style.background = "black";
//         }
//         else {
//             event.target.style.background = "lightblue";
//         }
//     })
// } )



// navLinks.forEach(link => {
//     link.addEventListener("mouseleave", event => {
//         event.target.style.background = "white";
//     })
// })


// navLinks.forEach(link => {
//     link.addEventListener("click", event => {
//         event.target.style.color = "orange";
//     })
// })


navHeader.addEventListener("dblclick", function(event) {
    event.target.style.color = "green";
})


logoHeader.addEventListener("mouseover", function(event) {
    event.target.style.width = "100px";
})



// pickDestination.addEventListener("mouseenter", function() {
//     alert("You'll have a great trip!")
// })
