import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Cronometro from '../components/cronometro';
import './style.scss';


function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Cronometro />
      <Lista />
    </div>
  );
}

export default App;
