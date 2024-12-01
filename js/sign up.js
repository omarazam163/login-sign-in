let Name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("submit");
let users = JSON.parse(localStorage.getItem("users")) || [];
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let invalid = document.getElementById("invalid");



function confirmName() {
  let regex = /^[A-Za-z\s]{2,30}$/;
  return regex.test(Name.value.trim());
}
function confirmEmail() {
  let regex = /^[a-zA-Z0-9_-]{4,30}@[a-zA-Z]{2,10}\.[a-zA-Z]{2,10}$/;
  return regex.test(email.value.trim());
}
function confirmpassword() {
  let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password.value.trim());
}
Name.addEventListener("input", (e) => {
  if (confirmName()) {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  } else {
    e.target.classList.add("is-invalid");
    e.target.classList.remove("is-valid");
  }
});

email.addEventListener("input", (e) => {
  emailError.classList.add("d-none");
  if (confirmEmail()) {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
    invalid.classList.add("d-none");
  } else {
    e.target.classList.add("is-invalid");
    e.target.classList.remove("is-valid");
    invalid.classList.remove("d-none");
  }
});

password.addEventListener("input", (e) => {
  if (confirmpassword()) {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
    passwordError.classList.add("d-none");
  } else {
    e.target.classList.add("is-invalid");
    e.target.classList.remove("is-valid");
        passwordError.classList.remove("d-none");
  }
});

function clear() {
  Name.value = "";
  email.value = "";
  password.value = "";
  Name.classList.remove("is-valid");
  email.classList.remove("is-valid");
  password.classList.remove("is-valid");
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirmName() && confirmEmail() && confirmpassword()) {
    if (users.find((e) => e.email === email.value.trim())) {
      emailError.classList.remove("d-none");
    } else {
      emailError.classList.add("d-none");
      let obj = {
        name: Name.value,
        email: email.value,
        password: password.value,
      };
      users.push(obj);
      console.log(users);
      localStorage.setItem("users", JSON.stringify(users));
      clear();
      window.open('./signin.html','_self')
    }
  }
});

