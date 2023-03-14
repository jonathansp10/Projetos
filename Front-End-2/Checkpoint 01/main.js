let contentRef = document.querySelector('.container')
const personagemRef = document.querySelector('#personagem')
const urlRef = document.querySelector('#link')
const descricaoRef = document.querySelector('#descricao')


// const feeds = [
//     {
//         imagem: urlRef.value,
//         titulo: personagemRef.value,
//         texto: descricaoRef.value 
//     }
// ]

// for (let feed of feeds){
//     contentRef.innerHTML += `
      
//     <div class="card">
//         <img class="image" src="${urlRef.value}">
//         <h3>${personagemRef.value}</h3>
//         <p>${descricaoRef.value}</p>
//     </div>
//     `
// }
// console.log(feeds)

var formErros= {
    personagem: true,
    link: true,
    descricao: true
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
personagemRef.addEventListener('keyup', () => validateInput(personagemRef))
urlRef.addEventListener('keyup', () => validateInput(urlRef))
descricaoRef.addEventListener('keyup', () => validateInput(descricaoRef))
