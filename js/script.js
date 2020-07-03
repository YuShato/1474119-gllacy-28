

// Форма регистрации в шапке
var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".user-entrance");
var loginLogin = document.getElementById("entrance-email");
var loginForm = loginPopup.querySelector(".entrance-form");
var loginPassword = document.getElementById("entrance-password");

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("show");
  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

