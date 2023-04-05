import { redirectUser } from './signup'

const authToken = localStorage.getItem('authToken')
const nameRef = document.querySelector('#name');
const buttonCloseAppRef= document.querySelector('#closeApp')
const user = JSON.parse(localStorage.getItem('userData'))



const requestHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': authToken
}

function getUserData() {

  var requestConfig = {
      method: 'GET',
      headers: requestHeaders
  }
 
fetch(`https://todo-api.ctd.academy/v1/users/getMe`, requestConfig).then(
      response => {
          if(response.ok) {
            
            getTasks()

          } else {
              
              if(response.status === 401) {

                  logout()

              }
          }
      }
  )

}

function logout() {

  window.location.href = './index.html'
  localStorage.clear()

}

function checkIfAuthTokenExist() {

  if(authToken === null) {

      
      logout()
      
  } else {
  
      getUserData()

  }

}




// function load(event){

//     event.preventDefault()

//     const personagem = {
//         imagem: urlRef.value,
//         titulo: personagemRef.value,
//         texto: descricaoRef.value 
//     }

//     // console.log(contentRef)

//         contentRef.innerHTML += `

//         <li class="tarefa">
//         <div class="not-done"></div>
//         <div class="descricao">
//           <p class="nome"></p>
//           <p class="timestamp">Criada em: 15/07/21</p>
//         </div>
//       </li>
//         `
    

// }

buttonCloseAppRef.addEventListener('click', () => logout())
nameRef.addEventListener('keyup', () => validateInput(nameRef));
