const formData = {
  email: '',
  message: '',
};

const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

const savedData = localStorage.getItem(LS_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  inputEmail.value = parsedData.email;
  textarea.value = parsedData.message;
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(LS_KEY);
  form.reset();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  } else {
    console.log(formData);
  }
  formData.email = '';
  formData.message = '';
}
