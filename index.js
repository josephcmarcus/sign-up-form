const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');
const passwordMismatch = document.getElementById('password-mismatch');

passwordInput.onfocus = function() {
  document.getElementById('message').style.display = 'block';
};

passwordInput.onblur = function() {
  document.getElementById('message').style.display = 'none';
};

confirmPasswordInput.onfocus = function() {
    document.getElementById('message').style.display = 'block';
};
  
confirmPasswordInput.onblur = function() {
    document.getElementById('message').style.display = 'none';
};
  
passwordInput.onkeyup = function() {
  const lowerCaseLetters = /[a-z]/g;
  if (passwordInput.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add("invalid");
}

  const upperCaseLetters = /[A-Z]/g;
  if (passwordInput.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  const numbers = /[0-9]/g;
  if (passwordInput.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }

  if (passwordInput.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }
};

function checkPassword() {
    if (passwordInput.value === '' || confirmPasswordInput.value === '' ) {
        return false;
    } else if (passwordInput.value != confirmPasswordInput.value) {
        password.classList.add('password-mismatch');
        confirmpassword.classList.add('password-mismatch');
        passwordMismatch.innerText = 'Passwords do not match.';
        return false;
    } else {
        password.classList.remove('password-mismatch');
        confirmpassword.classList.remove('password-mismatch');
        passwordMismatch.innerText = '';
    }
}

confirmPasswordInput.onblur = function() {
    checkPassword();
};

password.addEventListener('blur', function() {
    checkPassword();
});