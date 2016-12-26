var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");
    } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
    }
});


var link = document.querySelector(".product-of-week__btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content--show");
    overlay.classList.add("modal-overlay--show");
});

overlay.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content--show");
    overlay.classList.remove("modal-overlay--show");
});