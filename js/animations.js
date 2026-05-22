/* ============================================
   HRVICO — Scroll Animations
   ============================================ */

export function initAnimations() {
  // Single-element observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  // Observe all [data-animate] elements
  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });

  // Stagger group observer
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  document.querySelectorAll('[data-stagger]').forEach((el) => {
    staggerObserver.observe(el);
  });
}
