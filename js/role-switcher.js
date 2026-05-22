/* ============================================
   HRVICO — Role Switcher
   ============================================ */

export function initRoleSwitcher() {
  const tabs = document.querySelectorAll('.role-tab');
  const contents = document.querySelectorAll('.role-content');

  if (!tabs.length || !contents.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const role = tab.dataset.role;
      if (!role) return;

      // Update active tab
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // Transition content
      contents.forEach((c) => {
        if (c.dataset.role === role) {
          // Animate in
          c.style.display = 'grid';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              c.classList.add('active');
            });
          });
        } else {
          c.classList.remove('active');
          // Wait for transition, then hide
          setTimeout(() => {
            if (!c.classList.contains('active')) {
              c.style.display = 'none';
            }
          }, 500);
        }
      });
    });
  });

  // Initialize: show first
  const firstTab = tabs[0];
  if (firstTab) {
    firstTab.classList.add('active');
    const firstContent = document.querySelector(
      `.role-content[data-role="${firstTab.dataset.role}"]`
    );
    if (firstContent) {
      firstContent.style.display = 'grid';
      firstContent.classList.add('active');
    }
  }
}
