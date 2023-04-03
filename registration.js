//const fileSystem = require("browserify-fs");

function saveInfo() {

  var username = document.getElementById("inp_username").value;
  var password = document.getElementById("inp_password").value;
  //var newUser = json.stringify(username);
  //var newPass = json.stringify(password);
  var client = {
      "username" : username ,
      "password" : password
  }
  var data = JSON.stringify(client);
  //fileSystem.writeFile("./people.jason", data)
  console.log(client);




}