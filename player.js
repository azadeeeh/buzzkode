const myVideo = document.getElementById("myVideo");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnStop = document.getElementById("btnStop");
const timeOut = document.getElementById("timeOut");
const vidNumOut = document.getElementById("vidNum");
let timer = null;

btnPlay.addEventListener("click", vidAction);
btnPause.addEventListener("click", vidAction);
btnStop.addEventListener("click", vidAction);
btnNext.addEventListener("click", nextVideo);
myVideo.addEventListener("ended", vidEnded);
