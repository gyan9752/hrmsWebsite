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

  // Auto-detect & highlight active navigation link based on current page URL
  const highlightActiveNavLink = () => {
    const rawPath = window.location.pathname.toLowerCase();
    const cleanPath = rawPath.replace(/\/$/, '');
    const pageName = cleanPath.split('/').pop() || 'index.html';

    const allLinks = document.querySelectorAll('.navbar__link');
    allLinks.forEach((link) => {
      const href = (link.getAttribute('href') || '').toLowerCase().trim();
      const cleanHref = href.replace(/\/$/, '');
      const linkFile = cleanHref.split('/').pop();

      let isActive = false;

      // Homepage matching
      if (
        (pageName === '' || pageName === 'index.html' || pageName === 'index') &&
        (linkFile === '' || linkFile === 'index.html' || linkFile === 'index' || href === '#')
      ) {
        isActive = true;
      }
      // Direct file or route matching (e.g. features.html or /features)
      else if (
        linkFile &&
        (linkFile === pageName ||
         linkFile.replace('.html', '') === pageName.replace('.html', ''))
      ) {
        isActive = true;
      }
      // Blog section matching (blogs.html, blog-listing.html, blog-detail.html, hrms-software-2026.html, etc.)
      else if (
        linkFile &&
        linkFile.startsWith('blog') &&
        (pageName.startsWith('blog') || pageName.includes('hrms-software-2026') || pageName.includes('compliance') || pageName.includes('payroll-processing') || pageName.includes('retention') || pageName.includes('culture') || pageName.includes('maternity') || pageName.includes('wellness') || pageName.includes('gig-economy'))
      ) {
        isActive = true;
      }

      if (isActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else if (href && !href.startsWith('#')) {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  };

  highlightActiveNavLink();

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
