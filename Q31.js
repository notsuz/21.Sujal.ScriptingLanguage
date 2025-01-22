document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    const name = document.getElementById('name').value;
    if (!name || /\d/.test(name)) {
        document.getElementById('nameError').textContent = 'Name is required and should not contain numbers.';
        isValid = false;
    }

    const username = document.getElementById('username').value;
    if (!username || !/^[a-zA-Z0-9_]+$/.test(username)) {
        document.getElementById('usernameError').textContent = 'Username is required and should not contain spaces or special characters except underscore (_).';
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    if (!phone || !/^[96|97|98]\d{8}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone is required, should start with 96, 97, or 98, and contain only numbers.';
        isValid = false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender is required.';
        isValid = false;
    }

    const address = document.getElementById('address').value;
    if (!address) {
        document.getElementById('addressError').textContent = 'Address is required.';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (!email || !email.includes('@')) {
        document.getElementById('emailError').textContent = 'Email is required and should include "@".';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!password || !passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password is required and should be at least 8 characters long with at least one digit, one uppercase, one lowercase, and one special character.';
        isValid = false;
    }

    const course = document.getElementById('course').value;
    if (!course) {
        document.getElementById('courseError').textContent = 'Course selection is required.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}