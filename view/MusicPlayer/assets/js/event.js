const Api = "http://localhost:3000/music";
// const Api = "https://api.npoint.io/f3010750bbfeea1107dc/music";
// const Api = "https://bin-08-01.github.io/Chronos-Demo2/database/music.json";

const playBtn = document.querySelector(".play");
const song = document.querySelector("#song-audio-tag");
const nextBtn = document.querySelector(".next");
const preBtn = document.querySelector(".previous");
const playIcon = document.querySelector(".play");
let checkPlayBtn = true;
const volumeRange = document.querySelector("#range-volume");
const volumeBtn = document.querySelector(".volume");
let indexSong = 0;
let volumeValue = 100;

playBtn.onclick = () => {
  if (checkPlayBtn) {
    song.play();
    checkPlayBtn = false;
    playIcon.classList.add("ti-control-pause");
  } else {
    song.pause();
    checkPlayBtn = true;
    playIcon.classList.remove("ti-control-pause");
  }
};

function getSongs() {
  fetch(Api)
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
      nextBtn.onclick = () => {
        changeSong(1, x, y);
      };

      preBtn.onclick = () => {
        changeSong(-1, x, y);
      };

      function changeSong(dir, x, y) {
        if (dir === 1) {
          if (indexSong >= x.length - 1) {
            indexSong = 0;
          } else {
            indexSong++;
          }
        } else if (dir === -1) {
          if (indexSong <= 0) {
            indexSong = x.length - 1;
          } else {
            indexSong--;
          }
        }
        let avatar = document.querySelector("#avatar-music");
        let nameSong = document.querySelector(".name-song");
        let nameSinger = document.querySelector(".name-singer");
        avatar.src = y[indexSong].picture;
        nameSong.textContent = y[indexSong].name;
        nameSinger.textContent = y[indexSong].singer;
        song.setAttribute("src", x[indexSong]);
        song.play();
        checkPlayBtn = false;
        playIcon.classList.add("ti-control-pause");
      }
    });
}

getSongs();

volumeRange.addEventListener("change", () => {
  song.volume = volumeRange.value / 100;
  volumeValue = volumeRange.value;
});

volumeBtn.addEventListener("click", () => {
  if (volumeRange.value != 0) {
    volumeRange.value = 0;
    song.volume = 0;
  } else {
    volumeRange.value = volumeValue;
    song.volume = volumeValue / 100;
  }
});
