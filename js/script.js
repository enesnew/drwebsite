const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

// Otomatik slayt geçişi (isteğe bağlı)
// setInterval(() => {
//     currentIndex++;
//     showSlide(currentIndex);
// }, 5000); 