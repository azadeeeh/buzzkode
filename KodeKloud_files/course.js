var hideButton = document.getElementById("hideButton");
var play = document.getElementById("play");
var range = document.getElementById("range");
var videoTime = document.getElementById("videoTime");
var videoDuration = document.getElementById("videoDuration");
var video = document.getElementById("video");
var mutebtn = document.getElementById("mutebtn");
var volSlider = document.getElementById("volSlider");
var fullscreenbtn = document.getElementById("fullscreenbtn");
var overlaybtn = document.getElementById("overlaybtn");
var textColor = document.getElementById("textColor");
var myList = document.getElementById("myList");
var listItems = myList.getElementsByTagName("li");
var titleboxText = document.getElementById("titleboxText");
var video_player = document.getElementById("video_player");
var links = video_player.getElementsByTagName("a");

//collapsibale list
function button(y) {
  var x = document.getElementById("list");
  var z = document.getElementById("videoSection");
  if (x.style.display == "none") {
    x.style.display = "block";
    z.style.width = "60%";
    document
      .querySelector("#hideButton i")
      .classList.replace("fa-forward", "fa-backward");
  } else {
    x.style.display = "none";
    z.style.width = "100%";
    document
      .querySelector("#hideButton i")
      .classList.replace("fa-backward", "fa-forward");
  }
}

//change the color of the clicked list item and the text in title Box

for (li of listItems) {
  li.addEventListener("click", function () {
    var x = document.querySelectorAll(".active");
    for (var j = 0; j < x.length; j++) {
      x[j].classList.remove("active");
    }
    titleboxText.innerHTML = this.title;
    this.classList.add("active");
    document.querySelector("#play i").classList.replace("fa-pause", "fa-play");
  });
}

//customized player components
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

mutebtn.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    volSlider.value = 100;
    document
      .querySelector("#mutebtn i")
      .classList.replace("fa-volume-up", "fa-volume-mute");
  } else {
    video.muted = true;
    volSlider.value = 0;
    document
      .querySelector("#mutebtn i")
      .classList.replace("fa-volume-mute", "fa-volume-up");
  }
});

volSlider.addEventListener("change", function () {
  video.volume = volSlider.value / 100;

  if (video.volume == 0) {
    document
      .querySelector("#mutebtn i")
      .classList.replace("fa-volume-mute", "fa-volume-up");
  } else {
    document
      .querySelector("#mutebtn i")
      .classList.replace("fa-volume-up", "fa-volume-mute");
  }
});

fullscreenbtn.addEventListener("click", function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

overlaybtn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    document.querySelector("#play i").classList.replace("fa-play", "fa-pause");
  } else {
    video.pause();
    document.querySelector("#play i").classList.replace("fa-pause", "fa-play");
  }
});

//loading the video on the same page

for (var i = 0; i < links.length; i++) {
  links[i].onclick = handler;
}

function handler(e) {
  e.preventDefault();
  videotarget = this.getAttribute("href");
  filename = videotarget.substr(0, videotarget.lastIndexOf(".")) || videotarget;
  video = document.querySelector("#video_player video");
  video.removeAttribute("poster");
  source = document.querySelectorAll("#video_player video source");
  source[0].src = filename + ".mp4";
  source[1].src = filename + ".webm";
  video.load();
  //video.play();
}
