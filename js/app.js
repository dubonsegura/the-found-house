
const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
