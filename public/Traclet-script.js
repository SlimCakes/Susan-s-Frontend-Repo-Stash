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

