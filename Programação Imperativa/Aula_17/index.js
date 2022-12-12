const fs = require ('fs');

class Conta{
    constructor(conta,tipo, saldo, titular) {
        this.conta =conta;
        this.tipo = tipo;
        this.saldo = saldo;
        this.titular = titular;
    }
}

const banco = {
    clientes: [],
    adicionarClientes(conta,tipo, saldo, titular){
        const novaConta = Conta(conta, tipo, saldo, titular);
        this.clientes.push(novaConta);
    }
    consultarCliente(contaABuscar){
        for(let cliente of this.clientes){
            if(contaABuscar == cliente.conta){
                return cliente;
            }
        }
    }
}

const meusDados = fs.readFileSync('./data.csv', {encoding: 'utf-8'});
console.log(meusDaddos);
const linhas = meusDados.split('\r\n');
for (linha of linhas){
    const colunas = linha.split(',');
    const titular = colunas [0];
    const numero = colunas [1];
    const tipo = colunas [2];
    const saldo= colunas [3];
}

console.log(banco.clientes);