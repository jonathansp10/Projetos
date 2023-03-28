function load(event){

    event.preventDefault()

    const personagem = {
        imagem: urlRef.value,
        titulo: personagemRef.value,
        texto: descricaoRef.value 
    }

    // console.log(contentRef)

        contentRef.innerHTML += `

        <li class="tarefa">
        <div class="not-done"></div>
        <div class="descricao">
          <p class="nome">${}</p>
          <p class="timestamp">Criada em: 15/07/21</p>
        </div>
      </li>
        `
    

    personagemFormRef.reset()

}