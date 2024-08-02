document.addEventListener('DOMContentLoaded', () => {
    const propertyCards = document.querySelectorAll('.property-card');

    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Show the overlay on hover
            const overlay = card.querySelector('.overlay');
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
        });

        card.addEventListener('mouseleave', () => {
            // Hide the overlay when not hovered
            const overlay = card.querySelector('.overlay');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        });

        card.addEventListener('click', (event) => {
            // Prevent default link behavior
            event.preventDefault();
            // Redirect to the blog page with property ID
            const propertyId = card.dataset.propertyId;
            window.location.href = `blog.html#${propertyId}`;
        });
    });
});