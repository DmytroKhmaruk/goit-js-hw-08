import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackFormStateKey = 'feedback-form-state';

form.addEventListener('input', throttle(saveFormState, 500));

window.addEventListener('load', loadFormState);

function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));
}

function loadFormState() {
  const savedState = localStorage.getItem(feedbackFormStateKey);
  if (savedState) {
    const formData = JSON.parse(savedState);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.removeItem(feedbackFormStateKey);

  emailInput.value = '';
  messageInput.value = '';

  console.log(formData);
}