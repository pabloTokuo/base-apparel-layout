const emailInput = document.querySelector('[data-js="email-verify"]');
const invalidMsg = document.querySelector('[data-js="invalid-message"]');
const submitBtn = document.querySelector('[data-js="submit-btn"]');
const invalidImg = document.querySelector('[data-js="invalid-image"]');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitBtn.addEventListener('click', () => {
  const email = emailInput.value;

  if (emailRegex.test(email)) {
    // The email is valid.
    invalidMsg.style.display = 'none';
    invalidImg.style.display = 'none';
    emailInput.style.border = '2px solid #F8BFBF';
  } else {
    // The email is not valid.
    invalidMsg.innerHTML = 'Please provide a valid email';
    emailInput.style.border = '2px solid red';
    invalidImg.style.display = 'block';
    invalidMsg.style.display = 'block';
  }
});
