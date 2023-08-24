import { useState } from "react";

const Color = () => {
    const [cores, setCores] = useState([]);
  
    return (
      <div>
        <ColorForm />
        <ul>
          {cores.map((cor) => (
            <li key={cor.id}>{cor.nome} - {cor.valorHexadecimal}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Color;