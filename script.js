// ========================================
// Navigation
// ========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Scroll Effect on Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ========================================
// Smooth Scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Scroll to Top Button
// ========================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elementos a animar
const animateElements = [
    '.service-card',
    '.exercise-item',
    '.trainer-card',
    '.pricing-card',
    '.testimonial-card',
    '.schedule-card',
    '.schedule-features',
    '.location-card',
    '.about-image',
    '.about-text',
    '.feature'
];

animateElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// ========================================
// Counter Animation
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toFixed(1);
            clearInterval(timer);
        } else {
            element.textContent = start.toFixed(1);
        }
    }, 16);
}

// Animar rating cuando sea visible
const ratingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const ratingNumber = entry.target.querySelector('.rating-number');
            if (ratingNumber && !ratingNumber.classList.contains('animated')) {
                animateCounter(ratingNumber, 4.8);
                ratingNumber.classList.add('animated');
            }
            ratingObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const overallRating = document.querySelector('.overall-rating');
if (overallRating) {
    ratingObserver.observe(overallRating);
}

// ========================================
// Parallax Effect
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Hero parallax
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
    
    // CTA parallax
    const cta = document.querySelector('.cta-section');
    if (cta) {
        const ctaOffset = cta.offsetTop;
        if (scrolled > ctaOffset - window.innerHeight) {
            cta.style.backgroundPositionY = (scrolled - ctaOffset) * 0.3 + 'px';
        }
    }
});

// ========================================
// Active Link Highlighting
// ========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
});

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// WhatsApp Button Animation
// ========================================
const whatsappBtn = document.querySelector('.whatsapp-float');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        whatsappBtn.style.transform = 'scale(0.8)';
    } else {
        // Scrolling up
        whatsappBtn.style.transform = 'scale(1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ========================================
// Performance Optimization
// ========================================
// Lazy load images nativo ya está implementado en HTML con loading="lazy"
// No necesitamos JavaScript adicional para eso

// ========================================
// Service Worker (Optional - for PWA)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ========================================
// Analytics Event Tracking
// ========================================
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track button clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent);
    });
});

// Track WhatsApp clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Contact', 'WhatsApp', 'Click');
    });
});

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Contact', 'Phone', 'Click');
    });
});

// ========================================
// Dynamic Year in Footer
// ========================================
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = currentYear;
});

// ========================================
// Prevent Default Form Submission (if forms added)
// ========================================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form handling logic here
        console.log('Form submitted');
    });
});

// ========================================
// Testimonials Slider - Infinite Loop
// ========================================
class TestimonialsSlider {
    constructor() {
        this.slider = document.getElementById('testimonialsSlider');
        this.track = document.getElementById('testimonialsTrack');
        this.prevBtn = document.getElementById('testimonialPrev');
        this.nextBtn = document.getElementById('testimonialNext');
        this.dotsContainer = document.getElementById('sliderDots');
        
        if (!this.slider || !this.track) return;
        
        this.originalCards = Array.from(this.track.querySelectorAll('.testimonial-card'));
        this.totalCards = this.originalCards.length;
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        this.cloneCards();
        this.cards = this.track.querySelectorAll('.testimonial-card');
        this.createDots();
        
        // Iniciar en la primera tarjeta real (después de los clones)
        this.currentIndex = this.getCardsPerView() === 3 ? this.totalCards - 1 : this.totalCards;
        this.updateSlider(false); // Sin transición inicial
        
        this.attachEventListeners();
        this.startAutoplay();
        
        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());
    }
    
    cloneCards() {
        const cardsPerView = this.getCardsPerView();
        const cloneCount = cardsPerView === 3 ? 3 : cardsPerView;
        
        // Clonar al final
        for (let i = 0; i < cloneCount; i++) {
            const clone = this.originalCards[i].cloneNode(true);
            clone.classList.add('clone');
            this.track.appendChild(clone);
        }
        
        // Clonar al inicio (en orden inverso)
        for (let i = this.totalCards - 1; i >= this.totalCards - cloneCount; i--) {
            const clone = this.originalCards[i].cloneNode(true);
            clone.classList.add('clone');
            this.track.insertBefore(clone, this.track.firstChild);
        }
    }
    
    getCardsPerView() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        return 3;
    }
    
    createDots() {
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalCards; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateSlider(withTransition = true) {
        const cardsPerView = this.getCardsPerView();
        const sliderWidth = this.slider.offsetWidth;
        const gap = 32;
        const cardWidth = this.cards[0].offsetWidth;
        
        // Deshabilitar transición si es necesario (para saltos instantáneos)
        if (!withTransition) {
            this.track.style.transition = 'none';
            // Deshabilitar también transiciones de las tarjetas
            this.cards.forEach(card => {
                card.style.transition = 'none';
            });
        }
        
        let offset;
        
        if (cardsPerView === 1) {
            offset = -(this.currentIndex * (cardWidth + gap)) + (sliderWidth - cardWidth) / 2;
        } else if (cardsPerView === 2) {
            const totalWidth = (cardWidth * 2) + gap;
            offset = -(this.currentIndex * (cardWidth + gap)) + (sliderWidth - totalWidth) / 2;
        } else {
            const centerCardPosition = (this.currentIndex + 1) * (cardWidth + gap);
            offset = -centerCardPosition + sliderWidth / 2 - cardWidth / 2;
        }
        
        this.track.style.transform = `translateX(${offset}px)`;
        
        // Restaurar transición en el siguiente frame para asegurar que el cambio instantáneo se aplique primero
        if (!withTransition) {
            requestAnimationFrame(() => {
                this.track.style.transition = '';
                // Restaurar transiciones de las tarjetas
                this.cards.forEach(card => {
                    card.style.transition = '';
                });
            });
        }
        
        this.updateCardStates();
        this.updateDots();
    }
    
    updateCardStates() {
        const cardsPerView = this.getCardsPerView();
        
        this.cards.forEach((card, index) => {
            card.classList.remove('active', 'adjacent', 'hidden');
            
            if (cardsPerView === 1) {
                if (index === this.currentIndex) {
                    card.classList.add('active');
                } else if (Math.abs(index - this.currentIndex) === 1) {
                    card.classList.add('adjacent');
                } else {
                    card.classList.add('hidden');
                }
            } else if (cardsPerView === 2) {
                if (index === this.currentIndex) {
                    card.classList.add('active');
                } else if (index === this.currentIndex + 1) {
                    card.classList.add('adjacent');
                } else if (Math.abs(index - this.currentIndex) === 1) {
                    card.classList.add('adjacent');
                } else {
                    card.classList.add('hidden');
                }
            } else {
                const activeIndex = this.currentIndex + 1;
                
                if (index === this.currentIndex || index === activeIndex || index === this.currentIndex + 2) {
                    if (index === activeIndex) {
                        card.classList.add('active');
                    } else {
                        card.classList.add('adjacent');
                    }
                } else if (Math.abs(index - activeIndex) === 2) {
                    card.classList.add('adjacent');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    }
    
    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.slider-dot');
        const cardsPerView = this.getCardsPerView();
        const cloneCount = cardsPerView === 3 ? 3 : cardsPerView;
        
        // Calcular el índice real (sin contar clones)
        let realIndex = this.currentIndex - cloneCount;
        
        // Ajustar para desktop donde mostramos 3 tarjetas
        if (cardsPerView === 3) {
            realIndex = this.currentIndex - cloneCount + 1;
        }
        
        // Normalizar el índice
        realIndex = ((realIndex % this.totalCards) + this.totalCards) % this.totalCards;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === realIndex);
        });
    }
    
    goToSlide(index) {
        if (this.isTransitioning) return;
        
        const cardsPerView = this.getCardsPerView();
        const cloneCount = cardsPerView === 3 ? 3 : cardsPerView;
        
        // Convertir índice de dot a índice real del array (considerando clones)
        this.currentIndex = index + cloneCount;
        if (cardsPerView === 3) {
            this.currentIndex--;
        }
        
        this.updateSlider();
        this.resetAutoplay();
    }
    
    next() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.currentIndex++;
        this.updateSlider();
        
        // Usar transitionend para sincronizar el loop perfectamente
        const handleTransitionEnd = () => {
            this.checkLoop();
            this.isTransitioning = false;
            this.track.removeEventListener('transitionend', handleTransitionEnd);
        };
        
        this.track.addEventListener('transitionend', handleTransitionEnd);
        
        // Fallback por si acaso
        setTimeout(() => {
            if (this.isTransitioning) {
                handleTransitionEnd();
            }
        }, 550);
    }
    
    prev() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.currentIndex--;
        this.updateSlider();
        
        const handleTransitionEnd = () => {
            this.checkLoop();
            this.isTransitioning = false;
            this.track.removeEventListener('transitionend', handleTransitionEnd);
        };
        
        this.track.addEventListener('transitionend', handleTransitionEnd);
        
        setTimeout(() => {
            if (this.isTransitioning) {
                handleTransitionEnd();
            }
        }, 550);
    }
    
    checkLoop() {
        const cardsPerView = this.getCardsPerView();
        const cloneCount = cardsPerView === 3 ? 3 : cardsPerView;
        const totalWithClones = this.cards.length;
        
        // Si llegamos a los clones del final, saltar al inicio real
        if (this.currentIndex >= totalWithClones - cloneCount) {
            this.currentIndex = cloneCount + (this.currentIndex - (totalWithClones - cloneCount));
            this.updateSlider(false);
        }
        
        // Si llegamos a los clones del inicio, saltar al final real
        if (this.currentIndex < cloneCount) {
            this.currentIndex = totalWithClones - cloneCount - (cloneCount - this.currentIndex);
            this.updateSlider(false);
        }
    }
    
    attachEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prev();
                this.resetAutoplay();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.next();
                this.resetAutoplay();
            });
        }
        
        // Click en tarjetas para navegar
        this.cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (this.isTransitioning) return;
                
                const cardsPerView = this.getCardsPerView();
                if (cardsPerView === 1) {
                    if (index !== this.currentIndex) {
                        if (index > this.currentIndex) {
                            this.next();
                        } else {
                            this.prev();
                        }
                        this.resetAutoplay();
                    }
                } else if (cardsPerView === 2) {
                    if (index === this.currentIndex + 1) {
                        this.next();
                        this.resetAutoplay();
                    } else if (index === this.currentIndex - 1) {
                        this.prev();
                        this.resetAutoplay();
                    }
                } else {
                    // En desktop (3 tarjetas)
                    if (index === this.currentIndex) {
                        this.prev();
                        this.resetAutoplay();
                    } else if (index === this.currentIndex + 2) {
                        this.next();
                        this.resetAutoplay();
                    }
                }
            });
            
            card.style.cursor = 'pointer';
        });
        
        // Soporte para gestos táctiles
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
        
        // Redimensionar ventana - reconstruir el carrusel
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Reconstruir el carrusel manteniendo la tarjeta actual
                const currentRealIndex = this.getRealIndex();
                this.track.innerHTML = '';
                this.originalCards.forEach(card => {
                    this.track.appendChild(card.cloneNode(true));
                });
                this.originalCards = Array.from(this.track.querySelectorAll('.testimonial-card'));
                
                // Recrear clones
                while (this.track.querySelector('.clone')) {
                    this.track.querySelector('.clone').remove();
                }
                this.cloneCards();
                this.cards = this.track.querySelectorAll('.testimonial-card');
                
                // Restaurar posición
                this.createDots();
                this.goToSlide(currentRealIndex);
            }, 250);
        });
        
        // Soporte para teclado
        document.addEventListener('keydown', (e) => {
            if (this.isInViewport(this.slider)) {
                if (e.key === 'ArrowLeft') {
                    this.prev();
                    this.resetAutoplay();
                } else if (e.key === 'ArrowRight') {
                    this.next();
                    this.resetAutoplay();
                }
            }
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
            this.resetAutoplay();
        }
    }
    
    getRealIndex() {
        const cardsPerView = this.getCardsPerView();
        const cloneCount = cardsPerView === 3 ? 3 : cardsPerView;
        
        let realIndex = this.currentIndex - cloneCount;
        if (cardsPerView === 3) {
            realIndex = this.currentIndex - cloneCount + 1;
        }
        
        return ((realIndex % this.totalCards) + this.totalCards) % this.totalCards;
    }
    
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Inicializar el slider cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialsSlider();
});

// ========================================
// Console Message
// ========================================
console.log('%c🏋️ Bienvenido a Templo Fitness Caraz', 'color: #E31E24; font-size: 20px; font-weight: bold;');
console.log('%c💪 Desarrollado con pasión por el fitness', 'color: #FFC107; font-size: 14px;');
