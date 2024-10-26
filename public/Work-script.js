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
