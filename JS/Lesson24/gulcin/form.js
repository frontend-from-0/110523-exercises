const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const emailRegex = /^[^\.\s][\w\-\.{2,}]+@([\w-]+\.)+[\w-]{2,}$/gm;
const container = document.querySelector('.container');
const containerConfirmMessage = document.querySelector('.container__confirm-message');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
   e.preventDefault();
   const isFormCorrect = true;
   const inputErrorMessage = document.querySelector('.input-error-message');
   if (!emailRegex.test(formInput.value)) {
      inputErrorMessage.innerText = 'Please enter a valid e-mail.';
      isFormCorrect = false;
   } else {
      inputErrorMessage.innerText = '';
   }

   if (isFormCorrect) {
      container.remove();
      const submitTextEmail = document.querySelector('.confirm-message-text-email');
      submitTextEmail.innerText = `${formInput.value}`;
      containerConfirmMessage.style.display = 'flex';

   }


};