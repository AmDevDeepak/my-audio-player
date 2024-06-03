var songsArr = [
  {
    songName: "Pehle Bhi Main",
    url: "./songs/pehle bhi main.mp3",
    poster: "./posters/PehleBhiMain2.png",
  },
  {
    songName: "Akhiyaan Gulaab",
    url: "./songs/akhiyaan gulaab.mp3",
    poster: "./posters/akhiGulaab.png",
  },
  {
    songName: "Naina",
    url: "./songs/naina.mp3",
    poster: "./posters/naina.png",
  },
  {
    songName: "Matak Chalungi",
    url: "./songs/matak chalungi.mp3",
    poster: "./posters/matak.png",
  },
];

var allSongs = document.querySelector('.allSongs');
var poster = document.querySelector('.left');
var play = document.querySelector('#play');
var backward = document.querySelector('#backward');
var forward = document.querySelector('#forward');


var audio = new Audio();
var selectedSong = 0;

function displaySongs() {
  var clutter = "";
  songsArr.forEach((e, idx) => {
    clutter += ` <div class="song-card" id=${idx}>
                    <div class="part1">
                        <img src="${e.poster}" alt="">
                        <h2>${e.songName}</h2>
                    </div>
                    <h6>3:04</h6>
            </div> `;
  });
  document.querySelector(".allSongs").innerHTML = clutter;  
  audio.src = songsArr[selectedSong].url;
  poster.style.backgroundImage = `url(${songsArr[selectedSong].poster})`;
}
displaySongs();

  allSongs.addEventListener("click", (dets) => {
    selectedSong = dets.target.id;
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    displaySongs();
    audio.play();
  });


// Play, back, forward
var flag = false;
play.addEventListener('click', () => {
  if (!flag) {
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    displaySongs();
    audio.play();
    flag = true;
  } else {
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    displaySongs();
    audio.pause();
    flag = false;
  }
});

forward.addEventListener('click', (dets) => {
  if (selectedSong < songsArr.length - 1) {
    selectedSong++;
    displaySongs();
    audio.play();
  }
  else {
    forward.style.opacity = 0.4;
  }
})

backward.addEventListener('click', (dets) => {
  if (selectedSong > 0) {
    selectedSong--;
    displaySongs();
    audio.play();
  }
  else {
    backward.style.opacity = 0.4;
  }
})