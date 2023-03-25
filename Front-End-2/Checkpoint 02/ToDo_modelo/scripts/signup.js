const inputNameRef = document.querySelector('#inputName');
const inputSurnameRef = document.querySelector('#inputSurname');
const inputEmailRef = document.querySelector('#inputEmail');
const inputPasswordRef = document.querySelector('#inputPassword');
const inputPasswordRepeatRef = document.querySelector('#inputPasswordRepeat');
const buttomCreateRef = document.querySelector('#buttonCreate');


var formErrors = {
    inputName: true,
    inputSurname: true,
    inputEmail: true,
    inputPassword: true, 
    inputPasswordRepeat: true
    
}

function checkFormValidity() {

    const formErrorsArray = Object.values(formErrors)

    const formValidity = formErrorsArray.every(item => item === false)

    buttomCreateRef.disabled = !formValidity

    

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

function validatePassword(){
    if(inputPasswordRef.value != inputPasswordRepeatRef.value) {
        inputPasswordRepeatRef.setCustomValidity('error');
    } else {
        inputPasswordRepeatRef.setCustomValidity('');
    }
  }

  inputPasswordRef.onchange = validatePassword;
  inputPasswordRepeatRef.onkeyup = validatePassword;


function cadastro(event) {

    event.preventDefault()

    console.log()   

    buttomCreateRef.disabled = true
    buttomCreateRef.reset()

    formErrors.inputEmail = true
    formErrors.inputPassword =  true  
    formErrors.inputName= true
    formErrors.inputPasswordRepeat= true
    formErrors.inputSurname= true

}

inputNameRef.addEventListener('keyup', () => validateInput(inputNameRef));
inputSurnameRef.addEventListener('keyup', () => validateInput(inputSurnameRef));
inputEmailRef.addEventListener('keyup', () => validateInput(inputEmailRef));
inputPasswordRef.addEventListener('keyup', () => validateInput(inputPasswordRef));
inputPasswordRepeatRef.addEventListener('keyup', () => validateInput(inputPasswordRepeatRef))
buttomCreateRef.addEventListener('click', (event) => cadastro(event))