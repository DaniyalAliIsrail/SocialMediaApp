var loginUser;
window.addEventListener("load",function(){
  console.log("hello world");
  var getUser = JSON.parse(this.localStorage.getItem("loginUser"))
  console.log("get user ",getUser);
  loginUser=getUser
  var fullName = this.document.getElementById("myName")
  fullName.innerHTML="welcome"+" "+loginUser.userName;
  // console.log(fullName);
})

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
    alert("successfully login");
    window.location.href = "./index.html";
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
  // console.log(getUser);
  var user = getUser.find(function (value) {
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
  console.log("user",user);
}
//! Dashboard javascript
var listParent = document.getElementById("listparent")
function addPost(){
   var title = document.getElementById("tit")
   var desc= document.getElementById("desc")
  //create Element
  var mainCardDiv=document.createElement("div")
  var mainCardBody=document.createElement("div")
  mainCardBody.classList.add("card-body","card")
  
  if(!title.value || !desc.value){
    alert("please fill the input filled ")
    return
  }
  //! card title
  var cardTitle=document.createElement("h5")
  mainCardBody.classList.add("card-body")
  cardTitle.innerHTML=title.value;
  mainCardBody.append(cardTitle)
  //!card text
  var cardText=document.createElement("p")
  cardText.classList.add("card-text")
  cardText.innerHTML=desc.value;
  mainCardBody.append(cardText)
//! Edit button
  var mainBtnDiv =document.createElement("div")
  var editBtn =document.createElement("button")
  editBtn.classList.add("btn","btn-secondary")
  editBtn.innerHTML="Edit Button"
  mainBtnDiv.append(editBtn)
  //! Del button
  var delBtn =document.createElement("button")
  delBtn.classList.add("btn","btn-info")
  delBtn.innerHTML="Del Button";
  mainBtnDiv.append(delBtn);
  //main btn div append button  
  mainCardBody.append(mainBtnDiv)
  mainBtnDiv.classList.add("d-flex", "justify-content-end")
 //!main card div
 mainCardDiv.append(mainCardBody)
 mainCardDiv.classList.add("card," , "mx-auto", "w-50", "mt-3")
 //! maincard div append list parent section
 console.log(mainCardBody);
 listParent.append(mainCardDiv)
 console.log(mainCardBody);


 var postObj ={
  title:title.value,
  desc:desc.value
 }
// user jo  card post kr raha hay .localstoraga may data save kr raha hay 
 var getPosts=JSON.parse(localStorage.getItem("posts"))
 console.log("getposts",getPosts);
 if(getPosts == null ){
  var array =  []
  array.unshift(postObj)
  localStorage.setItem("posts",JSON.stringify(array))
 }
 else{
getPosts.unshift(postObj)
localStorage.setItem("posts",JSON.stringify(getPosts))
 }

 //localStorage.setItem("Posts",JSON.stringify(postObj))
 title.value=" ";
 desc.value= " ";

  // back tick say  innexHtml  kr kay work nhy kr raha hay work nhy kr raha hay bqy pura string arha hay console pr  
//  var todoBox =`<div id="listparent">
//  <div id="main-card" class="card mx-auto w-50 mt-3">
//  <div id="main-card-body" class="card-body">
//    <h5 id="main-card-title" card-title>Title</h5>
//    <p id="main-card-text" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//      <div id="mainBtndiv" class="d-flex justify-content-end">
//        <button id="edit-btn" class="btn btn-secondary">Edit Post</button>
//       <button id="del-btn" class="btn btn-info">Delete Post</button>
//      </div>
//  </div>
// </div>
// </div>`
// // listParent.innerHTML=todoBox;
// console.log(todoBox);
}
