// Главный слайдер
var body = document.querySelector(".page-body");
var sliderSwitch = document.querySelectorAll(".main-slider-switch");
// var slideInterval = setInterval(nextSlide,2000);

for (let i = 0; i < sliderSwitch.length; i++) {
  
  console.log(sliderSwitch[i]);
  sliderSwitch[i].addEventListener("click", function(evt) {
    for (let i = 0; i < sliderSwitch.length; i++) {
      if (sliderSwitch[i] === evt.target) {
        sliderSwitch[i].classList.add("current");
        body.classList.add(`main-slider-${i}`);
      } else {
        sliderSwitch[i].classList.remove("current");
        body.classList.remove(`main-slider-${i}`);
      }
    } 
  })
}
