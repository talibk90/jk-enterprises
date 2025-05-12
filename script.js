document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
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
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
       if (contactForm) {
       contactForm.addEventListener('submit', function(e) {
           // Let the form submit to Formspree naturally
           // Don't call e.preventDefault()
           console.log('Form submitted');
       });
   }
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            // For demo purposes, we'll just log it and show a success message
            console.log('Form submitted with data:', formData);
            
            // Show success message
            const formContainer = this.closest('.contact-form');
            formContainer.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We will get back to you soon.</p>
                </div>
            `;
        });
    }
    
    // Add active class to header on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .value-item, .testimonial, .gallery-item, .info-item');
        const windowHeight = window.innerHeight;
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 100) {
                // Add a small delay based on the element's position in the document
                setTimeout(() => {
                    element.classList.add('animate');
                }, index * 100);
            }
        });
    };
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    setTimeout(animateOnScroll, 500);
    
    // Gallery image hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        // Add staggered animation delay
        item.style.animationDelay = `${index * 0.2}s`;
        
        item.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
    
    // Add CSS for animations and effects
    const style = document.createElement('style');
    style.textContent = `
        .header.scrolled {
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        .menu-toggle.active .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .menu-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle.active .bar:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        /* Animate on scroll classes */
        .service-card, .value-item, .testimonial, .gallery-item, .info-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .service-card.animate, .value-item.animate, .testimonial.animate, .gallery-item.animate, .info-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Stagger the animations */
        .service-card:nth-child(1), .value-item:nth-child(1), .testimonial:nth-child(1), .gallery-item:nth-child(1), .info-item:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .service-card:nth-child(2), .value-item:nth-child(2), .testimonial:nth-child(2), .gallery-item:nth-child(2), .info-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .service-card:nth-child(3), .value-item:nth-child(3), .testimonial:nth-child(3), .gallery-item:nth-child(3), .info-item:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .service-card:nth-child(4), .value-item:nth-child(4), .gallery-item:nth-child(4) {
            transition-delay: 0.4s;
        }
        
        .gallery-item:nth-child(5) {
            transition-delay: 0.5s;
        }
        
        .gallery-item:nth-child(6) {
            transition-delay: 0.6s;
        }
        
        /* Form success message */
        .success-message {
            text-align: center;
            padding: 40px 20px;
        }
        
        .success-message i {
            font-size: 4rem;
            color: #10b981;
            margin-bottom: 20px;
        }
        
        .success-message h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            color: #0f172a;
        }
        
        .success-message p {
            font-size: 1.1rem;
            color: #6b7280;
        }
        
        /* Gallery hover effect */
        .gallery-item.active .gallery-overlay {
            opacity: 1;
        }
        
        .gallery-item.active img {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);
}); 
