console.log("Script loaded!");

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.toggle('scrolled');
  } else {
    navbar.classList.toggle('scrolled');
  }
});
