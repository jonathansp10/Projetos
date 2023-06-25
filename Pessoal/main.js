const personagemRef = document.querySelector('#personagem')
const buttonRef = document.querySelector('#load')


function palavras(event) {
    if (personagemRef.value = 'casa') {
        alert('Deu certo')
        console.log("Deu certo")

    } else {
        alert('errado')
        console.log("Deu errado")

    }

    event.preventDefault()

}


personagemRef.addEventListener('keyup', () => validateInput(personagemRef))
buttonRef.addEventListener('click', (event) => load(event))