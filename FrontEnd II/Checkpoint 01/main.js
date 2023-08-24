let contentRef = document.querySelector('.container')
const personagemRef = document.querySelector('#personagem')
const urlRef = document.querySelector('#link')
const descricaoRef = document.querySelector('#descricao')
const buttonRef = document.querySelector('#load')
const personagemFormRef = document.querySelector('#personagemForm')

var formErrors= {
    personagem: true,
    link: true,
    descricao: true
}

function checkFormValidity(){
    
    const formErrorsArray = Object.values(formErrors)
    const formValidity = formErrorsArray.every(item => item === false)
    buttonRef.disabled = !formValidity

    
}

function validateInput(inputRef) {

    const inputValid = inputRef.checkValidity()
    const form = inputRef.parentElement

    if(inputValid) {
        
        form.classList.remove('error')

    } else {
        
        form.classList.add('error')
              
    }
    
    formErrors[inputRef.id] = !inputValid
    
    
    checkFormValidity()
    
    
   
}
function load(event){

    event.preventDefault()

    const personagem = {
        imagem: urlRef.value,
        titulo: personagemRef.value,
        texto: descricaoRef.value 
    }

    // console.log(contentRef)

        contentRef.innerHTML += `

        <div class="card">
        <img class="image" src="${personagem.imagem}">
        <h3>${personagem.titulo}</h3>
        <p>${personagem.texto}</p>
        </div>
        `
    

    buttonRef.disabled = true
    personagemFormRef.reset()

    formErrors.personagem = true
    formErrors.descricao = true
    formErrors.link = true

}



personagemRef.addEventListener('keyup', () => validateInput(personagemRef))
urlRef.addEventListener('keyup', () => validateInput(urlRef))
descricaoRef.addEventListener('keyup', () => validateInput(descricaoRef))
buttonRef.addEventListener('click', (event) => load(event))
