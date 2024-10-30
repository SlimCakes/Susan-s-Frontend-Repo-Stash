document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');
    
    if (menuBtn && mobileNav && overlay) {
        function toggleMenu() {
            menuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        }
        
        menuBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Close menu when clicking a nav link
        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    } else {
        console.error("Menu elements not found.");
    }

    // Contact button functionality
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            window.open('mailto:susan.nkere02@gmail.com');
        });
    } else {
        console.error("Element with class 'contact-button' not found.");
    }
});

document.getElementById('instagram').addEventListener('click', function() {
    window.open('https://www.instagram.com/biig.sue', '_blank');
});

document.getElementById('linkedin').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/susan-nkere', '_blank');
});

document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com/chidi-nkere', '_blank');
});

document.getElementById('tiktok').addEventListener('click', function() {
    window.open('https://www.tiktok.com/@big.sue_', '_blank');
});

document.getElementById('twitter').addEventListener('click', function() {
    window.open('https://www.tiktok.com/@Biigsue', '_blank');
});