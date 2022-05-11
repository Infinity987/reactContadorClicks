import React,{ useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manClic = () => {
    setNumClics(numClics + 1);
  }

  const manReiniciar = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecam-logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
          contador={numClics}/>
        <Boton 
          texto='Clic'
          esBotonClic={true}
          manejarClic={manClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={manReiniciar}/>
      </div>
    </div>
  );
}

export default App;
