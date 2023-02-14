var usuarioDesejaJogar = confirm('Você quer jogar?')

function comecarJogo() {
    
    let jogadaUsuario = Number(prompt('O que você deseja jogar? 1 = Pedra, 2 = Papel, 3 = tesoura'))
    let jogadaOponente = Math.floor(Math.random() * 3 ) + 1;
    console.log(jogadaUsuario)
    console.log(jogadaOponente)

    if ( jogadaUsuario === 1 && jogadaOponente === 2 ){

        console.log('Você perdeu!')
    }

    if ( jogadaUsuario === 3 && jogadaOponente === 1 ){

        console.log('Você perdeu!')
    }

    if ( jogadaUsuario === 2 && jogadaOponente === 3 ){

        console.log('Você perdeu!')
    }

    if ( jogadaUsuario === 2 && jogadaOponente === 1 ){

        console.log('Você ganhou!')
    }
    
    if ( jogadaUsuario === 1 && jogadaOponente === 3 ){
    
        console.log('Você ganhou!')
    }
    
    if ( jogadaUsuario === 3 && jogadaOponente === 2 ){
    
        console.log('Você ganhou!')
    }

    if ( jogadaUsuario === 3 && jogadaOponente === 3 ){
    
        console.log('Empate!')
    }

    if ( jogadaUsuario === 2 && jogadaOponente === 2 ){
    
        console.log('Empate!')
    }

    if ( jogadaUsuario === 1 && jogadaOponente === 1 ){
    
        console.log('Empate!')
    }
}


if (usuarioDesejaJogar === true) {

    comecarJogo()

} else{
    alert('Obrigado por nos visitar')
}
