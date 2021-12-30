var firebaseConfig = {
    authDomain: "chat-5562a.firebaseapp.com",
    databaseURL: "https://chat-5562a-default-rtdb.firebaseio.com",
    projectId: "chat-5562a",
    storageBucket: "chat-5562a.appspot.com",
    messagingSenderId: "831991053088",
    appId: "1:831991053088:web:a6b480685175c3d0ccb545"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var name=localStorage.getItem("User_name")
  document.getElementById("user_name").innerHTML="Welcome "+ name

  function ADDROOM(){
        room_name = document.getElementById("roomn").value;
        localStorage.setItem("RNAME",room_name);
        firebase.database().ref("/").child(room_name).update({"hello":"user has been added :)"});
        window.location="CITW_page.html"
            }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Roomname"+Room_names)
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row
    });});}
    
getData();

    function redirectToRoomName(name){
          localStorage.setItem("RNAME",name);
          window.location = "CITW_page.html"
    }

    function LOGOUT(){
          localStorage.removeItem("User_name")
          localStorage.removeItem("RNAME")
          window.location="CITW_loginpage.html"
    }