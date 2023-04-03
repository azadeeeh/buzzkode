var myList = document.getElementById("myList");
var listItems = myList.getElementsByTagName("li");
var profile = document.getElementById("profile");
var account = document.getElementById("account");
var payment = document.getElementById("payment");
var privacy = document.getElementById("privacy");
var mainContent = document.getElementById("main-content");
var profileContent = document.getElementById("profile-content");
var accountContent = document.getElementById("account-content");
var paymentContent = document.getElementById("payment-content");
var privacyContent = document.getElementById("privacy-content");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

profile.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-bar");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-bar");
  }
  mainContent.innerHTML = profileContent.innerHTML;
  profile.classList.add("active-bar");
});

account.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-bar");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-bar");
  }
  mainContent.innerHTML = accountContent.innerHTML;
  account.classList.add("active-bar");
});

payment.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-bar");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-bar");
  }
  mainContent.innerHTML = paymentContent.innerHTML;
  payment.classList.add("active-bar");
});

privacy.addEventListener("click", function () {
  var x = document.querySelectorAll(".active-bar");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active-bar");
  }
  mainContent.innerHTML = privacyContent.innerHTML;
  privacy.classList.add("active-bar");
});
