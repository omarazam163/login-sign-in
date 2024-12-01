let userName = document.getElementById("name");
let user = JSON.parse(localStorage.getItem("userName"))||[];
let logout = document.getElementById("logout");
userName.innerHTML = user.split(' ')[0];
logout.addEventListener('click',()=>{
    localStorage.removeItem("userName");
    window.open('./signin.html','_self')
})