document.addEventListener("DOMContentLoaded", () => {
    // Select all accordion headers with the data-target attribute
    const accordionHeaders = document.querySelectorAll('.accordion-header[data-target]');

    // Loop over each header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Get the target ID from the data-target attribute
            const targetID = header.getAttribute('data-target');
            const targetElement = document.querySelector(targetID);

            // Check if the target element exists
            if (targetElement) {
                // Smooth scroll to the target section
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.error(`Element with ID ${targetID} not found.`);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
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