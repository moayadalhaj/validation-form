var nameError = document.getElementById('nameError');
var phoneError = document.getElementById('phoneError');
var emailError = document.getElementById('emailError');
var messageError = document.getElementById('messageError');
var submitError = document.getElementById('submitError');

const validateName = () => {
    var name = document.getElementById('contactName').value;
    if (name.length == 0) {
        nameError.textContent = "Name is required";
        return false;
    } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.textContent = "Write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
}

const validatePhone = () => {
    var phone = document.getElementById('contactPhone').value;

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
    var email = document.getElementById('contactEmail').value;

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
    var message = document.getElementById('contactMessage').value;
    var req = 30;
    var left = req - message.length;

    if (left > 0) {
        messageError.textContent = left + " more characters required";
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
}

const validateForm = () => {
    if (!validateName() | !validatePhone() | !validateEmail() | !validateMessage()) {
        submitError.style.display = "block";
        submitError.textContent = "Please fix error to submit";
        setTimeout(() => {
            submitError.style.display = 'none'
        }, 3000)
        return false;
    }
    location.replace('./');
}