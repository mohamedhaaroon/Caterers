// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = ['home', 'about', 'menu', 'testimonials', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (section && navLink) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});

// Form submissions
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    alert('Thank you for your message! We will contact you soon.');
    this.reset();
});

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    if (email) {
        document.getElementById('newsletterSuccess').style.display = 'block';
        this.reset();
        setTimeout(() => {
            document.getElementById('newsletterSuccess').style.display = 'none';
        }, 3000);
    }
});

// Initialize active nav link
document.querySelector('.nav-link').classList.add('active');
