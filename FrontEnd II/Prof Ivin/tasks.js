// import { baseUrlAPI } from './env.js'
const baseUrlAPI = 'https://todo-api.ctd.academy/v1'

// Obtenção do token salvo no Local Storage
const authToken = localStorage.getItem('authToken')
const createTaskbuttonRef = document.querySelector('#createTaskbutton')
const logoutButtonRef = document.querySelector('#logoutButton')
// Ciração dos Headers gerais de todas as Requests da parte privada da aplicação (já que todos irão precisar do Token não é necessário criar um para cada request)
const requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': authToken
}



// Função que irá realizar o logout do usuário da aplicação. Logout = não ter token no localStorage
function logout() {

    window.location.href = '/aula-19/index.html'
    localStorage.clear()

}



// Função que irá criar uma Task
function createTask() {

    // Informações sobre a Task
    const taskData = {
        description: 'Teste tarefa 2',
        completed: true
    }

    // Configuração da Request
    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(taskData)
    }

    // Realização da Request para criar uma nova Task
    fetch(`${baseUrlAPI}/tasks`, requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                    data => {
                        console.log(data)
                    }
                )
            }
        }
    )

}



// Função que obtém as Tasks criadas pelo usuário logado
function getTasks() {

    // Configurações da Request
    var requestConfig = {
        method: 'GET',
        headers: requestHeaders
    }

    // Requisição para criar a Task
    fetch(`${baseUrlAPI}/tasks`, requestConfig).then(
        response => {
            if(response.ok) {
                response.json().then(
                    tasks => {
                        console.log(tasks)
                    }
                )
            }
        }
    )

}



// Função que irá obter os dados do usuário Logado
function getUserData() {

    // Configuração da Request
    var requestConfig = {
        method: 'GET',
        headers: requestHeaders
    }

    // Request para obter os Dados do Usuário
    fetch(`${baseUrlAPI}/users/getMe`, requestConfig).then(
        response => {
            if(response.ok) {

                // Obtém as Tasks do usuário logado
                getTasks()

            } else {
                // Verifica se a API retornou o Status code 401(O número 401 significa que o Token fornecido está inválido)
                if(response.status === 401) {

                    // Caso o Token esteja errado será realizar o Logout do usuário na Aplicação
                    logout()

                }
            }
        }
    )

}



// Função que irá verificar se existe o token ou não no Local Storage, se não existir o usuário não deveria estar acessando essa página pois é apenas para quando o usuário estiver logado
function checkIfAuthTokenExist() {

    // Verifica se o Token é null
    if(authToken === null) {

        // Caso for null será realizado o Logout do usuário na aplicação
        logout()
        
    } else {
    
        // Caso existe será disparada a função de obter os dados do usuário(onde irá ocorrer uma segunda verificação do 401 que será responsabilidade da API)
        getUserData()

    }

}

// Chama a função que irá verificar se o usuário deveria estar acessando essa página ou não
checkIfAuthTokenExist()

createTaskbuttonRef.addEventListener('click', () => createTask())
logoutButtonRef.addEventListener('click', () => logout())