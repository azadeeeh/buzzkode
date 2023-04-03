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
var overviewBTN = document.getElementById("overview");
var notesBTN = document.getElementById("notes");
var announcementBTN = document.getElementById("announcement");
var description = document.getElementById("description");
var overviewDes = document.getElementById("overview-des");
var notesDes = document.getElementById("notes-des");
var announcementDes = document.getElementById("announcement-des");

//collapsibale list
function button(y) {
  var x = document.getElementById("list");
  var z = document.getElementById("videoSection");
  var des = document.getElementById("description");
  var btnBar = document.getElementById("button-bar");
  if (x.style.display == "none") {
    x.style.display = "block";
    z.style.width = "60%";
    btnBar.style.left = "650px";
    btnBar.style.top = "800px";
    des.style.top = "800px";
    des.style.left = "620px";

    document
      .querySelector("#hideButton i")
      .classList.replace("fa-forward", "fa-backward");
  } else {
    x.style.display = "none";
    z.style.width = "100%";
    btnBar.style.left = "250px";
    btnBar.style.top = "1200px";
    des.style.top = "1200px";
    des.style.left = "220px";

    document
      .querySelector("#hideButton i")
      .classList.replace("fa-backward", "fa-forward");
  }
}

//goBack

function goBack() {
  window.history.back();
}

//change the color of the clicked list item and the text in title Box

for (li of listItems) {
  li.addEventListener("click", function () {
    var x = document.querySelectorAll(".active-bar");

    for (var j = 0; j < x.length; j++) {
      x[j].classList.remove("active-bar");
    }
    titleboxText.innerHTML = this.title;
    this.classList.add("active-bar");

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
  range.max = Math.floor(video.duration);
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

overviewBTN.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-item");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-item");
  }
  description.innerHTML = overviewDes.innerHTML;
  overviewBTN.classList.add("active-item");
});

function getID(a) {
  var i = a.slice(-2);
  if (overviewBTN.classList == "active-item") {
    overviewDes.innerHTML = document.getElementById(i).innerHTML;
    description.innerHTML = overviewDes.innerHTML;
  } else if (notesBTN.classList || announcementBTN.classlist == "active-item") {
    overviewDes.innerHTML = document.getElementById(i).innerHTML;
  }
}

notesBTN.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-item");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-item");
  }
  description.innerHTML = notesDes.innerHTML;
  notesBTN.classList.add("active-item");
});

announcementBTN.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-item");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-item");
  }
  description.innerHTML = announcementDes.innerHTML;
  announcementBTN.classList.add("active-item");
});

/*overviewBTN.addEventListener("click", function () {
  notesBTN.style.color = "gray";
  announcementBTN.style.color = "gray";
  description.innerHTML = overviewDes.innerHTML;
  overviewBTN.style.color = "black";
});

notesBTN.addEventListener("click", function () {
  overviewBTN.style.color = "gray";
  announcementBTN.style.color = "gray";
  description.innerHTML = notesDes.innerHTML;
  notesBTN.style.color = "black";
});

announcementBTN.addEventListener("click", function () {
  overviewBTN.style.color = "gray";
  notesBTN.style.color = "gray";
  description.innerHTML = announcementDes.innerHTML;
  announcementBTN.style.color = "black";
});*/
