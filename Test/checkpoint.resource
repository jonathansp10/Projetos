#jonathan
*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${SITE}                   https://demo.spreecommerce.org/
${NAVEGADOR}              Chrome
${MEN}                    css=.row:nth-child(1) .homepage-hpb
${WOMEN}                  css=.p-0 > .active
${POLO_T_SHIRT}           css=#product_12 .product-component-image
${PRODUCT_WOMEN}          css=#product_70 .product-component-image
${COLOR}                  css=g:nth-child(2) > circle:nth-child(1)
${TAMANHO}                css=.m-1 > span
${TAMANHO_W}              css=.select-label
${ADD_TO_CARD}            id=add-to-cart-button
${EMAIL}                  id=order_emaiL
${CHECKOUT}               css=.btn-primary:nth-child(1)
${CONTINUE_AS_A_GUEST}    css=.btn-outline-primary:nth-child(4)
${SAVE_CONTINUE}          name=commit
${FRETE}                  css=.shipping-method:nth-child(1) .spree-radio-label-custom-input
${CARD_NUMBER}            id=card_number
${CARD_ANO}               id=card_expiry
${CARD_CVV}               id=card_code
${PLACE_ORDER}            name=commit

*** Keywords ***

Processo de compra de uma peça de roupa masculina

    Acessar a loja
    Open Browser  ${SITE}  ${NAVEGADOR}
    
    Selecionar categoria
    Click Element  ${WOMEN}  
    
    Selecionar produto
    Click Element  ${PRODUCT_WOMEN} 
    
    Selecionar um tamanho e cor
    Click Element  ${COLOR}  ${TAMANHO}
    
    Adicionar ao carrinho de compras
    Click Element  ${ADD_TO_CARD} 
    
    Login
    Click Element  ${CHECKOUT}  ${EMAIL}   ${CONTINUE_AS_A_GUEST} 
    
    Preencher dados de billing address e clicar em Save and Continue
    Click Element ${SAVE_CONTINUE}
    
    Selecionar frete e clicar em Save and Continue
    Click Element  ${FRETE}   ${SAVE_CONTINUE_FRETE}

    Preencher dados do cartão de crédito, clicar em “Save and Continue”
    Click Element  ${CARD_NUMBER}   ${CARD_ANO}  ${CARD_CVV}   ${SAVE_CONTINUE}

    Checar informações e clicar em “place order”
    Click Element    ${PLACE_ORDER} 

    Uma mensagem “Bogus Gateway: Forced failure” deve aparecer, encerrando o processo.


Processo de compra de uma peça de roupa feminina

    Acessar a loja
    Open Browser  ${SITE}  ${NAVEGADOR}
    
    Selecionar categoria
    Click Element  ${MEN}  
    
    Selecionar produto
    Click Element  ${POLO_T_SHIRT}
    
    Selecionar um tamanho e cor
    Click Element  ${COLOR}  ${TAMANHO}
    
    Adicionar ao carrinho de compras
    Click Element  ${ADD_TO_CARD} 
    
    Login
    Click Element  ${CHECKOUT}  ${CONTINUE_AS_A_GUEST} 
    
    Preencher dados de billing address e clicar em Save and Continue
    Click Element ${SAVE_CONTINUE}
    
    Selecionar frete e clicar em Save and Continue
    Click Element  ${FRETE}   ${SAVE_CONTINUE_FRETE}

    Preencher dados do cartão de crédito, clicar em “Save and Continue”
    Click Element  ${CARD_NUMBER}   ${CARD_ANO}  ${CARD_CVV}   ${SAVE_CONTINUE}

    Checar informações e clicar em “place order”
    Click Element    ${PLACE_ORDER} 

    Uma mensagem “Bogus Gateway: Forced failure” deve aparecer, encerrando o processo.