let opcao = 1;
let tempo = 30;

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
else if(opcao > 5){
   console.log(`Prato Inexistente!!`);
 }

 

 function preparaprato( ftempo){


    let tempo3 = (tempopadrao * 3);
    let tempo2 = (tempopadrao * 2);   
 
    if ( (tempo) < (tempopadrao)) {
       console.log('Tempo insuficiente');
    }   
 
    else if ((tempo => tempopadrao) && (tempo < tempo2)) {
       console.log('Prato pronto, bom apetite!!!');
    }
 
    else if ((tempo) >= (tempo2) && (tempo < tempo3)) {
       console.log('A comida queimou')
    }
 
    else if ( (tempo) >= (tempo3)) {    
 
       console.log('Kabum')
    }
   
 }
console.log(preparaprato());
