/**var people = [
  {
    username: "azadeh",
    password: "hi",
  },
  {
    username: "alireza",
    password: "bye",
  },
  {
    username: "sina",
    password: "hello",
  },
  {
    username: "taha",
    password: "goodbye",
  },
];**/

async function getInfo() {
  const response = await fetch("http://104.254.245.176/bazkode/people.json");
  const data = await response.json();
  //console.log(data);
  //console.log(data.people[1].username);
  //console.log(data.people.length);
  var username = document.getElementById("inp_username").value;
  var password = document.getElementById("inp_password").value;
  for (i = 0; i < data.people.length; i++) {
    if (
      username == data.people[i].username &&
      password == data.people[i].password
    ) {
      console.log(username + " is logged in! ");
      location.replace("./profileNew.html");
      return;
    }
  }
  console.log("wrong username or password");
  alert("wrong username and password,please try again");
}



/**function getInfo() {
  var username = document.getElementById("inp_username").value;
  var password = document.getElementById("inp_password").value;
  /**console.log(
    "you're username is " + username + "and your password is " + password
  );**/

/**for (i = 0; i < people.length; i++) {
    if (username == people[i].username && password == people[i].password) {
      console.log(username + " is logged in! ");
      return;
    }
  }
  console.log("wrong username and password");
}**/
