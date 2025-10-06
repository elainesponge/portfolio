const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#primary-navigation');
const yearEl = document.querySelector('#current-year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navList) {
  const toggleMenu = () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navList.dataset.open = String(!isOpen);
  };

  navToggle.addEventListener('click', toggleMenu);

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.dataset.open = 'false';
    });
  });
}
