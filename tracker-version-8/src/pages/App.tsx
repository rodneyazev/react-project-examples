import React, { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Cronometro from '../components/cronometro';
import './style.scss';
import { ITarefa } from '../interfaces/ITarefa';


function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas}/>
      <Cronometro />
      <Lista tarefas={tarefas}/>
    </div>
  );
}

export default App;
