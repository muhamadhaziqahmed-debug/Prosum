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
  current++;

  if (current >= news.length) {
    current = 0;
  }

  newsText.textContent = news[current];
}

function previousNews() {
  current--;

  if (current < 0) {
    current = news.length - 1;
  }

  newsText.textContent = news[current];
}
const menuBtn = document.querySelector('.menu-btn');
const mobileNavbar = document.querySelector('.mobile-navbar');

menuBtn.addEventListener('click', () => {
  mobileNavbar.classList.toggle('active');
});
