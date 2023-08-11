// *********************FOR CHECK USER IS LOGIN OR NOT**********************
window.addEventListener("load", function () {
  console.log(localStorage.getItem("loginUser"))
  var userLogin = localStorage.getItem("loginUser")
  if (userLogin) {
      window.location.replace("./dashboard.html")
      return
  }
})
// ******************************************************



function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var getUser = JSON.parse(localStorage.getItem("userskey"));
  // console.log(getUser);
  var user = getUser.find(function (value) {
    console.log(value.userEmail);
    // Find the index of the user in the getUser array
    if (value.userEmail === email && value.userPassword === password)
      return true;
  });


 // *******CHECK USER ARE NOT EQUAL TO FALSE VALUES*************************
 if(!user){
  alert("Crediential Error email and password not match")
  return
}
// ***********************************************************************

  //
  console.log(user);
  // Check if the user was found (user index is not -1)
  if (user !== -1) {
    console.log("successful login");
    alert("successfully login");
    // Store the logged-in user's index in localStorage
    localStorage.setItem("loginUser", JSON.stringify(user));
    window.location.replace("./dashboard.html");
  } else {
    // console.log("Email or password does not match");
    alert("Email or password does not match");
  }
  console.log("user", user);
}
