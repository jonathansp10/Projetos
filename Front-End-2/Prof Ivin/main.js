// import { baseUrlAPI } from './env.js'
const baseUrlAPI = 'https://todo-api.ctd.academy/v1'

var loginButtonRef = document.querySelector('#login')

// Função que irá autenticar o usuário
function authUser(event) {

    event.preventDefault()

    // Criação do objeto que iremos enviar na Request
    const userLoginData = {
        email: 'ivin32@mail.com.br',
        password: '1234'
    }

    // Configuração dos Headers que irão estar da Request
    const requestHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    
    // Objeto de Configuração da Request
    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(userLoginData)
    }

    // Envio da Request com os dados de login
    fetch(`${baseUrlAPI}/users/login`, requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                    data => {
                        // Armazenamento do Token no Local Storage
                        localStorage.setItem('authToken', data.jwt)
                        // Redirecionamento para a parte privada da nossa aplicação
                        window.location.href = "/aula-19/tasks.html"
                    }
                )
            } else {
                alert('O seu usuário ou senha está incorreto')
            }
        }
    )

}

loginButtonRef.addEventListener('click', (event) => authUser(event))