/** Is line mein, getUser array par find method ko istemaal kiya gaya hai. find method array mein ek (condition) ko pura karne wala ek element dhoondhta hai. Is case mein, ek function condition ke roop mein istemaal kiya gaya hai. Yeh function har ek element ke liye bulaaya jaata hai aur yeh dekhta hai ki kya abhi maujood element ka userEmail property userEmail variable ke barabar hai. Agar match mil jaata hai, toh function true return karta hai, aur woh element findUser variable mein assign ho jaata hai.**/

var findUser = getUser.find(function (value) {
//localstorage //current email
if (value.userEmail === userEmail) {
return true;
}
});

//!sir ka code
// console.log("getUser", getUser)
// var findUser = getUser.find(function (value) {
// console.log(value)// jetnay user hogay utna object lay aye ga // hamay bs usmay say email chaye
// if (value.userEmail === userEmail) {
// return true
// }
// })

    /**  Yeh if-else statement ko contain karte hain jismein findUser ki value ko check kiya jaata hai. Agar findUser undefined hai, toh iska matlab hai ki getUser array mein usi email ke saath koi user maujood nahi hai. Is case mein, code push method ka istemaal karke getUser array mein ek naya user object (userObj) daalta hai. Fir woh updated array ko browser ke local storage mein store karta hai aur "user signup" ka ek alert dikhaata hai. Akhir mein, woh user ko "index.html" page par redirect kar deta hai.**/

    if (findUser === undefined) {
      getUser.push(userObj);
      localStorage.setItem("user", JSON.stringify(getUser));
      alert("Successfully Sign up");
      window.location.href = "./index.html";
    } else {
      alert("Email are already Existing");
    }
    
    //! sir ka code
    // if (findUser === undefined) {
    //     getUser.push(userObj)
    //     localStorage.setItem("user", JSON.stringify(getUser))
    //     alert("user signup")
    //     window.location.href = "./index.html"
    // } else {
    //     alert("email address already exists")
    // }
