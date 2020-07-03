//  Модальное окно (форма обратной связи)
let feedback = document.querySelector(".popup");
let feedbackForm = document.querySelector(".popup-form");
let feedbackBtn = document.querySelector(".feedback-btn");
let feedbackClose = feedback.querySelector(".popup-close");
let questionName = document.getElementById("question-name");
let questionEmail = document.getElementById("question-email");
let questionText = document.getElementById("question-text");
let feedbackFormBtn = feedback.querySelector(".button-form");
let overlay = document.querySelector(".overlay");

feedbackBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("popup-show");
  overlay.classList.add("show");
  if (storage) {
    questionName.value = storage;
    questionEmail.value = storage;
    questionText.focus();
  } else {
    questionName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("popup-show");
  overlay.classList.remove("show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("popup-show")) {
      evt.preventDefault();
      feedback.classList.remove("popup-show");
    }
  }
});

feedbackFormBtn.addEventListener("click", function (evt){
  if (!questionName.value || !questionEmail.value) {
    evt.preventDefault(); 
    feedbackForm.classList.remove("modal-error");
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", questionName.value);
      localStorage.setItem("email", questionEmail.value);
    }
}
});
