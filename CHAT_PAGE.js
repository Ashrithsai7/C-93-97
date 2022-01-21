var firebaseConfig = {
    authDomain: "chat-5562a.firebaseapp.com",
    databaseURL: "https://chat-5562a-default-rtdb.firebaseio.com",
    projectId: "chat-5562a",
    storageBucket: "chat-5562a.appspot.com",
    messagingSenderId: "831991053088",
    appId: "1:831991053088:web:a6b480685175c3d0ccb545"
  };
  
  firebase.initializeApp(firebaseConfig);

  USERNAME=localStorage.getItem("User_name")
  ROOMNAME=localStorage.getItem("RNAME")

  function SEND(){
    message=document.getElementById("msg").value;
        firebase.database().ref(ROOMNAME ).push({
              NAME:USERNAME,
              MESSAGE:message,
              LIKE:0
        })
        document.getElementById("msg").value=""
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function LOGOUT(){
    localStorage.removeItem("User_name")
    localStorage.removeItem("RNAME")
    window.location="index_loginpage.html"
}



  USERNAME=localStorage.getItem("User_name")
  ROOMNAME=localStorage.getItem("RNAME")

  function SEND(){
    message=document.getElementById("msg").value;
        firebase.database().ref(ROOMNAME ).push({
              NAME:USERNAME,
              MESSAGE:message,
              LIKE:0
        })
        document.getElementById("msg").value=""
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function LOGOUT(){
    localStorage.removeItem("User_name")
    localStorage.removeItem("RNAME")
    window.location="index.html"
}

