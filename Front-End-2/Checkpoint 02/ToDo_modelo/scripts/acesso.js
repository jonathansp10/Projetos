const inputEmailRef = document.querySelector('#inputEmail');
const inputPasswordRef = document.querySelector('#inputPassword');
const loginRef = document.querySelector('#login');


var formErrors = {
    inputEmail: true,
    inputPassword: true,
    
}

function checkFormValidity() {

    const formErrorsArray = Object.values(formErrors)

    const formValidity = formErrorsArray.every(item => item === false)

    loginRef.disabled = !formValidity

    

}

function validateInput(inputRef) {

    const inputValid = inputRef.checkValidity()

    const elementFatherRef = inputRef.parentElement

    if(inputValid) {

        elementFatherRef.classList.remove('error')

    } else {

        elementFatherRef.classList.add('error')

    }

    formErrors[inputRef.id] = !inputValid

    checkFormValidity()

    console.log()

}

function cadastro(event) {

    event.preventDefault()

    console.log()   

    loginRef.disabled = true
    loginRef.reset()

    formErrors.inputEmail = true
    formErrors.inputPassword =  true

}

inputEmailRef.addEventListener('keyup', () => validateInput(inputEmailRef)) 
inputPasswordRef.addEventListener('keyup', () => validateInput(inputPasswordRef))
loginRef.addEventListener('click', (event) => cadastro(event))