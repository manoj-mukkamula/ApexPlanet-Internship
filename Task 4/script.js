// ============================================
//  PORTFOLIO — script.js
//  Features: Navbar scroll, Hamburger menu,
//            Active nav links, Project filter tabs,
//            Scroll reveal animations
// ============================================

// ===== NAVBAR: shadow on scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE NAV LINK on scroll =====
const sections    = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  allNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();

// ===== PROJECT FILTER TABS =====
const tabBtns      = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.projects-grid .project-card');
const featuredBanner = document.getElementById('featured-task4');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active tab
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    // Handle featured banner (internship category)
    if (featuredBanner) {
      const show = filter === 'all' || filter === 'internship';
      featuredBanner.classList.toggle('hidden-card', !show);
    }

    // Handle regular cards
    projectCards.forEach(card => {
      const category = card.dataset.category;
      const visible = filter === 'all' || category === filter;
      card.classList.toggle('hidden-card', !visible);

      if (visible) {
        // Restart card entrance animation
        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = '';
      }
    });
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealEls = document.querySelectorAll(
  '.section, .project-card, .skill-category, .contact-card, .featured-banner'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealEls.forEach((el, i) => {
  if (el.id === 'home') return; // skip hero
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
  observer.observe(el);
});
