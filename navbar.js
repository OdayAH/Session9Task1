const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
  console.log('Hamburger menu clicked');
});