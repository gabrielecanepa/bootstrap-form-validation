const REGEX = {
  'first-name': /^[a-z ,.'-]+$/i,
  'last-name': /^[a-z ,.'-]+$/i,
  'email': /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/,
  'phone-number': /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g,
  'city': /^[a-z ,.'-]+$/i,
  'country': /^[a-z ,.'-]+$/i,
  'zip-code': /^[0-9]{5}(?:-[0-9]{4})?$/
};

const allInputs = document.querySelectorAll('.form-control');
const checkbox = document.querySelector('#tos');
const button = document.querySelector('button');
const form = document.querySelector('form');

const isValid = input => REGEX[input.id].test(input.value);
const allValid = () => Array.from(allInputs).every(isValid);

const toggleValidClass = (input) => {
  input.classList.add('is-valid', 'is-invalid');
  if (isValid(input)) {
    input.classList.remove('is-invalid');
  } else {
    input.classList.remove('is-valid');
  }
};

const enableButton = () => {
  button.disabled = true;
  if (allValid() && checkbox.checked) {
    button.disabled = false;
    button.innerText = `Let's go, ${allInputs[0].value}`;
  } else {
    button.innerText = 'Please fill in all the fields';
  }
};

allInputs.forEach(input => input.addEventListener('blur', (event) => {
  toggleValidClass(event.currentTarget);
  enableButton();
}));
checkbox.addEventListener('click', enableButton);
form.addEventListener('submit', event => event.preventDefault());
