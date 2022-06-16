const signin = document.querySelector("#sign-in");
const modal = document.querySelector("#sign-pop-up-div");
const formSignIn = document.querySelector("#form-sign-in");
const formSignUp = document.querySelector("#form-sign-up");
const formStart = document.querySelector("#form-start");
const signUpBtn = document.querySelector("#button-sign-up");
const registernow = document.querySelector("#register-now");
const startBtn = document.querySelector("#start-button");
const RegBtn = document.querySelector(".register-btn");
const signin2 = document.querySelector(".sign-in-btn");

formSignIn.addEventListener("click", function(event) {
    event.stopPropagation();
})

formSignUp.addEventListener("click", function(event) {
    event.stopPropagation();
})

formStart.addEventListener("click", function(event) {
    event.stopPropagation();
})

signin.addEventListener("click", function() {
    modal.classList.add("open");
    formSignIn.classList.add("open2");
});

modal.addEventListener("click", function() {
    modal.classList.remove("open");
    formSignIn.classList.remove("open2");
    formSignUp.classList.remove("open2");
    formStart.classList.remove("open3");
});

signUpBtn.addEventListener("click", function() {
    formSignUp.classList.add("open2");
    modal.classList.add("open");
});

registernow.addEventListener("click", function() {
    formSignIn.classList.remove("open2");
    formSignUp.classList.add("open2");
});

startBtn.addEventListener("click", function() {
    modal.classList.add("open");
    formStart.classList.add("open3");
});

RegBtn.addEventListener("click", function() {
    formStart.classList.remove("open3");
    formSignUp.classList.add("open2");
});

signin2.addEventListener("click", function() {
    formStart.classList.remove("open3");
    formSignIn.classList.add("open2");
});

signin2.addEventListener("mouseover", function() {
    RegBtn.classList.add("animation-1")
    signin2.classList.add("animation-2");
});

signin2.addEventListener("mouseout", function() {
    RegBtn.classList.remove("animation-1");
    signin2.classList.remove("animation-2");
});