/* ========================================
   WVSPEC — ENTERPRISE LOGIC (REFINED)
   ======================================== */

'use strict';

const app = (() => {
    
    // ---- INITIALIZATION ----
    const init = () => {
        setupSmoothScroll();
        setupTechnologyTabs();
        setupContactForm();
        setupScrollReveal();
        setupActiveNav();
    };

    // ---- NAVIGATION: SMOOTH SCROLL & ACTIVE STATE ----
    const setupSmoothScroll = () => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    };

    const setupActiveNav = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    };

    // ---- TECHNOLOGY TAB CONTROL ----
    const setupTechnologyTabs = () => {
        const tabs = document.querySelectorAll('.tech-tab');
        const displayImg = document.getElementById('tech-image');

        const techData = {
            'interferometry': 'assets/surface_3d.jpg',
            'reflectance': 'assets/film_diagram.png',
            'ai': 'assets/material_chart.png'
        };

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const id = tab.dataset.tech;
                
                // Active UI
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Image Swap with Fade
                displayImg.style.opacity = '0';
                setTimeout(() => {
                    displayImg.src = techData[id];
                    displayImg.style.opacity = '1';
                }, 300);
            });
        });
    };

    // ---- FORM HANDLING (Formspree) ----
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwpbpkgj';

    const setupContactForm = () => {
        const contactForm = document.getElementById('pro-contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');

            submitBtn.disabled = true;
            submitBtn.textContent = 'TRANSMITTING...';

            try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: new FormData(contactForm)
                });

                if (response.ok) {
                    alert('Inquiry Received. Our technical team will reach out shortly.');
                    contactForm.reset();
                } else {
                    throw new Error('Submission failed');
                }
            } catch (err) {
                alert('Connection error. Please email us at msu@wvspec.com');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Inquiry';
            }
        });
    };

    // ---- SCROLL REVEAL (PRO TOUCH) ----
    const setupScrollReveal = () => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.8s ease-out';
            observer.observe(section);
        });

        // Add a class for the reveal effect
        const style = document.createElement('style');
        style.textContent = `
            section.revealed {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', app.init);
