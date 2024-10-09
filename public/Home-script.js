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
    document.querySelector('.contact-button').addEventListener('click', function() {
        window.location.href = 'about.html'; // Replace with the actual filename of your about page
    });

// Array of greetings in different languages
const greetings = [
    { text: "Hello there👋,", class: "greeting-english" },
    { text: "Hola👋,", class: "greeting-spanish" },
    { text: "Bonjour👋,", class: "greeting-french" },
    { text: "Ciao👋,", class: "greeting-italian" },
    { text: "こんにちは👋,", class: "greeting-japanese" }
];
let currentGreetingIndex = 0;

// Function to change the greeting
function changeGreeting() {
    const greetingElement = document.getElementById("greeting");
    // Remove the previous class
    greetingElement.classList.remove(greetings[currentGreetingIndex].class);
    
    // Update the text and class
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length; // Cycle through the greetings
    greetingElement.textContent = greetings[currentGreetingIndex].text; // Update the text
    greetingElement.classList.add(greetings[currentGreetingIndex].class); // Add the new class
}

// Change greeting every 2 seconds (2000 milliseconds)
setInterval(changeGreeting, 2000);

