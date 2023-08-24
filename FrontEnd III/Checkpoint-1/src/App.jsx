import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
     <h1>ADICIONAR NOVA COR</h1>
     <form>
      
      <label>Nome</label>
      <input type="text" />

      <label> Cor</label>
      <input type="text" />

      <button type='submit' disa>Adicionar</button>
     </form>
    </div>
    </>
  )
}

export default App
