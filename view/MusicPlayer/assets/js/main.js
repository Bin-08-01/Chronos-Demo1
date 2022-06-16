var musicApi = "http://localhost:3000/music";
// const musicApi = "https://api.npoint.io/f3010750bbfeea1107dc/music";
// const musicApi = "https://bin-08-01.github.io/Chronos-Demo2/database/music.json";

let range = document.querySelector("#range");
range.addEventListener("onchange", handleChange);
var audioBox = document.querySelector("#song-audio-tag");
var index = 0;

let checkLoop = false;
let checkShuffe = false;

let start = () => {
  getSongs(renderFrame);
};

start();

function getSongs(callback) {
  fetch(musicApi)
    .then((Response) => {
      return Response.json();
    })
    .then(callback);
}

function renderFrame(songs) {
  var Frame = document.querySelector("#list-music");
  var html = songs.map((song, index) => {
    return `
            <li class="class-li-${song.id}">
                <div class="music-box">
                    <div class="avatar-block">
                        <a href="#" class="${song.link}" onclick="playMusicFunc('${song.link}', '${song.name}', '${song.singer}', '${song.time}', '${song.picture}', '${song.id}', ${index}   )">
                            <img src="${song.picture}"      title="Picture ${song.name}">
                            <i class="ti-control-play play-icon"></i>
                        </a>
                    </div>
                    <div class="info-block">
                        <a href="" onclick="playMusicFunc(${song.link})"><h4>${song.name}</h4></a>
                        <a href="" onclick="playMusicFunc(${song.link})"><p>${song.singer}</p></a>
                    </div>
                    <div class="func-icon">
                        <a href="#"><i class="ti-heart"></i></a>
                        <a href="#"><i class="ti-microphone-alt"></i></a>
                        <a href="#"><i class="ti-info-alt"></i></a>
                    </div>
                    <div class="time-class-${song.id} time-class">
                        <span>${song.time}</span>
                    </div>
                </div>
            </li>
        `;
  });

  Frame.innerHTML = html.join("");
}

function playMusicFunc(link, name1, name2, time, picture, id, index) {
  indexSong = id - 1;
  let playIcon = document.querySelector(".play");
  let playIcon2 = document.querySelectorAll(".play-icon");
  let avatar = document.querySelector("#avatar-music");
  let Div = document.querySelector(`.class-li-${id}>.music-box`);
  avatar.src = picture;
  playIcon.classList.add("ti-control-pause");
  audioBox.src = link;
  song.play();
  let nameSong = document.querySelector(".name-song");
  let nameSinger = document.querySelector(".name-singer");
  Div.setAttribute("background-color", "grey");
  nameSong.textContent = name1;
  nameSinger.textContent = name2;
  //   playIcon2.classList.add("ti-control-pause");
  playIcon2.forEach((icon) => {
    icon.classList.remove("ti-control-pause");
    icon.classList.add("ti-control-play");
  });
  playIcon2[index].classList.add("ti-control-pause");
  setTimeDuration(id);
}

//Auto  get next song
function setTimeDuration() {
  let Timeduration = document.querySelector(".duration");
  let Timeremaining = document.querySelector(".remaining");

  var audioBox = document.querySelector("#song-audio-tag");
  const { duration, currentTime } = audioBox;
  if (duration === currentTime) {
    getNextSong();
  }
  range.max = duration;
  range.value = currentTime;
  if (!duration) {
    Timeduration.textContent = "00:00";
  } else {
    Timeduration.textContent = formatTime(currentTime);
    Timeremaining.textContent = `-${formatTime(duration - currentTime)}`;
  }
  range.addEventListener("change", handleChange);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

setTimeDuration();
setInterval(setTimeDuration, 1000);

function handleChange() {
  audioBox.currentTime = range.value;
}

function getNextSong() {
  fetch(musicApi)
    .then((Response) => {
      return Response.json();
    })
    .then((datas) => {
      let x = [];
      let y = [];
      datas.forEach((data) => {
        x.push(data.link);
        y.push(data);
      });
      if (checkLoop === true) {
        changeSong(1, x, y);
      } else if (checkLoop === false && checkShuffe === false) {
        changeSong(0, x, y);
      } else if (checkShuffe) {
        changeSong(-1, x, y);
      }

      function changeSong(dir, x, y) {
        if (dir === 1) {
          if (indexSong >= x.length - 1) {
            indexSong = 0;
          } else {
            indexSong++;
          }
        } else if (dir === 0) {
          if (indexSong >= x.length - 1) {
            // document.querySelector("#song-audio-tag").pause();
            return 0;
          }
          indexSong++;
        } else if (dir === -1) {
          indexSong = Math.floor(Math.random() * x.length);
        }
        let avatar1 = document.querySelector("#avatar-music");
        let nameSong1 = document.querySelector(".name-song");
        let nameSinger1 = document.querySelector(".name-singer");

        avatar1.src = y[indexSong].picture;
        nameSong1.textContent = y[indexSong].name;

        nameSinger1.textContent = y[indexSong].singer;
        audioBox.setAttribute("src", x[indexSong]);
        audioBox.play();
        checkPlayBtn = false;
        playIcon.classList.add("ti-control-pause");
      }
    });
}

let shuffeBtn = document.querySelector(".shuffle");
let loopBtn = document.querySelector(".loop");

shuffeBtn.onclick = () => {
  checkShuffe = !checkShuffe;
  shuffeBtn.classList.toggle("hover-future");
};

loopBtn.onclick = () => {
  checkLoop = !checkLoop;
  loopBtn.classList.toggle("hover-future");
};
