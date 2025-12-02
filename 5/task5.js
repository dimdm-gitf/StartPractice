const hamburger = document.querySelector('.header_burger');
const navMenu = document.querySelector('.headerMenu');
const navLink = document.querySelectorAll('.header-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLink.forEach(link => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
