const nomeRef = document.querySelector('#unputNome')
const sobrenomeRef = document.querySelector('#inputSobrenome')
const emailRef = document.querySelector('#inputEmail')
const passwordRef = document.querySelector('#inputPassword')
const passwordConfirmRef = document.querySelector('#inputPasswordConfirm')
const loginRef = document.querySelector('#login')
const rightRef = document.querySelector('.right')

var formErrors = {
    nome: true,
    sobrenome: true,
    email: true,
    senha: true,
    senhaConfirmacao: true
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

    formErrors.nome = true
    formErrors.sobrenome = true
    formErrors.senhaConfirmacao = true
    formErrors.email = true
    formErrors.senha = true
}

nomeRef.addEventListener('keyup', () => validateInput(nomeRef))
sobrenomeRef.addEventListener('keyup', () => validateInput(sobrenomeRef))
emailRef.addEventListener('keyup', () => validateInput(emailRef))
passwordRef.addEventListener('keyup', () => validateInput(passwordRef))
passwordConfirmRef.addEventListener(('keyup', () => validateInput(passwordConfirmRef)))
loginRef.addEventListener('click', (event) => load(event))