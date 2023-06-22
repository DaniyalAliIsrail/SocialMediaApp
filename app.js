


function signup() {
  var userName = document.getElementById("userfullName").value;
  var userContact = document.getElementById("userContact").value;
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;

  var userObj = {
    userName,
    userContact,
    userEmail,
    userPassword,
  };

  var getUser = JSON.parse(localStorage.getItem("userskey"));
  console.log(getUser); // null return karay ga:
  //first time signup in this app
  // ap phlay khus naseeb user ho
  //  console.log(getUser);
  if (getUser == null) {
    var arr = [];
    arr.push(userObj);
    localStorage.setItem("userskey", JSON.stringify(arr));
  } else {
    /** Is line mein, getUser array par find method ko istemaal kiya gaya hai. find method array mein ek  (condition) ko pura karne wala ek element dhoondhta hai. Is case mein, ek function condition ke roop mein istemaal kiya gaya hai. Yeh function har ek element ke liye bulaaya jaata hai aur yeh dekhta hai ki kya abhi maujood element ka userEmail property userEmail variable ke barabar hai. Agar match mil jaata hai, toh function true return karta hai, aur woh element findUser variable mein assign ho jaata hai.**/
    var findUser = getUser.find(function (value) {
      //localstorage        //current email
      if (value.userEmail === userEmail) {
        return true;
      }
      console.log(value);
    });

    /**  Yeh if-else statement ko contain karte hain jismein findUser ki value ko check kiya jaata hai. Agar findUser undefined hai, toh iska matlab hai ki getUser array mein usi email ke saath koi user maujood nahi hai. Is case mein, code push method ka istemaal karke getUser array mein ek naya user object (userObj) daalta hai. Fir woh updated array ko browser ke local storage mein store karta hai aur "user signup" ka ek alert dikhaata hai. Akhir mein, woh user ko "index.html" page par redirect kar deta hai.**/

    if (findUser === undefined) {
      getUser.push(userObj);
      localStorage.setItem("userskey", JSON.stringify(getUser));
      alert("Successfully Sign up");
      window.location.href = "./index.html";
    } else {
      alert("Email already Existing");
    }
  }
}

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var getUser = JSON.parse(localStorage.getItem("userskey"));
  console.log(getUser);
  var user = getUser.findIndex(function (value) {
    console.log(value.userEmail);
    // Find the index of the user in the getUser array
    if (value.userEmail === email && value.userPassword === password)
      return true;
  });
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
}
