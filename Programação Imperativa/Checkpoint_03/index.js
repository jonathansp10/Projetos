
function Aluno(nome, qt_faltas, notas) {
    this.nome = nome;
    this.qt_faltas = qt_faltas;
    this.notas = notas;
  
    this.calcularMedia = function() {
      let notaDoAluno = 0;
      let qt_notas = 0;
  
      for (let nota of this.notas) {
        notaDoAluno += nota;
        qt_notas++;
      }
      return  notaDoAluno / qt_notas;
    };
    
    this.faltas = function() {
        this.qt_faltas++;
    };
  
  }
  
  const aluno1 = new Aluno("Jonathan", 2, [6, 8, 9, 10]);
  const aluno2 = new Aluno("Lohany", 3, [8, 9, 7, 4]);
  const aluno3 = new Aluno("Luciano", 1, [8.8, 8.8, 10, 8.8]);
  const aluno4 = new Aluno("Marcus", 2, [10, 10, 9, 10]);
  const aluno5 = new Aluno("Maju", 2, [5, 8, 9, 10]);
  
  let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
  
  for (let aluno of alunos) {
    console.log("A média do " + aluno.nome + " é: " + aluno.calcularMedia().toFixed(2));
  }
  
  aluno1.faltas()
  console.log("A quantidade atual de faltas do aluno: " + aluno1.qt_faltas);

  let curso = {
    nomeDoCurso: "JavaScript",
    notaDeAprovacao: 8,
    faltaMaxima: 3,
    listaDeEstudante: [aluno1, aluno2, aluno3, aluno4, aluno5],

    adicionarAlunos: function(novoAluno) {
      curso.listaDeEstudante.push(novoAluno);
    },

    alunoAprovado: function(aluno) {
      let mediaAluno = aluno.calcularMedia();
  
      if ( this.calculaFaltaEMediaAluno(mediaAluno, aluno.qt_faltas) || this.calcularMediaAcimaDaAprovacao(aluno.qt_faltas, mediaAluno) ) {
          return 'APROVADO';
      } else {
          return 'REPROVADO';
      }
    },
  
    calculaFaltaEMediaAluno: function(mediaAluno, faltas) {
      return mediaAluno >= curso.notaDeAprovacao && faltas < curso.faltaMaxima ? true : false;
    },
  
    calcularMediaAcimaDaAprovacao: function(quantidadeFaltasAluno, mediaAluno) {
      if (quantidadeFaltasAluno == curso.faltaMaxima) {
        let notaDeAprovacaoCalculada = curso.notaDeAprovacao + ((curso.notaDeAprovacao / 100) * 10);
        return mediaAluno > notaDeAprovacaoCalculada ? true : false;
      }
    },

    aprovacaoDeAlunos: function () {
      for (let aluno of this.listaDeEstudante){
        console.log("O " + aluno.nome + " foi aprovado? " + curso.alunoAprovado(aluno));
      }
    }
};
  
  // criando os novos alunos para serem adicionados
  let novoAluno6 = new Aluno("José", 2, [8, 6, 1, 3]);
  let novoAluno7 = new Aluno("Brenda", 3, [5, 8, 9, 10])
  let novoAluno8 = new Aluno("Gabriel", 1, [10, 10, 10, 9])
  
  let novosAlunos = [novoAluno6, novoAluno7, novoAluno8];
  
  for (let aluno of novosAlunos) {
    console.log("")
    curso.adicionarAlunos(aluno);
  }

  for (let aluno of curso.listaDeEstudante) {
    console.log(aluno.nome);
  }
  
  console.log("")

  console.log("O aluno " + aluno4.nome + " foi aprovado?", curso.alunoAprovado(aluno4));

  curso.aprovacaoDeAlunos();