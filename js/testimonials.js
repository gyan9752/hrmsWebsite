/* ============================================
   HRVICO — Testimonials Carousel
   ============================================ */

export function initTestimonials() {
  const track = document.querySelector('.testimonials__track');
  const dots = document.querySelectorAll('.testimonials__dot');
  const slides = document.querySelectorAll('.testimonial-card');

  if (!track || !slides.length) return;

  let current = 0;
  let autoTimer = null;

  function goTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;

    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function next() {
    goTo(current + 1);
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, 5000);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      startAuto(); // reset timer
    });
  });

  // Pause on hover
  const carousel = document.querySelector('.testimonials__carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
  }

  // Init
  goTo(0);
  startAuto();
}
