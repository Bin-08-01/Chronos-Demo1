const eye1 = document.querySelector(".fa-eye1");
const eyeSlash1 = document.querySelector(".fa-eye-slash1");
const eye2 = document.querySelector(".sign-up-eye");
const eye3 = document.querySelector(".sign-up-eye-retype");
const eyeSlash2 = document.querySelector(".sign-up-eye-slash");
const eyeSlash3 = document.querySelector(".sign-up-eye-slash-retype");

eyeSlash1.addEventListener("click", function () {
  eye1.classList.add("open2");
  eyeSlash1.classList.add("no-display");
  document.getElementById("pw1").type = "text";
});

eye1.addEventListener("click", function () {
  eyeSlash1.classList.remove("no-display");
  eye1.classList.remove("open2");
  document.getElementById("pw1").type = "password";
});

eyeSlash2.addEventListener("click", function () {
  eye2.classList.add("open2");
  eyeSlash2.classList.add("no-display");
  document.getElementById("pw2").type = "text";
});

eye2.addEventListener("click", function () {
  eyeSlash2.classList.remove("no-display");
  eye2.classList.remove("open2");
  document.getElementById("pw2").type = "password";
});

eyeSlash3.addEventListener("click", function () {
  eye3.classList.add("open2");
  eyeSlash3.classList.add("no-display");
  document.getElementById("pw3").type = "text";
});

eye3.addEventListener("click", function () {
  eyeSlash3.classList.remove("no-display");
  eye3.classList.remove("open2");
  document.getElementById("pw3").type = "password";
});

function SignInAction() {
  const UserName = document.getElementById("sign-in__username");
  const Password = document.getElementById("pw1");
  if (UserName.value === "admin" && Password.value === "123456") {
    Password.classList.add("wrong-validation");
    location.assign("./view/chronos/chronos.html");
  } else {
    if (UserName.value !== "admin") {
      UserName.classList.add("wrong-validation");
    } else {
      UserName.classList.remove("wrong-validation");
    }
    if (Password.value !== "123456") {
      Password.classList.add("wrong-validation");
    }
  }
}

function funcSignIn(event) {
  if (event.keyCode === 13) {
    SignInAction();
  }
}
