
//QUestions
// event.target.style.size = "50px"; -->Why doesn't this work?

//eventlistener 1 
let navItem = document.querySelector('.nav');

navItem.addEventListener("mouseover", function(event) {
     event.target.style.color = "lightblue";
});

//eventlistener 2
navItem.addEventListener("click", function(){
    navItem.style.background = "gray";
})

//eventlistener 3 -->refactor using forEaach
//https://gist.github.com/kuznetsovandrey76/39a1fba45c212c32415d000743211ab9
let button = document.querySelectorAll('.destination .btn');

for (let i=0; i<button.length; i++) {
    let result = button[i];
    result.addEventListener('click', function() {
        alert("Get ready for a great trip!");
    })
}

// eventlistener 4 -- unclear why this doesn't work
// button.forEach((element => {
//     element.addEventListener("click", function(){
//         element.style.background = "pink";
//     })
// })




// debugger