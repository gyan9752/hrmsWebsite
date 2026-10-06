/* ============================================
   HRVICO — Navbar
   ============================================ */

export function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (!navbar) return;

  // Scroll → add .scrolled class
  let lastScroll = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (y > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = y;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // init

  // Mobile toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = navbar.offsetHeight + 20;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });
}
