function login(){
    uname = document.getElementById("user_name").value;
    localStorage.setItem("user_name",uname);
    window.location="CHAT_ROOM.html"
}