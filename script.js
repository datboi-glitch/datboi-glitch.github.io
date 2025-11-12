const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const links = navLinks.querySelectorAll('a');
window.addEventListener('load', () => {
  const navLinks = document.getElementById('nav-links');

  // Add the "active" class on page load
  navLinks.classList.add('active');
});
