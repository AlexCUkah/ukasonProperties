
// Carousel Functionality Images change //
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'images/hero1.jpg',
        'images/hero2.jpg',
        'images/hero3.jpg',
    ];
    let currentIndex = 0;

    function cycleImages() {
        const image = document.getElementById('carousel-image');
        image.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 3 seconds
    setInterval(cycleImages, 3000);
});