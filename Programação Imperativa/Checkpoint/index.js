let tempopadrao = 10;
let bPrato = 0;
let opcao = 2;

 if (opcao == 1) {
    tempopadrao = 10;    
 }
 else if (opcao == 2){
   tempopadrao = 8;
 }
 else if (opcao ==3){
   tempopadrao = 15;
 }
 else if (opcao ==4){
   tempopadrao = 12;
}
else if (opcao ==5){
   tempopadrao = 8;
}
 else {
    console.log(`Prato Inexistente!!`);
    bPrato = 1;
 }

 

 function preparaprato( ftempo, tempopadrao){


    let tempo3 = (tempopadrao * 3);
    let tempo2 = (tempopadrao * 2);  
    
    console.log('Tempo multiplicado por 3 ' + tempo3);
    console.log('Tempo multiplicado por 2 ' + tempo2);
    console.log('Tempo ' + ftempo);
    console.log('Tempo padrao ' + tempopadrao);
 
 
 
    if ( (ftempo) < (tempopadrao)) {
       console.log('Tempo insuficiente');
    }   
 
    else if ((ftempo => tempopadrao) && (ftempo < tempo2)) {
       console.log('Prato pronto, bom apetite!!!');
    }
 
    else if ((ftempo) >= (tempo2) && (ftempo < tempo3)) {
       console.log('A comida queimou')
    }
 
    else if ( (ftempo) >= (tempo3)) {    
 
       console.log('Kabum')
    } 
   
 }