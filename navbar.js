const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  if (nav.classList.contains('active')) {
    // play slide-out animation
    nav.classList.add('closing');
    setTimeout(() => {
      nav.classList.remove('active');
      nav.classList.remove('closing');
    }, 300); // duration ng animation
  } else {
    // play slide-in animation
    nav.classList.add('active');
  }
});

// auto-close nav on scroll
window.addEventListener('scroll', () => {
  if (nav.classList.contains('active')) {
    nav.classList.add('closing');
    setTimeout(() => {
      nav.classList.remove('active');
      nav.classList.remove('closing');
    }, 300);
  }
});
