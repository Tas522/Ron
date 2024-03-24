// script.js

// Smooth scroll to section when clicking on navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Add more JavaScript functionality as needed
