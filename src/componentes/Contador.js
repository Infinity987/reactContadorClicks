import React from "react";
import '../hojas-de-estilo/Contador.css';

function Contador({contador}){
  return (
    <div className='contador-estilo'>
      {contador}
    </div>
  );
}

export default Contador;