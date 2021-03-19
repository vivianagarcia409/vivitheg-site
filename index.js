

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navBarMobile');
let bod = document.querySelector('.container')

hamburger.addEventListener('click', function () {
    // hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
});

mybutton = document.querySelector("logo");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.querySelector(".test").onclick = function (event) {
    console.log('this is clicked')
}
let testLinked = document.querySelectorAll(".test")

for (let testLink of testLinked) {
    testLink.onclick = function (event) {
        console.log('this is clicked')
    }

}