/* ============================================
   HRVICO — FAQ Accordion
   ============================================ */

export function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const question = item.querySelector('.faq-item__question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
        }
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
    });
  });
}
