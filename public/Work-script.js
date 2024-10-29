function showArrow(element) {
    const arrowIcon = element.querySelector('.arrow-icon');
    arrowIcon.style.opacity = '1';
}

function hideArrow(element) {
    const arrowIcon = element.querySelector('.arrow-icon');
    arrowIcon.style.opacity = '0';
}

document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', (event) => {
        if (!event.target.matches('.learn-more-btn') && !event.target.closest('.learn-more-btn')) {
            // Navigate to target (if set)
            const target = item.getAttribute('data-target');
            if (target) {
                window.location.href = target;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const workItems = document.querySelectorAll('.work-item');
    
    workItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                window.location.href = target;
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
