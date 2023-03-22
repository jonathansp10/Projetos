const emailRef = document.querySelector('#inputEmail')
const passwordRef = document.querySelector('#inputPassword')
const loginRef = document.querySelector('#login')
const rightRef = document.querySelector('#right')

var formErrors = {
    email: true,
    senha: true
}

function checkFormValidity(){

    const formErrorsArray = Object.values(formErrors)
    const formValidity = formErrorsArray.every(item => item === false)
    loginRef.disable = !formValidity

}

function validateInput(inputRef) {
    
    const inputValid = inputRef.checkValidity()
    const form = inputRef.parentElement

    if(inputValid){

        form.classList.remove('error')

    } else {

        form.classList.add('error')

    }

    formErrors[inputRef.id] = !inputValid

    checkFormValidity()
}

function load(event){

    event.preventDefaut()

    loginRef.disable = true
    rightRef.reset()

    formErrors.email = true
    formErrors.senha = true
}

emailRef.addEventListener('keyup', () => validateInput(emailRef))
passwordRef.addEventListener('keyup', () => validateInput(passwordRef))
loginRef.addEventListener('click', (event) => load(event))