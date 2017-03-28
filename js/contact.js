//submit email to an email address
function sendEmail() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var link = "mailto:tharris513@mail.fresnostate.edu"+
              "&subject=" + escape("Company Contact")+
              "&body=" + escape("fname lname email");

  windows.location.href = link;

}