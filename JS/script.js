// ---------- News ticker ----------
const news = [
  'PRISM LLP are proud to announce their recent ISO certification.',
  'Welcome to our brand new website.',
  'Check out our latest products and services.',
  'Thank you for visiting our company.',
];
let current = 0;
const newsText = document.getElementById('news');
newsText.textContent = news[current];

function nextNews() {
  current = (current + 1) % news.length;
  newsText.textContent = news[current];
}

function previousNews() {
  current = (current - 1 + news.length) % news.length;
  newsText.textContent = news[current];
}

// ---------- Hamburger menu ----------
const menuBtn = document.querySelector('.menu-btn');
const mobileNavbar = document.querySelector('.mobile-navbar');

function closeMenu() {
  menuBtn.classList.remove('active');
  mobileNavbar.classList.remove('active');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function toggleMenu() {
  const isOpen = mobileNavbar.classList.toggle('active');
  menuBtn.classList.toggle('active', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

menuBtn.addEventListener('click', toggleMenu);

// Close the menu when a plain link inside it is clicked (not the
// <summary> dropdown toggles, which should stay open to reveal sub-links).
mobileNavbar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close the menu if the viewport is resized back to desktop width.
window.addEventListener('resize', () => {
  if (window.innerWidth > 690) {
    closeMenu();
  }
});
