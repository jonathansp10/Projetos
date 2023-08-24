#jonathan

*** Settings ***
Library  SeleniumLibrary
Resource  ./checkpoint.resource


*** Test Cases ***
Processo de compra de uma peça de roupa masculina
    Acessar a loja
    Selecionar categoria
    Selecionar produto
    Selecionar um tamanho e cor
    Adicionar ao carrinho de compras
    Login
    Preencher dados de billing address e clicar em Save and Continue
    Selecionar frete e clicar em Save and Continue
    Preencher dados do cartão de crédito, clicar em “Save and Continue”
    Checar informações e clicar em “place order”
    Uma mensagem “Bogus Gateway: Forced failure” deve aparecer, encerrando o processo. 


Processo de compra de uma peça de roupa feminina
    Acessar a loja
    Selecionar categoria
    Selecionar produto
    Selecionar um tamanho e cor
    Adicionar ao carrinho de compras
    Login
    Preencher dados de billing address e clicar em Save and Continue
    Selecionar frete e clicar em Save and Continue
    Preencher dados do cartão de crédito, clicar em “Save and Continue”
    Checar informações e clicar em “place order”
    Uma mensagem “Bogus Gateway: Forced failure” deve aparecer, encerrando o processo. 
