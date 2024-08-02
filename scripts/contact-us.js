function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
        // if doesnt pass test, alert given 
    }


    return true; // Return true if all checks pass
}

//API Usage messages sent to the form are sent to my email 
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
        const formData = new FormData(this);

        fetch('https://formspree.io/f/xyyrbwed', { // Formspree endpoint
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // This header tells Formspree to send back a JSON response
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // or 'response.text()' if you don't have a JSON response
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                alert('Your message has been sent successfully!');
                this.reset(); // Reset the form after successful submission
            })
            .catch(error => {
                alert('There was a problem submitting your form. Please try again.');
            });
    }
});


// Save data to local storage on form change
document.getElementById('contact-form').addEventListener('input', (event) => {
    localStorage.setItem(event.target.id, event.target.value);
});

// Retrieve data from local storage and set it to the form when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('message').value = localStorage.getItem('message') || '';
});