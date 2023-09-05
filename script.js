const trigger = document.querySelector('.trigger');
const boxes = document.querySelectorAll('.box');

trigger.addEventListener('click', () => {
    const percentages = [60, 30, 40, 45, 30, 50, 30];
    
    boxes.forEach((box, index) => {
        const percentage = percentages[index];
        box.style.height = `${percentage}%`;
        box.style.color = `white`;
        box.style.opacity = `1`;
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

document.addEventListener("DOMContentLoaded", function() {
    const splashContainer = document.querySelector(".splash-container");
    
    setTimeout(function() {
        splashContainer.classList.add("hidden");
        setTimeout(function() {
            splashContainer.style.display = "none";
        }, 1000); 
    }, 2300); 
    
    const animatedText = document.querySelector('.animated-text');
    const words = ['Hello', 'Hola', 'Halo', 'Bonjour', 'Privet', 'Ahlan', 'Anyoung', 'Merhaba', 'Namaste', 'God Dag'];
    let currentWordIndex = 0;

    function changeWord() {
        animatedText.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    setInterval(changeWord, 200); 
});

document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");

    timelineItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("expanded");
        });
    });
});
