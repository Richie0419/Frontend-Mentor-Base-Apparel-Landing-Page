const buttonBtn = document.querySelector('.button');
const errorImg = document.querySelector('.error-img');
const errorMsg = document.querySelector('.error-msg');
const emailInput = document.getElementById('email');
const formInput = document.querySelector('.input');

buttonBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        errorImg.style.display = 'block';
        errorMsg.style.display = 'block';
        formInput.style.border = '1px solid red';

        setTimeout(() => {
            errorImg.style.display = 'none';
            errorMsg.style.display = 'none';
            formInput.style.border = '1px solid rgba(100, 90, 90, 0.5) ';
        }, 5000);

    } else if (!emailRegex.test(emailValue)) {
        errorMsg.textContent = 'Please provide a valid email';
        errorMsg.style.display = 'block';
        formInput.style.border = '1px solid red';

        setTimeout(() => {
            errorMsg.style.display = 'none';
            formInput.style.border = '1px solid rgba(100, 90, 90, 0.5)';
        }, 5000);
    } else {
        errorImg.style.display = 'none';
        errorMsg.style.display = 'none';
    }
});
