var listParent = document.getElementById("listparent");
var loginUser;

window.addEventListener("load", function () {

        
    var userLogin = localStorage.getItem("loginUser")
    if (!userLogin) {
        window.location.replace("./index.html")
        return
    }

  // console.log("hello world");
  var getUser = JSON.parse(this.localStorage.getItem("loginUser"));
  console.log("get user ", getUser);
  loginUser = getUser;
  var fullName = this.document.getElementById("myName");
  fullName.innerHTML = "welcome" + " " + loginUser.userName;
  // console.log(fullName);

  if (listParent) {
    var getposts = JSON.parse(this.localStorage.getItem("posts") || []);
    console.log(getposts , "getposts");
    for (var value of getposts) {
      listParent.innerHTML += `<div id="main-card" class="card mx-auto w-50 mt-3">
 <div id="main-card-body" class="card-body">
   <h5 id="main-card-title" card-title>${value.title}</h5>
   <p id="main-card-text" class="card-text">${value.desc}</p>
     <div id="mainBtndiv" class="d-flex justify-content-end">
       <button id="edit-btn" class="btn btn-secondary" onclick="editPost(${value.id} ,this)" >Edit Post</button>
      <button id="del-btn" class="btn btn-info" onclick="deletePost(${value.id},this)" >Delete Post</button>
     </div>
 </div>
</div>`;
     
    }
  }
});

//! Dashboard javascript
function addPost() {
        var title = document.getElementById("tit");
        var desc = document.getElementById("desc");
        if (!title.value || !desc.value) {
          alert("please fill the input filled ");
          return;
        }
      
        //create Element
        //   var mainCardDiv=document.createElement("div")
        //   var mainCardBody=document.createElement("div")
        //   mainCardBody.classList.add("card-body","card")
      
        //   //! card title
        //   var cardTitle=document.createElement("h5")
        //   mainCardBody.classList.add("card-body")
        //   cardTitle.innerHTML=title.value;
        //   mainCardBody.append(cardTitle)
        //   //!card text
        //   var cardText=document.createElement("p")
        //   cardText.classList.add("card-text")
        //   cardText.innerHTML=desc.value;
        //   mainCardBody.append(cardText)
        // //! Edit button
        //   var mainBtnDiv =document.createElement("div")
        //   var editBtn =document.createElement("button")
        //   editBtn.classList.add("btn","btn-secondary")
        //   editBtn.innerHTML="Edit Button"
        //   mainBtnDiv.append(editBtn)
        //   //! Del button
        //   var delBtn =document.createElement("button")
        //   delBtn.classList.add("btn","btn-info")
        //   delBtn.innerHTML="Del Button";
        //   mainBtnDiv.append(delBtn);
        //   //main btn div append button
        //   mainCardBody.append(mainBtnDiv)
        //   mainBtnDiv.classList.add("d-flex", "justify-content-end")
        //  //!main card div
        //  mainCardDiv.append(mainCardBody)
        //  mainCardDiv.classList.add("card," , "mx-auto", "w-50", "mt-3")
        //  //! maincard div append list parent section
        //  console.log(mainCardBody);
        //  listParent.append(mainCardDiv)
        //  console.log(mainCardBody);
      
        //localStorage.setItem("Posts",JSON.stringify(postObj))
        //  title.value=" ";
        //  desc.value= " ";
      
        var id;
        var getPosts = JSON.parse(localStorage.getItem("posts")) || [];
        console.log("getPosts" + getPosts);
        if(getPosts.length > 0){
          id=getPosts[0].id + 1
        }else{
          id=1;
        }
        var todoBox = `<div id="main-card" class="card mx-auto w-50 mt-3">
       <div id="main-card-body" class="card-body">
         <h5 id="main-card-title" card-title>${title.value}</h5>
         <p id="main-card-text" class="card-text">${desc.value}</p>
           <div id="mainBtndiv" class="d-flex justify-content-end">
             <button id="edit-btn" class="btn btn-secondary onclick="editPost(${id},this)" ">Edit Post</button>
            <button id="del-btn" class="btn btn-info" onclick="deletePost(${id}, this)">Delete Post</button>
           </div>
       </div>
      </div>`;
        listParent.innerHTML = todoBox + listParent.innerHTML;
      
        // if (getPosts == null) {
        //   id = 1;
        // } else {
        //   id = getPosts[0].id + 1;
        //   // console.log( id=getPosts[0].id +1);
        // }
        var postObj = {
          id: id,
          title: title.value,
          desc: desc.value,
        };
        getPosts.unshift(postObj);
        localStorage.setItem("posts", JSON.stringify(getPosts));
      
        // user jo  card post kr raha hay .localstoraga may data save kr raha hay
        // var getPosts = JSON.parse(localStorage.getItem("posts"));
        //  console.log("getposts",getPosts);
      
        // if (getPosts == null) {
        //   var array = [];
        //   array.unshift(postObj);
        //   localStorage.setItem("posts", JSON.stringify(array));
        // } else {
        //   getPosts.unshift(postObj);
        //   localStorage.setItem("posts", JSON.stringify(getPosts));
        // }
      
        title.value = " ";
        desc.value = " ";
        // console.log(todoBox);
      }
      
      function deletePost(id, e) {
        var getposts = JSON.parse(localStorage.getItem("posts")); // 
        var indexNum = getposts.findIndex(function (value) {
          if (value.id === id) return true;
        })
        getposts.splice(indexNum, 1);
        localStorage.setItem("posts", JSON.stringify(getposts));
        // remove elements
        e.parentNode.parentNode.parentNode.remove();
      }
      

      //! edit function
      function editPost(id,e) {
        console.log("function run");
        var indexNum;
        var getPosts = JSON.parse(localStorage.getItem("posts"))
        var post = getPosts.find(function (value, index) {
            if (value.id === id) {
                indexNum = index
                return true
            }
        })
        var editTitle = prompt("edit title", post.title)
        var editDesc = prompt("edit desc", post.desc)
        const editObj = {
            id:id,
            title: editTitle,
            desc: editDesc,
        }
        getPosts.splice(indexNum, 1, editObj)
        localStorage.setItem("posts", JSON.stringify(getPosts))
    
        var h5Title = e.parentNode.parentNode.firstElementChild;
        console.log("h5 tittle",h5Title );
        var pDesc = e.parentNode.parentNode.children[1];
        console.log("pDesc",pDesc);
        h5Title.innerHTML = editTitle
        pDesc.innerHTML = editDesc
    
    }