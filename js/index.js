
const navHeader = document.querySelector("nav");

const navLinks = document.querySelectorAll(".nav-link");

const logoHeader = document.querySelector(".logo-heading");


const pickDestination = document.querySelector(".content-destination h2");







const destination = document.querySelectorAll(".destination");


//Put stopPropogation on the inner item to prevent it from bubbling
// function color(event) {
//     event.target.style.color = "blue";
//     alert('hello')
//     event.stopPropagation()
// }


function changeBackgroundDiv1(event) {
    destination[0].style.backgroundColor = "yellow";
    alert('yellow')
  
}

function changeBackgroundDiv2(event){
    destination[0].style.backgroundColor = "red"
    alert('red')
    event.stopPropagation()
    // event.target.style.color = "red";
}


destination.forEach(dest => {
    // dest.addEventListener("click", color);
    dest.addEventListener("click", changeBackgroundDiv1);
})


const signUpButtons = document.querySelectorAll(".btn");

signUpButtons.forEach(btn => {
    // btn.addEventListener("click", color);
    btn.addEventListener("click", changeBackgroundDiv2);
})






// function background(event) {
//     event.target.style.background = "pink";
// }






signUpButtons.forEach(btn => {
    btn.addEventListener("mouseenter", backgroundV2);
})



//Correct ex of stopPropagation()?
function backgroundV2(event) {
    btn.stopPropagation()
    event.target.style.color = "green";
}

signUpButtons.forEach(btn => {
    btn.addEventListener("click", background);
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
