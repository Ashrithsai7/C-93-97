function login(){
    uname = document.getElementById("User_name").value;
    localStorage.setItem("User_name",uname);
    window.location="CITW_room.html"
}