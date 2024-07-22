document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';

    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = 'Email is invalid.';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});
