// script.js
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
