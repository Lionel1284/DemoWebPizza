import { createIcons, icons } from 'lucide';

// Initialize Lucide icons
createIcons({
  icons
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon based on state (optional visual feedback)
    const iconName = navLinks.classList.contains('active') ? 'X' : 'Menu';
    // Re-render icon if needed, but simple toggle is enough for MVP
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  } else {
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Smooth scroll for anchor links (polyfill for older browsers if needed, but CSS scroll-behavior usually handles it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Account for fixed header
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});
