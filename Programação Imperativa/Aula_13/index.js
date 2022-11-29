const participanteA =  [5, 8, 4, 9, 5]
const participanteB =  [8, 7, 8, 6, 8]
const participanteC =  [7, 5, 10, 8, 3]

// Melhor média (a maior pontuação média entre os concorrentes)

// (5 + 8 + 4 + 9 + 5)/5  // Média

const soma = (participanteA[0] + participanteA[1] + participanteA[2] + participanteA[3] + participanteA[4])
const media = soma/participanteA.length;

function pontuacaoMedia(array){

    var sum = 0;
 
    // Iterate the elements of the array
    array.forEach(function (item) {
      sum += item;
    });
 
    // Returning the average of the numbers
    return sum / array.length;

  }
 

console.log( pontuacaoMedia(participanteA));
