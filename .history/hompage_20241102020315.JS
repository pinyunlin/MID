let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

// 每5秒自動切換
setInterval(showSlide, 5000);

window.onload = showSlide;
