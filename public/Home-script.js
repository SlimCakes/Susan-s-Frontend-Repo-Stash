document.querySelectorAll('.work-item').forEach(item => {
            item.addEventListener('click', (event) => {
                if (!event.target.matches('.learn-more-btn') && !event.target.closest('.learn-more-btn')) {
                    alert('Work item clicked! You can replace this with your desired action.');
                }
            });
        });

        document.querySelectorAll('.learn-more-btn').forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.stopPropagation();
                alert('Learn More button clicked! You can replace this with your desired action.');
            });
        });
            
            function showArrow(element) {
        const arrowIcon = element.querySelector('.arrow-icon');
        arrowIcon.style.opacity = '1';
    }

    function hideArrow(element) {
        const arrowIcon = element.querySelector('.arrow-icon');
        arrowIcon.style.opacity = '0';
    }
        // Link to the 'about' page
    document.getElementById('about').addEventListener('click', function() {
        window.location.href = 'portfolio-About.html'; // Replace with the actual filename of your about page
    });

    // Link to the 'work' page
    document.getElementById('work').addEventListener('click', function() {
        window.location.href = 'portfolio-work.html'; // Replace with the actual filename of your work page
    });

    // Link to the 'contact' page
    document.getElementById('contact').addEventListener('click', function() {
        window.location.href = 'mailto:susan.nkere02@gmail.com'; // Replace with your actual email address
    });
