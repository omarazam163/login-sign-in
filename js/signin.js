let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("submit");
let users = JSON.parse(localStorage.getItem("users")) || [];
let error = document.getElementById("error-email");
let errorPass = document.getElementById("error-pass");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(users.find(function (e) { return e.email==email.value.trim()}))
    {
        let userObj= users.find(function (e) {
          return e.email == email.value.trim();
        });
        if(userObj.password == password.value.trim())
        {
            error.classList.add("d-none");
            errorPass.classList.add("d-none");
            localStorage.setItem("userName", JSON.stringify(userObj.name));
            window.open('./welcome.html','_self');
        }
        else
        {
            error.classList.add("d-none");
            errorPass.classList.remove("d-none");
        }
    }
    else
    {
        error.classList.remove("d-none");
        errorPass.classList.add("d-none");
    }
});