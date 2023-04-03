var play = document.getElementById("play");
var range = document.getElementById("range");
var videoTime = document.getElementById("videoTime");
var videoDuration = document.getElementById("videoDuration");
var video = document.getElementById("video");

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    document.querySelector("#play i").classList.replace("fa-play", "fa-pause");
  } else {
    video.pause();
    document.querySelector("#play i").classList.replace("fa-pause", "fa-play");
  }
});

range.addEventListener("input", function () {
  video.currentTime = range.value;
  range.max = Math.floor(video.duration);
});

video.addEventListener("timeupdate", function () {
  videoTime.innerHTML = Math.floor(video.currentTime);
  range.value = video.currentTime;
  range.max = math.floor(video.duration);
});

window.onload = function () {
  videoTime.innerHTML = video.currentTime;
  videoDuration.innerHTML = Math.floor(video.duration);
};
