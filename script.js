// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Join form submission
        // document.getElementById('joinForm').addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     const formData = new FormData(this);
        //     const data = Object.fromEntries(formData);
            
        //     // Simulate form submission
        //     alert(`Thank you ${data.name}! Your application has been submitted. We'll contact you soon at ${data.email}.`);
            
        //     // Reset form
        //     this.reset();
        // });

        // Apply for position function
        // function applyForPosition(position) {
        //     const email = prompt(`Interested in ${position} position? Please enter your email address:`);
        //     if (email && email.includes('@')) {
        //         alert(`Thank you for your interest in the ${position} position! We'll send you more details at ${email}.`);
        //     } else if (email) {
        //         alert('Please enter a valid email address.');
        //     }
        // }

        // Add fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all fade-in-up elements
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(el);
        });

        // Active navigation highlighting
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-menu a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Particle effect for hero section
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(255, 215, 0, 0.7)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '100vh';
            particle.style.zIndex = '0';
            
            document.body.appendChild(particle);
            
            const animation = particle.animate([
                { transform: 'translateY(0)', opacity: 1 },
                { transform: 'translateY(-100vh)', opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'linear'
            });
            
            animation.addEventListener('finish', () => {
                particle.remove();
            });
        }

        // Create particles periodically
        setInterval(createParticle, 300);

        // Mobile menu toggle (simplified version)
        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle) {
            navToggle.addEventListener('click', function() {
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.toggle('active');
            });
        }

        // Add some interactive effects
        document.querySelectorAll('.team-card, .focus-card, .hiring-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Social media link handlers (you can replace these with actual URLs)
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('click', function(e) {
                e.preventDefault();
                const title = this.getAttribute('title');
                let message = '';
                
                switch(title) {
                    case 'Instagram':
                        message = 'Follow us on Instagram for updates and behind-the-scenes content!';
                         window.open('https://instagram.com/techgenz.pacific', '_blank');
                        break;
                    case 'Gmail':
                        message = 'Contact us at: techgenz@pacificinstitute.edu';
                         window.location.href = 'mailto:techgenz@pacificinstitute.edu';
                        break;
                    case 'LinkedIn':
                        message = 'Connect with us on LinkedIn for professional networking!';
                        window.open('https://linkedin.com/company/techgenz-pacific', '_blank');
                        break;
                    case 'WhatsApp':
                        message = 'Join our WhatsApp community for instant updates!';
                        window.open('https://chat.whatsapp.com/Lk2Gz7foHH9Ko12wTfIctA?mode=ac_c', '_blank');
                        break;
                }
                
                
            });
        });


        document.addEventListener('DOMContentLoaded', function () {
            const navToggle = document.querySelector('.nav-toggle');
            const navMenu = document.querySelector('.nav-menu');
            const navLinks = document.querySelectorAll('.nav-menu li a');

            navToggle.addEventListener('click', function () {
                navMenu.classList.toggle('nav-menu-active');
                navToggle.classList.toggle('active');
            });

            // Optional: Close menu when a link is clicked (for mobile)
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    navMenu.classList.remove('nav-menu-active');
                    navToggle.classList.remove('active');
                });
            });
        });