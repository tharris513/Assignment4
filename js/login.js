function validate() {

  var un = document.getElementById("uname").value;
  var pw = document.getElementById("pswd").value;

  if (un == "Taylor") {
    if (pw == "Harris") {
      window.close()
      window.open("./home/home.html");
    }
    else {
      alert("Incorrect Password, try again")
    }
  }
  else {
    alert("Incorrect Username, try again");
  }
}