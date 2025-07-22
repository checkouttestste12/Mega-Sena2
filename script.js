// Countdown Timer
function startCountdown() {
    const countdownElements = {
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    // Set initial time (5 minutes and 43 seconds)
    let totalSeconds = 5 * 60 + 43;

    function updateCountdown() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        countdownElements.hours.textContent = hours.toString().padStart(2, '0');
        countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
        countdownElements.seconds.textContent = seconds.toString().padStart(2, '0');

        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            // Reset countdown when it reaches zero
            totalSeconds = 5 * 60 + 43;
        }
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll to form function
function scrollToForm() {
    const formSection = document.getElementById('form-section');
    formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
    
    // Add a subtle animation to the form
    const formContainer = document.querySelector('.form-container');
    formContainer.style.transform = 'scale(1.02)';
    setTimeout(() => {
        formContainer.style.transform = 'scale(1)';
    }, 200);
}

// Form submission handler
function handleFormSubmission() {
    const form = document.getElementById('lead-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        
        // Basic validation
        if (!name.trim() || !contact.trim()) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Validate contact (basic email or phone pattern)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[\d\s\(\)\-\+]+$/;
        
        if (!emailPattern.test(contact) && !phonePattern.test(contact)) {
            alert('Por favor, insira um email válido ou número de WhatsApp.');
            return;
        }
        
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Obrigado! Você receberá sua estratégia exclusiva em breve no WhatsApp ou email fornecido.');
            form.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Floating CTA visibility
function handleFloatingCTA() {
    const floatingCTA = document.getElementById('floating-cta');
    const formSection = document.getElementById('form-section');
    
    function checkVisibility() {
        const formRect = formSection.getBoundingClientRect();
        const isFormVisible = formRect.top < window.innerHeight && formRect.bottom > 0;
        
        if (isFormVisible) {
            floatingCTA.style.opacity = '0';
            floatingCTA.style.pointerEvents = 'none';
        } else {
            floatingCTA.style.opacity = '1';
            floatingCTA.style.pointerEvents = 'auto';
        }
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check initial state
}

// Smooth animations on scroll
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.benefit-item, .testimonial, .method-content, .offer-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Video placeholder click handler
function handleVideoClick() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    videoPlaceholder.addEventListener('click', function() {
        // Simulate video play (in a real scenario, you'd embed an actual video)
        const playIcon = videoPlaceholder.querySelector('i');
        playIcon.classList.remove('fa-play-circle');
        playIcon.classList.add('fa-pause-circle');
        
        // Add a "playing" effect
        videoPlaceholder.style.background = 'rgba(0,0,0,0.6)';
        
        setTimeout(() => {
            alert('Este é um exemplo de landing page. Em uma implementação real, aqui seria reproduzido o vídeo VSL.');
            playIcon.classList.remove('fa-pause-circle');
            playIcon.classList.add('fa-play-circle');
            videoPlaceholder.style.background = 'rgba(0,0,0,0.3)';
        }, 1000);
    });
}

// Add hover effects to testimonials
function addTestimonialEffects() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        testimonial.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    handleFormSubmission();
    handleFloatingCTA();
    handleScrollAnimations();
    handleVideoClick();
    addTestimonialEffects();
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add some dynamic effects
window.addEventListener('load', function() {
    // Add a subtle entrance animation to the hero section
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
});
