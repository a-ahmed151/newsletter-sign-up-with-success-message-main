
function checkEmail(){
    const placeholderEmail = document.querySelector('#placeholder')
    const inputEmail = document.querySelector('#email').value
    if (isValidEmail(inputEmail)){
        placeholderEmail.textContent = inputEmail
        showMessage()
    }else{
        document.querySelector('#email').style.borderColor = 'hsl(4, 100%, 67%)';
        document.querySelector('#email').style.backgroundColor = 'hsla(4, 100%, 67%,0.2)';
        document.querySelector('#invalid-email').style.display = 'inline';
    }

}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(){
    document.querySelector('.success-message').style.display = '';
    document.querySelector('.main-content').style.display = 'none';
}

function dissmissMessage(){
    document.querySelector('#email').style.borderColor = '';
    document.querySelector('#email').style.backgroundColor = '';
    document.querySelector('#invalid-email').style.display = 'none';
    document.querySelector('.success-message').style.display = 'none';
    document.querySelector('.main-content').style.display = '';
    document.querySelector('#sub-form').reset();

}