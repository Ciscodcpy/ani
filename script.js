// ===== Hero Slider =====
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
slides[currentSlide].classList.add('active');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function showPrevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

let sliderInterval = setInterval(showNextSlide, 5000);

// ===== Slide horizontally on arrow click =====
document.querySelectorAll('.row-wrapper').forEach(wrapper => {
  const row = wrapper.querySelector('.row');
  const leftArrow = wrapper.querySelector('.row-arrow-left');
  const rightArrow = wrapper.querySelector('.row-arrow-right');

  leftArrow.addEventListener('click', () => {
    row.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    row.scrollBy({ left: 300, behavior: 'smooth' });
  });
});

// ===== Drag / Swipe functionality =====
document.querySelectorAll('.row').forEach(row => {
  let isDown = false;
  let startX;
  let scrollLeft;

  // Desktop drag
  row.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });
  row.addEventListener('mouseleave', () => isDown = false);
  row.addEventListener('mouseup', () => isDown = false);
  row.addEventListener('mousemove', e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 2;
    row.scrollLeft = scrollLeft - walk;
  });

  // Mobile swipe
  row.addEventListener('touchstart', e => {
    startX = e.touches[0].pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });
  row.addEventListener('touchmove', e => {
    const x = e.touches[0].pageX - row.offsetLeft;
    const walk = (x - startX) * 2;
    row.scrollLeft = scrollLeft - walk;
  });
});
