let form = document.querySelector('#form')
let tituloInput = document.querySelector('#titulo');
let urlInput = document.querySelector('#url');
let descricaoInput = document.querySelector('#descricao');

//Console só para mostrar se esta capturando os elementos
console.log(form, tituloInput, urlInput, descricaoInput)




const validacaoInput = () => {
        tituloInput.nextElementSibling.classList.add('error-hidden')
    

    if (!tituloInput.value) {
        tituloInput.nextElementSibling.classList.remove('error-hidden')
    }}



form.addEventListener("submit", (event) => {
    event.preventDefault()
    validacaoInput()
    console.log('passou')
 })
tituloInput.addEventListener("tituloInput", () => {
    validacaoInput()
    console.log('tentando')
})

// if (tituloInput.value === ""){
// alert ('Por favor escolha um jogador')
// return;
// }
// if (urlInput.value === ""){
//     alert ('Por favor insira o código')
//     return;
// }
// //se todos os campos foram preenchidos ensira o formulário
// form.submit();

// })