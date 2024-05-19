/* PlayList Control Section */
let currentIndex = 1;
const carousel = document.querySelector(".carousel");
const planetImg = document.querySelector(".planet");
const playlistItems = document.querySelectorAll(".playlist span");
const playlist = document.querySelector(".playlist");
const playButton = document.querySelector(".play-btn");
const mediaPlayer = document.querySelector(".media-player");

const rotateValue = [-60, 0, 60];

const images = ["planet1", "planet2", "planet3"];

const rotate = (rotateValue) => {
  planetImg.style.transform = `rotate(${rotateValue}deg)`;
};

playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    planetImg.style.backgroundImage = `url(images/${images[index]}.svg)`;
    rotate(rotateValue[index]);
    // Rotate the name as well
    playlist.style.transform = `translate(-50%, -50%) rotate(${-rotateValue[
      index
    ]}deg)`;

    currentIndex = index;
  });
});

const videoPlayControl = (showVideo) => {
  if (showVideo) {
    mediaPlayer.style.visibility = "visible";
    mediaPlayer.style.transform = `scale(1.5)`;
    carousel.style.transform = `translateX(-50%) translateY(20%)`;
  } else {
    mediaPlayer.style.visibility = "hideen";
    mediaPlayer.style.transform = `scale(1)`;
    carousel.style.transform = `translateX(-50%)`;
  }
};

playButton.addEventListener("click", () => videoPlayControl(true));

const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const returnToStart = document.querySelector("#skip-to-start");
const volumeBtn = document.querySelector("#volume-img");
const fullScreen = document.querySelector("#full-screen");
const nextVideo = document.querySelector("#next");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here

//audio mute function
function volumeMute() {
  if (video.muted) {
    volumeBtn.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    volumeBtn.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
  video.muted = !video.muted;
}

//fullscreen function
function screenSize() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
    fullScreen.src = "https://img.icons8.com/ios-glyphs/30/full-screen--v1.png";
  } else if (video.exitFullscreen) {
    video.exitFullscreen();
    fullScreen.src = "https://img.icons8.com/ios-glyphs/30/normal-screen.png";
  }
}

function endMusic() {
  video.ended();
}

// --------------------

// The following code will show progress of the video

// const progressBarFill= document.querySelector("#porgress-bar-fill");

// function updateProgressBar() {
//   const progress = (myVideo.currentTime / myVideo.duration) * 100;
//   progressBarFill.style.with = progress + "%"
// }
