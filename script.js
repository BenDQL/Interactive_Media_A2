const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const returnToStart = document.querySelector("#skip-to-start");
const volumeBtn = document.querySelector("#volume-img");
const fullScreen = document.querySelector("#full-screen");
const nextVideo = document.querySelector("#next");
const planetImg = document.querySelector("#planetBg");

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

const playlistItems = document.querySelectorAll(".box .list");

const videos = [
  {
    source:
      "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/berry-bunch_handheld-windmill-fan.mp4",
    name: "Crafting Tutorial Video",
    cover: "videoCover1",
    description:
      "Stay cool with the Berry Bunch Handheld Windmill Fan! Compact and cute with colorful blades, it's perfect for on-the-go cooling. Enjoy a refreshing breeze anywhere!",
    bgImg: "planet1",
  },
  {
    source:
      "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "Video Art",
    cover: "videoCover2",
    description:
      "Meet MiaC, your interactive digital pet! This colorful gadget responds to touch, sound, and motion with lights and adorable sounds, providing endless fun and companionship. Perfect for on-the-go joy!",

    bgImg: "planet2",
  },
  {
    source:
      "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "Music Video",
    cover: "videoCover3",
    description:
      "This vibrant gadget responds to touch, sound, and motion with colorful lights and playful sounds. Perfect for bringing joy and entertainment on the go!",

    bgImg: "planet3",
  },
];

setup = (currentIndex) => {
  const videoDom = document.getElementById("custom-video-player");
  videoDom.src = videos[currentIndex].source;
  const videoName = document.getElementById("video-name");
  videoName.textContent = videos[currentIndex].name;
  const videoBrief = document.getElementById("video-brief");
  videoBrief.textContent = videos[currentIndex].description;
  planetImg.src = `images/${videos[currentIndex].bgImg}.svg`;
};

playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Replace the main content
    setup(index);

    currentIndex = index;
  });
});

setup(1);

// --------------------

// The following code will show progress of the video

// const progressBarFill= document.querySelector("#porgress-bar-fill");

// function updateProgressBar() {
//   const progress = (myVideo.currentTime / myVideo.duration) * 100;
//   progressBarFill.style.with = progress + "%"
// }
