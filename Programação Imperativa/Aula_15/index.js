function banco (conta,tipo,saldo,titular){
    this.conta = conta;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
  }
const conta = {
   banco: [],
   adicionarConta (conta,tipo,saldo,titular) {
    const novoBanco = new banco (conta,tipo,saldo,titular);
    this.banco.push (novoBanco);
   },
   buscarPorNome(valorDeBusca){
    const arrayDeEncontrados = [];
    for(let produto of this.produtos){
      if(produto.nome.includes(valorDeBusca)){
        arrayDeEncontrados.push(produto);
      }
    }
    return arrayDeEncontrados;
  },

  }
  
  conta.adicionarConta(5486273622, 'Conta Corrente', 27771, 'Abigael Natte');
  conta.adicionarConta(1183971869, 'Conta Poupança', 8675, 'Ramon Connell');
  conta.adicionarConta(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente');
  conta.adicionarConta(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley');
  conta.adicionarConta(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer');
  conta.adicionarConta(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus');
  conta.adicionarConta(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour');
  conta.adicionarConta(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden');
  conta.adicionarConta(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan');
  conta.adicionarConta(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett');
  console.log(conta.banco[33196]);


  