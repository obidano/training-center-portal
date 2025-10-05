// Main JavaScript for Training Center Website

// Company Configuration - Update this to change the name across all pages
const COMPANY_CONFIG = {
    name: 'Training Center',
    email: 'info@training.com',
    phone: '+243 (89) 123-4567',
    address: '243 Education Street, Kinshasa,'
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Initialize company name across all elements
    initializeCompanyName();
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Ensure footer colors are always correct
    ensureFooterColors();
    
    // Ensure default theme is set
    if (!document.documentElement.getAttribute('data-theme')) {
        document.documentElement.setAttribute('data-theme', 'light');
        // Clear any existing styles first
        document.body.style.backgroundColor = '';
        document.documentElement.style.backgroundColor = '';
        document.body.style.color = '';
        // Force light theme
        document.body.style.backgroundColor = '#ffffff';
        document.documentElement.style.backgroundColor = '#ffffff';
        document.body.style.color = '#1e293b';
        console.log('Default light theme applied');
    }
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const course = formData.get('course');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            this.reset();
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Add CSS for notification animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification__close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.25rem;
            border-radius: 0.25rem;
            transition: background-color 0.2s;
        }
        
        .notification__close:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    `;
    document.head.appendChild(style);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature__card, .course__card, .testimonial__card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .feature__card,
        .course__card,
        .testimonial__card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .feature__card.animate-in,
        .course__card.animate-in,
        .testimonial__card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(animationStyle);
    
    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 100;
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect for back to top button
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 8px -1px rgba(0, 0, 0, 0.15)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    });
    
    // Course filter functionality (if on courses page)
    const courseFilter = document.getElementById('course-filter');
    if (courseFilter) {
        courseFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            const courseCards = document.querySelectorAll('.course__card');
            
            courseCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Search functionality (if search input exists)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course__card');
            
            courseCards.forEach(card => {
                const title = card.querySelector('.course__title').textContent.toLowerCase();
                const description = card.querySelector('.course__description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Lazy loading for images (if any are added later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Footer Colors Function
function ensureFooterColors() {
    console.log('Ensuring footer colors are correct...');
    
    // Force footer background and text colors
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.setProperty('background-color', '#1e293b', 'important');
        footer.style.setProperty('color', '#ffffff', 'important');
    }
    
    // Force all footer text to be white
    const footerTexts = document.querySelectorAll('.footer *');
    footerTexts.forEach(element => {
        if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
            element.style.setProperty('color', '#ffffff', 'important');
        }
    });
    
    // Set hover colors for links
    const footerLinks = document.querySelectorAll('.footer a');
    footerLinks.forEach(link => {
        link.style.setProperty('color', '#ffffff', 'important');
        link.addEventListener('mouseenter', () => {
            link.style.setProperty('color', '#ff7900', 'important');
        });
        link.addEventListener('mouseleave', () => {
            link.style.setProperty('color', '#ffffff', 'important');
        });
    });
    
    console.log('Footer colors applied successfully');
}

// Company Name Initialization
function initializeCompanyName() {
    // Update all elements with data-company-name attribute
    const companyElements = document.querySelectorAll('[data-company-name]');
    companyElements.forEach(element => {
        element.textContent = COMPANY_CONFIG.name;
    });
    
    // Update company address
    const addressElements = document.querySelectorAll('[data-company-address]');
    addressElements.forEach(element => {
        element.textContent = COMPANY_CONFIG.address;
    });
    
    // Update company phone
    const phoneElements = document.querySelectorAll('[data-company-phone]');
    phoneElements.forEach(element => {
        element.textContent = COMPANY_CONFIG.phone;
    });
    
    // Update company email
    const emailElements = document.querySelectorAll('[data-company-email]');
    emailElements.forEach(element => {
        element.textContent = COMPANY_CONFIG.email;
    });
    
    // Update page titles
    const pageTitle = document.querySelector('title');
    if (pageTitle && !pageTitle.textContent.includes(COMPANY_CONFIG.name)) {
        pageTitle.textContent = pageTitle.textContent.replace('Elite Training Center', COMPANY_CONFIG.name);
    }
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    console.log('Initializing theme toggle...');
    
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.setAttribute('title', 'Toggle dark mode');
    
    // Add to page
    document.body.appendChild(themeToggle);
    console.log('Theme toggle button added to page');
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeToggle, savedTheme);
    
    // Force light theme on first load if no saved theme
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon(themeToggle, 'light');
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        console.log('Theme toggle clicked. Current:', currentTheme, 'New:', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeToggle, newTheme);
        
        // Debug: Check if attribute was set
        console.log('Data-theme attribute set to:', document.documentElement.getAttribute('data-theme'));
        console.log('Body background should be:', getComputedStyle(document.body).backgroundColor);
        console.log('Body inline style:', document.body.style.backgroundColor);
        console.log('HTML background:', getComputedStyle(document.documentElement).backgroundColor);
        
        // Force a reflow to ensure styles are applied
        document.body.offsetHeight;
        
        // Force background color change
        if (newTheme === 'dark') {
            document.body.style.backgroundColor = '#1a1a1a';
            document.documentElement.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#ffffff';
            
            // Ensure footer always has dark background with white text
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.style.setProperty('background-color', '#1e293b', 'important');
            }
            
            const footerTexts = document.querySelectorAll('.footer__title, .footer__description, .footer__heading, .footer__link, .footer__copyright');
            footerTexts.forEach(text => {
                text.style.setProperty('color', '#ffffff', 'important');
            });
            
            const socialLinks = document.querySelectorAll('.social__link');
            socialLinks.forEach(link => {
                link.style.setProperty('color', '#ffffff', 'important');
            });
            
            // Ensure CTA section has white text on orange background
            const cta = document.querySelector('.cta');
            if (cta) {
                cta.style.setProperty('background', 'linear-gradient(135deg, #ff7900, #e66a00)', 'important');
                const ctaTexts = cta.querySelectorAll('h2, p, .section__title, .section__description, *');
                ctaTexts.forEach(text => {
                    text.style.setProperty('color', '#ffffff', 'important');
                });
            }
        } else {
            // Force light theme with most aggressive approach
            document.body.style.setProperty('background-color', '#ffffff', 'important');
            document.documentElement.style.setProperty('background-color', '#ffffff', 'important');
            document.body.style.setProperty('color', '#1e293b', 'important');
            
            // Set proper text colors for headings
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach(heading => {
                heading.style.setProperty('color', '#1e293b', 'important');
            });
            
            // Set proper text colors for paragraphs
            const paragraphs = document.querySelectorAll('p, .hero__description, .section__description');
            paragraphs.forEach(paragraph => {
                paragraph.style.setProperty('color', '#475569', 'important');
            });
            
            // Set proper light mode colors for specific sections
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.setProperty('background', 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)', 'important');
            }
            
            const features = document.querySelector('.features');
            if (features) {
                features.style.setProperty('background-color', '#ffffff', 'important');
            }
            
            const coursesPreview = document.querySelector('.courses-preview');
            if (coursesPreview) {
                coursesPreview.style.setProperty('background-color', '#f8fafc', 'important');
            }
            
            const testimonials = document.querySelector('.testimonials');
            if (testimonials) {
                testimonials.style.setProperty('background-color', '#ffffff', 'important');
            }
            
            const header = document.querySelector('.header');
            if (header) {
                header.style.setProperty('background-color', '#ffffff', 'important');
                header.style.setProperty('border-bottom', '1px solid #e2e8f0', 'important');
            }
            
            // Ensure footer always has dark background with white text
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.style.setProperty('background-color', '#1e293b', 'important');
            }
            
            const footerTexts = document.querySelectorAll('.footer__title, .footer__description, .footer__heading, .footer__link, .footer__copyright');
            footerTexts.forEach(text => {
                text.style.setProperty('color', '#ffffff', 'important');
            });
            
            const socialLinks = document.querySelectorAll('.social__link');
            socialLinks.forEach(link => {
                link.style.setProperty('color', '#ffffff', 'important');
            });
            
            // Ensure CTA section has white text on orange background
            const cta = document.querySelector('.cta');
            if (cta) {
                cta.style.setProperty('background', 'linear-gradient(135deg, #ff7900, #e66a00)', 'important');
                const ctaTexts = cta.querySelectorAll('h2, p, .section__title, .section__description, *');
                ctaTexts.forEach(text => {
                    text.style.setProperty('color', '#ffffff', 'important');
                });
            }
            
            // Ensure contact cards are light themed
            const contactItems = document.querySelectorAll('.contact__item');
            contactItems.forEach(item => {
                item.style.setProperty('background-color', '#ffffff', 'important');
                item.style.setProperty('border', '1px solid #e2e8f0', 'important');
                item.style.setProperty('box-shadow', '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 'important');
            });
            
            const contactIcons = document.querySelectorAll('.contact__icon');
            contactIcons.forEach(icon => {
                icon.style.setProperty('background-color', '#ff7900', 'important');
                icon.style.setProperty('color', '#ffffff', 'important');
            });
            
            // Ensure form elements are light themed
            const formInputs = document.querySelectorAll('.form__input, .form__select, .form__textarea');
            formInputs.forEach(input => {
                input.style.setProperty('background-color', '#ffffff', 'important');
                input.style.setProperty('border', '1px solid #d1d5db', 'important');
                input.style.setProperty('color', '#1e293b', 'important');
            });
            
            // Force a complete style refresh
            document.body.offsetHeight;
            document.documentElement.offsetHeight;
            
            // Debug after setting styles
            console.log('After setting light theme:');
            console.log('Body background:', getComputedStyle(document.body).backgroundColor);
            console.log('Body inline style:', document.body.style.backgroundColor);
        }
    });
}

// Update theme icon
function updateThemeIcon(button, theme) {
    const icon = button.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        button.setAttribute('title', 'Switch to light mode');
    } else {
        icon.className = 'fas fa-moon';
        button.setAttribute('title', 'Switch to dark mode');
    }
}

// Export functions for use in other scripts
window.TrainingCenter = {
    showNotification: function(message, type) {
        // This will be available globally
        const event = new CustomEvent('showNotification', {
            detail: { message, type }
        });
        document.dispatchEvent(event);
    },
    companyConfig: COMPANY_CONFIG
};
