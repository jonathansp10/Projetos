function verificarGanhador(usuario, oponente) {

        if ( usuario === 1 && oponente === 2 ){

        console.log('Você perdeu!')
        pontoOponete++
        }
    
        if ( usuario === 3 && oponente === 1 ){
    
        console.log('Você perdeu!')
        pontoOponete++
        }
    
        if ( usuario === 2 && oponente === 3 ){
    
        console.log('Você perdeu!')
        pontoOponete++
        }
    
        if ( usuario === 2 && oponente === 1 ){
    
        console.log('Você ganhou!')
        pontoUsuario++
        }
    
        if ( usuario === 1 && oponente === 3 ){
    
        console.log('Você ganhou!')
        pontoUsuario++
        }
    
        if ( usuario === 3 && oponente === 2 ){
    
        console.log('Você ganhou!')
        pontoUsuario++
        }
    
        if ( usuario === 3 && oponente === 3 ){
    
        console.log('Empate!')
        }
    
        if ( usuario === 2 && oponente === 2 ){
    
        console.log('Empate!')
        }
    
        if ( usuario === 1 && oponente === 1 ){
    
        console.log('Empate!')
        }
      
        console.log(pontoUsuario)
        console.log(pontoOponete)

        
      } 
  
   function comecarJogo() {
    
    let usuario = Number(prompt('O que voce deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura'));
    let oponente = Math.floor(Math.random() * 3) + 1;
    
    verificarGanhador(usuario, oponente);
      
    } 

    // console.log(usuario);
    // console.log(jogadaComputador);
  
    // verificarGanhador(jogadaUsuario, jogadaComputador);
  
  
  function perguntarDesejaJogar() {
  
    let usuarioDesejaJogar = confirm('Você gostaria de jogar?');
    
    
  
    if (usuarioDesejaJogar === true) {
  
      comecarJogo();
  
    } else {
  
      alert('Obrigado por visitar a pagina');
  
    }
  
  }
  
  perguntarDesejaJogar();