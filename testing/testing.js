myList = document.getElementById("myList");
listItems = myList.getElementsByTagName("li");
overView = document.getElementById("overview");
description = document.getElementById("description");

/*for (var i = 0; i < myList.length; i++) {
  listItems.addEventListener("click", function () {
    overView.innerhtml = document.getElementById("2");
  });
}*/

/*for (li of listItems) {
  li.addEventListener("click", function () {
    // document.getElementById("overview").innerHTML = "hello there";
    //overView.innerHTMl = "hello there";
    //alert("hello");
    for (var i = 1; i <= 5; i++) {
      var id = i;
      console.log(id);
      document.getElementById("overview").innerHTML = document.getElementById(
        id
      ).innerHTML;
    }
  });
}*/

/**myList.addEventListener("click", function () {
  for (var i = 1; i <= 5; i++) {
    var id = i;
    console.log(id);
    document.getElementById("overview").innerHTML = document.getElementById(
      id
    ).innerHTML;
  }
});**/

/**myList.addEventListener("click", function () {
  console.log(myList.getElementsByTagName("li").getAttribute("id"));
});**/

function getID(a) {
  //alert(a);
  var IDname = a;
  //alert(IDname);
  var i = IDname.slice(-2);
  //alert(i);
  overView.innerHTML = document.getElementById(i).innerHTML;
}
