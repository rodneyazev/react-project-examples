import React, { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Cronometro from '../components/cronometro';
import './style.scss';
import { ITarefa } from '../interfaces/ITarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selectionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas}/>
      <Cronometro />
      <Lista
        tarefas={tarefas}
        selecionaTarefa = {selectionaTarefa}
      />
    </div>
  );
}

export default App;
