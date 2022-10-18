let nameError = document.getElementById('nameError');
let phoneError = document.getElementById('phoneError');
let emailError = document.getElementById('emailError');
let messageError = document.getElementById('messageError');
let submitError = document.getElementById('submitError');
let passwordError = document.getElementById('passwordError');
let confirmPasswordError = document.getElementById('confirmPasswordError');


const validateName = () => {
    let name = document.getElementById('contactName').value;
    if (name.length == 0) {
        nameError.textContent = "Name is required";
        return false;
    } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]{1,}/)) {
        nameError.textContent = "Write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
}

const validatePhone = () => {
    let phone = document.getElementById('contactPhone').value;

    if (phone.length == 0) {
        phoneError.textContent = "Phone No. is required";
        return false;
    } else if (phone.length != 10) {
        phoneError.textContent = "Phone No. should be 10 digits";
        return false;
    } else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.textContent = "Only digits please";
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
}

const validateEmail = () => {
    let email = document.getElementById('contactEmail').value;

    if (email.length == 0) {
        emailError.textContent = "Email is required";
        return false;
    } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z].*[\.][a-z]{2,4}$/)) {
        emailError.textContent = "Email invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
}

const validateMessage = () => {
    let message = document.getElementById('contactMessage').value;
    let req = 30;
    let left = req - message.length;

    if (left > 0) {
        messageError.textContent = left + " more characters required";
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
}

const validatePassword = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword');
    confirmPassword.disabled = true;

    if (password.length == 0) {
        passwordError.textContent = "Password is required";
        return false;
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
        passwordError.textContent = "Password invalid";
        return false;
    }

    passwordError.innerHTML = '<i class="fas fa-check-circle"></i';
    confirmPassword.disabled = false
    return true;
}

const validateConfirmPassword = () => {
    let confirmPassword = document.getElementById('confirmPassword').value;
    let password = document.getElementById('password').value;

    if (confirmPassword.length == 0) {
        confirmPasswordError.textContent = "Password is required";
        return false;
    } else if (confirmPassword != password) {
        confirmPasswordError.textContent = "Password does not match";
        return false;
    }

    confirmPasswordError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
}

const validateForm = () => {
    if (!validateName() | !validatePhone() | !validateEmail() | !validateMessage() | !validatePassword()) {
        submitError.style.display = "block";
        submitError.textContent = "Please fix error to submit";
        setTimeout(() => {
            submitError.style.display = 'none'
        }, 3000)
        return false;
    }
    location.replace('./');
}