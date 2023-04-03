var profileBTN = document.getElementById("profile");
var photoBTN = document.getElementById("photo");
var paymentBTN = document.getElementById("payment");
var menueDescriptiion = document.getElementById("menueDescription");
var profileDes = document.getElementById("profile-des");
var photoDes = document.getElementById("photo-des");
var paymentDes = document.getElementById("payment-des");

function greetings() {
  console.log("HellllllO");
}
greetings();

profileBTN.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-bar");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-bar");
  }
  menueDescription.innerHTML = profileDes.innerHTML;
  profileBTN.classList.add("active-bar");
});

photoBTN.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-bar");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-bar");
  }
  menueDescription.innerHTML = photoDes.innerHTML;
  photoBTN.classList.add("active-bar");
});

paymentBTN.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-bar");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-bar");
  }
  menueDescription.innerHTML = paymentDes.innerHTML;
  paymentBTN.classList.add("active-bar");
});
