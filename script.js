const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
slides[currentSlide].classList.add('active');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 5000);
