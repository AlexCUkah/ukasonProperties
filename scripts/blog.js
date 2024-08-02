window.addEventListener('load', (event) => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
        // Delay scrolling until the new page is fully loaded
        setTimeout(() => {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 0); // The timeout can be adjusted if necessary
    }
});




document.addEventListener('DOMContentLoaded', function () {
    preloadImages('.carousel-container', () => {
        initCarousel('.carousel-container');
    });
});

function preloadImages(selector, callback) {
    const containers = document.querySelectorAll(selector);
    let imagesToLoad = 0;
    let imagesLoaded = 0;

    containers.forEach(container => {
        const images = container.querySelectorAll('img');
        imagesToLoad += images.length;

        images.forEach(img => {
            if (img.complete) {
                imageLoaded();
            } else {
                img.onload = imageLoaded;
                img.onerror = imageLoaded; // Consider image loaded even if there's an error to avoid infinite wait
            }
        });
    });

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === imagesToLoad) {
            callback();
        }
    }
}

function initCarousel(selector) {
    const containers = document.querySelectorAll(selector);
    containers.forEach(container => {
        const images = Array.from(container.querySelectorAll('.blog-image'));
        let current = 0;

        // Initially hide all images except the first one
        images.forEach((img, index) => {
            if (index === 0) {
                img.style.marginLeft = '0%';
            } else {
                img.style.display = 'none';
            }
        });

        function moveToNextImage() {
            // Hide current image
            images[current].style.display = 'none';

            // Calculate the next image index
            current = (current + 1) % images.length;

            // Display the next image
            images[current].style.display = 'block';
            images[current].style.marginLeft = '0%';
        }

        // Adjust interval as needed 5secs
        setInterval(moveToNextImage, 5000);
    });
}


// Improved loadImage function with better handling for already loaded images
function loadImage(img) {
    if (img.dataset.src && !img.src) {
        const src = img.dataset.src;
        img.onload = () => img.removeAttribute('data-src');
        img.src = src;
    }
}