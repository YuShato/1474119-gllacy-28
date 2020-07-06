// Форма регистрации в шапке
(function () {
  const loginLink = document.querySelector(".login-link");
  const loginPopup = document.querySelector(".user-entrance");
  const loginForm = loginPopup.querySelector(".entrance-form");
  const loginPassword = loginPopup.querySelector("#entrance-password");
  const loginLogin = loginPopup.querySelector("#entrance-email");

  const isStorageSupport = true;
  let storage = "";
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
})();

//  Модальное окно (форма обратной связи)
(function () {
  const body = document.body;
  const feedback = body.querySelector(".popup");
  const feedbackForm = feedback.querySelector(".popup-form");
  const feedbackBtn = body.querySelector(".feedback-btn");
  const feedbackClose = feedback.querySelector(".popup-close");
  const questionName = feedbackForm.querySelector("#question-name");
  const questionEmail = feedbackForm.querySelector("#question-email");
  const questionText = feedbackForm.querySelector("#question-text");
  const feedbackFormBtn = feedbackForm.querySelector(".button-form");

  const isStorageSupport = true;
  let storage = "";
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  feedbackBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("popup-show");
    body.classList.add("overlay");
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
    body.classList.remove("overlay");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedback.classList.contains("popup-show")) {
        evt.preventDefault();
        feedback.classList.remove("popup-show");
        body.classList.remove("overlay");
      }
    }
  });

  feedbackFormBtn.addEventListener("click", function (evt) {
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
})();

// Главный слайдер
(function () {
  const body = document.body;
  const sliderSwitches = body.querySelectorAll(".main-slider-switch");

  for (let i = 0; i < sliderSwitches.length; i++) {
    sliderSwitches[i].addEventListener("click", function (evt) {
      for (let i = 0; i < sliderSwitches.length; i++) {
        if (sliderSwitches[i] === evt.target) {
          sliderSwitches[i].classList.add("current");
          body.classList.add(`main-slider-${i}`);
        } else {
          sliderSwitches[i].classList.remove("current");
          body.classList.remove(`main-slider-${i}`);
        }
      }
    })
  }
})();

// Карта
ymaps.ready(function () {
  const myMap = new ymaps.Map('map', {
      center: [59.9398806677677, 30.33193647360036],
      zoom: 16,
      controls: []
    }, {
      suppressMapOpenBlock: true
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(([59.94077427553936, 30.325949783079135]), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      iconImageSize: [218, 142],
      iconImageOffset: [-235, -40]
    });
  myMap.geoObjects.add(myPlacemark);
});
