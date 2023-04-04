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

    // loginRef.disabled = true

    // formErrors.inputEmail = true
    // formErrors.inputPassword =  true

    loginUser()

}

inputEmailRef.addEventListener('keyup', () => validateInput(inputEmailRef)) 
inputPasswordRef.addEventListener('keyup', () => validateInput(inputPasswordRef))


//Parte login API

function loginUser () {

    const userLogin = {
        email: inputEmailRef.value,
        password: inputPasswordRef.value
    }

    const requestHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    } 
    
    // const registerUser = inputNameRef
    // localStorage.setItem('fisrtName', registerUser)

    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(userLogin)

    }

    fetch('https://todo-api.ctd.academy/v1/users/login', requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                    data => {
                        
                        localStorage.setItem('authToken', data.jwt)
                        
                        window.location.href = "./tarefas.html"
                    }
                )
            } else {
                alert('O seu usuário ou senha está incorreto')
            }
        }
    )
}

loginRef.addEventListener('click', (event) => cadastro(event))
