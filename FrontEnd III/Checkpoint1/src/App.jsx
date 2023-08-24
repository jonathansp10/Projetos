import { useState } from "react"; 
import styles from './color.styles.css';
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [inputName, setInputName] = useState('');
  const [colorName, setColorName] = useState('');
  
  const onSubmit = (event) => {
    event.preventDefault();

  if(inputName < 3 && colorName < 6){
    return 'Por favor, preencher corretamente';
  }
  


  return (
    <>
    <main className={styles.main}>
        <div>
          <h1>ADICIONAR NOVA COR</h1>
            <form onSubmit={onSubmit}> 

              <label>Nome</label>
              <input 
              type="text"
              onChange={(event) => setInputName(event.target.value)}
              />

              <label> Cor</label>
              <input 
              type="text" 
              onChange={(event) => setColorName(event.target.value)}
              />

              <button type='submit' disabled = {colorName === '' && inputName === ''}>Adicionar</button>

            </form>
        </div>

    </main>
    </>
  )
}

export default App