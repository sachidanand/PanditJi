const hinduSymbols = [
    { symbol: 'ॐ', name: 'Om' },
    { symbol: '🕉', name: 'Om Nam Shivaya' },
    { symbol: 'स्वस्तिक', name: 'Swastik' },
    { symbol: 'श्री', name: 'Shree' }
];

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Close menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#navbar')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

hamburger.addEventListener('click', () => {
    toggleMenu();
    
    if(navLinks.classList.contains('active')) {
        navLinks.style.transform = 'translateX(0)';
        navLinks.style.opacity = '1';
    } else {
        navLinks.style.transform = 'translateX(100%)';
        navLinks.style.opacity = '0';
    }
});

// Form submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your submission! We will contact you soon.');
        this.reset();
    });
}

// Enhanced navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 15, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 119, 34, 0.2)';
    } else {
        navbar.style.background = 'rgba(26, 15, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Enhanced scroll handling
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth reveal for elements
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.service-card, .profile-content p');
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    setTimeout(() => {
        revealElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 500);

    const symbolSlider = document.querySelector('.symbol-slider');
    
    // Reset animation when it completes
    symbolSlider.addEventListener('animationend', () => {
        symbolSlider.style.animation = 'none';
        symbolSlider.offsetHeight; // Trigger reflow
        symbolSlider.style.animation = 'slideSymbols 12s infinite';
    });
});
