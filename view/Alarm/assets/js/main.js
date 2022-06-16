const display = document.getElementById('clock');
const setBtn = document.querySelector('.set-alarm');
const alarmListFrame = document.querySelector('#list-alarm');
const audio = new Audio('https://cdn.tainhacchuong24h.com/download.php?name=B%C3%A1o+Th%E1%BB%A9c+iPhone+11-tainhacchuong24h.com&file=uploads/f14000/b%C3%A1o-th%E1%BB%A9c-iphone-11.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
let alarmList = [];
let html = [];


function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    display.innerText = `${hour} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

setBtn.addEventListener('click', setAlarm);

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    const input = document.querySelector('.input-alarm');
    alarmList.push(alarmTime);

    // console.log(hour + ' ' + minutes);
    if (input.value != "") {
        let timeToAlarm = new Date(alarmTime);
        let hour = formatTime(timeToAlarm.getHours());
        let minutes = formatTime(timeToAlarm.getMinutes());

        html.push(`
        <li>
            <h4>
                <span>${hour}:${minutes}</span>
                <i class="ti-trash"></i>
            </h4>
        </li>
    `);
        alarmListFrame.innerHTML = html.join('');
    }


    alarmFunc(alarmList);
}

function alarmFunc() {

    if (alarmList.length > 0) {
        const current = new Date();
        const timeToAlarm = new Date(alarmList[0]);

        if (timeToAlarm > current) {
            let timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }
}



setInterval(updateTime, 1000);

setInterval(() => {
    alarmFunc();
    alarmList.shift();

}, 1000);