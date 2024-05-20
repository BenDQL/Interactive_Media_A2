let currentIndex = 0;
const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const returnToStart = document.querySelector("#skip-to-start");
const volumeBtn = document.querySelector("#volume-img");
const fullScreen = document.querySelector("#full-screen");
const nextVideo = document.querySelector("#next");
const planetImg = document.querySelector("#planetBg");
const playlist = document.getElementById("playlist");

const videos = [
  {
    source:
      "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "Video Art",
    cover: "videoCover2",
    artist: "Artist 1",
    description:
      "Meet MiaC, your interactive digital pet! This colorful gadget responds to touch, sound, and motion with lights and adorable sounds, providing endless fun and companionship. Perfect for on-the-go joy!",

    bgImg: "planet2",
  },
  {
    source:
      "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/berry-bunch_handheld-windmill-fan.mp4",
    name: "Crafting Tutorial Video",
    cover: "videoCover1",
    artist: "Artist 2",
    description:
      "Stay cool with the Berry Bunch Handheld Windmill Fan! Compact and cute with colorful blades, it's perfect for on-the-go cooling. Enjoy a refreshing breeze anywhere!",
    bgImg: "planet1",
  },
  {
    source:
      "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "Music Video",
    cover: "videoCover3",
    artist: "Artist 3",
    description:
      "This vibrant gadget responds to touch, sound, and motion with colorful lights and playful sounds. Perfect for bringing joy and entertainment on the go!",
    bgImg: "planet3",
  },
];

/* Video Media Player Control */
video.removeAttribute("controls");
video.addEventListener("timeupdate", () => updateProgressBar());

// Play / Pause
const togglePlayPause = () => {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
};

// Progress bar
const updateProgressBar = () => {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
};

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
const screenSize = () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
    fullScreen.src = "https://img.icons8.com/ios-glyphs/30/full-screen--v1.png";
  } else if (video.exitFullscreen) {
    video.exitFullscreen();
    fullScreen.src = "https://img.icons8.com/ios-glyphs/30/normal-screen.png";
  }
};

const playPrevVideo = () => {
  if (currentIndex <= 0) currentIndex = videos.length;
  video.pause();
  video.currentTime = 0;
  resetVideo();
  // Replace the main content
  currentIndex = currentIndex - 1;
  setup(currentIndex);
};

const playNextVideo = () => {
  if (currentIndex >= videos.length - 1) currentIndex = -1;
  video.pause();
  video.currentTime = 0;
  resetVideo();
  // Replace the main content
  currentIndex = currentIndex + 1;
  setup(currentIndex);
};

const resetVideo = () => {
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
};

/* Generate Playlist */
const generatePlaylist = () => {
  const htmlString = videos.map(
    (video, index) =>
      `<div class="list">
      <div class="imgBox">
        <img src="/images/${video.cover}.svg" />
      </div>
      <div class="content">
        <h2 class="rank">
          <small>#</small>${index + 1}
        </h2>
        <h3>${video.name}</h3>
        <p>${video.artist}</p>
      </div>
    </div>`
  );
  playlist.innerHTML = htmlString.join("");
};

const setup = (index) => {
  const videoDom = document.getElementById("custom-video-player");
  videoDom.src = videos[index].source;
  const videoName = document.getElementById("video-name");
  videoName.textContent = videos[index].name;
  const videoBrief = document.getElementById("video-brief");
  videoBrief.textContent = videos[index].description;
  planetImg.src = `images/${videos[index].bgImg}.svg`;
  const playlistItems = document.querySelectorAll(".box .list");
  playlistItems.forEach((playlistItem) =>
    playlistItem.classList.remove("active")
  );
  playlistItems[index].classList.add("active");
};

generatePlaylist();
setup(currentIndex);

const playlistItems = document.querySelectorAll(".box .list");
playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Replace the main content
    setup(index);
    currentIndex = index;
  });
});
