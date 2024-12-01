let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("submit");
let users = JSON.parse(localStorage.getItem("users")) || [];
let error = document.getElementById("error");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (users.find((e) => e.email === email.value.trim())) {
        if (users.find((e) => e.password === password.value.trim())) {
            localStorage.setItem("userName", JSON.stringify(users.find((e) => e.email === email.value).name));
            window.open("./welcome.html", "_self");
            error.classList.add("d-none");
        } else {
            error.classList.remove("d-none");
        }
    } else {
        error.classList.remove("d-none");
    }
    password.value="";
});