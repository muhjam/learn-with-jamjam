const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideNum = document.getElementById('slideNum');
const container = document.querySelector('.slides-container');

let currentSlide = 0;

function updateSlides() {
    container.style.transform = `translateX(-${currentSlide * 100}vw)`;
    slideNum.textContent = `${currentSlide + 1} / ${slides.length}`;
    
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;

    // Update active class for animations if needed
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlides();
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    }
});

// Initial state
updateSlides();
