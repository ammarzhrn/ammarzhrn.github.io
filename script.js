const trigger = document.querySelector('.trigger');
const boxes = document.querySelectorAll('.box');

trigger.addEventListener('click', () => {
    const percentages = [60, 30, 40, 45, 30, 50, 30];
    
    boxes.forEach((box, index) => {
        const percentage = percentages[index];
        box.style.height = `${percentage}%`;
        box.textContent = `${percentage}%`;
    });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const splashContainer = document.querySelector(".splash-container");
    
    // Check if the splash screen has been shown before
    const hasShownSplash = localStorage.getItem("hasShownSplash");

    if (!hasShownSplash) {
        setTimeout(function() {
            splashContainer.classList.add("hidden");
            setTimeout(function() {
                splashContainer.style.display = "none";
            }, 1000); // Delay should match the splash fade transition duration
            localStorage.setItem("hasShownSplash", true); // Set the flag that the splash screen has been shown
        }, 5000); // Match the delay with your animation duration
    } else {
        splashContainer.style.display = "none"; // Hide the splash screen immediately
    }
    
    const animatedText = document.querySelector('.animated-text');
    const words = ['Hello', 'Hola', 'Halo', 'Bonjour', 'Privet', 'Ahlan', 'Anyoung', 'Merhaba', 'Namaste', 'God Dag'];
    let currentWordIndex = 0;

    function changeWord() {
        animatedText.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    setInterval(changeWord, 200); 
});


