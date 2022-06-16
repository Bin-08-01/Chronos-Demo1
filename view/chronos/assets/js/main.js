const icons1 = document.querySelectorAll(".icon-type-1");
const icons2 = document.querySelectorAll(".icon-type-2");
const icons = document.querySelectorAll(".ti-icon");
const frames = document.querySelectorAll(".frame");
const showMoreNoti = document.querySelector("#noti-container i");

icons.forEach((icon, index) => {
  let frame = frames[index];
  icon.addEventListener("click", () => {
    icons.forEach((icon) => icon.classList.remove(icon.classList[3]));
    frames.forEach((frame) => {
      frame.classList.remove(frame.classList[2]);
      document.querySelector(".frame1").classList.remove("display-flex");
    });
    if (icon.classList.contains("icon-type-1")) {
      icon.classList.add("hover1");
    } else {
      icon.classList.add("hover2");
    }
    if (frame.classList.contains("to-do")) {
      document.querySelector(".frame1").classList.add("display-flex");
    }
    frame.classList.add("display-flex");
  });
});

function showNavLogo(event) {
  const userlogoNav = document.querySelector("#navInfo");
  userlogoNav.classList.toggle("display-flex");
  const all = document.querySelector("*");
  all.onclick = () => {
    userlogoNav.classList.remove("display-flex");
  };
  event.stopPropagation();
}

function showNoti(event) {
  const notiContainer = document.querySelector("#noti-container");
  notiContainer.classList.toggle("display-inline");
  const all = document.querySelector("*");
  all.onclick = () => {
    notiContainer.classList.remove("display-inline");
  };
  event.stopPropagation();
}
