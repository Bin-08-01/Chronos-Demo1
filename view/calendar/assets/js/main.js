let monthEle = document.querySelector(".month");
let yearEle = document.querySelector(".year");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
let dateEle = document.querySelector(".date-container");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function displayInfo() {
  let currentMonthName = new Date(currentYear, currentMonth).toLocaleString(
    "en-us",
    { month: "long" }
  );

  monthEle.innerText = currentMonthName;
  yearEle.innerText = currentYear;
  renderDate();
}

function getDaysInMonth() {
  return new Date(currentYear, currentMonth + 1, 0).getDate();
}

function getStartDayInMonth() {
  return new Date(currentYear, currentMonth, 1).getDay();
}

function activeCurrentDay(day) {
  let day1 = new Date().toDateString();
  let day2 = new Date(currentYear, currentMonth, day).toDateString();
  return day1 == day2 ? "active" : "";
}

function renderDate() {
  let daysInMonth = getDaysInMonth();
  let startDay = getStartDayInMonth();

  dateEle.innerHTML = "";

  for (let i = 0; i < startDay; i++) {
    dateEle.innerHTML += `
            <div class="day none-day"></div>
        `;
  }

  for (let i = 0; i < daysInMonth; i++) {
    dateEle.innerHTML += `
            <div class="day day-${i + 1} ${activeCurrentDay(
      i + 1
    )}" onclick="addNote(${i + 1})">${i + 1}<div class="day-log day-log-${
      i + 1
    }">
      <i class="fa-solid fa-xmark"></i>
      <input placeholder="Add title..." class="title"/>
      <div class="time">
        <input type="time" class="time-1"/>
        <input type="time" class="time-2"/>
      </div>
      <textarea name="" id="text-area-${
        i + 1
      }" cols="30" rows="8" placeholder="Add description..."></textarea>
    </div></div>
        `;
  }
  for (let i = 0; i < 42 - startDay - daysInMonth; i++) {
    dateEle.innerHTML += `
              <div class="day none-day"></div>
          `;
  }
}

btnNext.addEventListener("click", function () {
  if (currentMonth == 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  displayInfo();
});

btnPrev.addEventListener("click", function () {
  if (currentMonth == 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  displayInfo();
});

function addNote(day) {
  const focusBlock = document.querySelector(`.day-${day}`);
  const allBlock = document.querySelectorAll(".day-log");
  const block = document.querySelector(`.day-log-${day}`);
  allBlock.forEach((element) => {
    if (element != block) {
      element.classList.remove("display-flex");
      element.parentElement.classList.remove("focus");
    }
  });
  block.classList.toggle("display-flex");
  focusBlock.classList.toggle("focus");
  block.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

window.onload = displayInfo;
