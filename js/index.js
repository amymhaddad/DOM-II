
//QUestions
// event.target.style.size = "50px"; -->Why doesn't this work?
//When to use event 
//When to use event.target
//challenge looping through elements and applying the addEventListener to each on (ex 1)


// let allNavItems = document.querySelectorAll('a');

// for (let i=0; i<=allNavItems.length; i++) {
//     eachItem = allNavItems[i];
// }



//eventlistener 1 
let navItem = document.querySelector('a');

navItem.addEventListener("mouseover", function(event) {
     event.target.style.color = "lightblue";
});

navItem.addEventListener("mouseleave", function(event) {
    event.target.style.color = "black";
});

//eventlistener 2
navItem.addEventListener("click", function(){
    navItem.style.background = "gray";
})

navItem.addEventListener("mouseleave", function(){
    navItem.style.background = "white";
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


// eventlistener 4 -- unclear why this doesn't work
// let oneButton = document.querySelector('.btn');
// oneButton.addEventListener("dbclick", function(){
//    oneButton.style.background = "yellow";
// })


//Eventlistener 5 
let contentChange = document.querySelectorAll(".text-content p");

// for (let i=0; i<=contentChange.length; i++) {
//     let change = contentChange[i];
//     change.addEventListener("mouseover", function() {
//         change.innerHTML = "Ready to travel!"
//     })
// }


//Eventlistener 6 -- why does this not work?
// let singleButton = document.querySelector('.btn');
// singleButton.addEventListener("dblclick", function(event) {
//     event.target.style.color = "red";
//     // singleButton.style.color = "red";
//     debugger
// })


//Event listener 7 
const headers = document.querySelector("h2");

headers.addEventListener("mouseenter", function() {
    headers.style.color = "green";
})

headers.addEventListener("mouseleave", function() {
    headers.style.color = "black";
})




debugger