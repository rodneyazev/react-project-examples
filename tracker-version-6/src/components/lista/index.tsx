import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from "./item";

function Lista(){

    const [tarefas, setTarefas] = useState([
        {tarefa: 'React', tempo: '02:00:00'},
        {tarefa: 'JavaScript', tempo: '01:00:00'},
        {tarefa: 'TypeScript', tempo: '03:00:00'}
    ]);

    return (
        <div>
            <aside className={style.listaTarefas}>
                <h2 onClick={()=>{
                    console.log("H2 Clicado", tarefas)
                    setTarefas([
                        ...tarefas,
                        {tarefa: "Estudar estado", tempo: "01:30:00"}
                    ])
                }}>Estudos do dia</h2>
            </aside>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </div>
    )

}

export default Lista;


/*

{tarefas.map((item, index) => (
    <Item
        tarefa = {item.tarefa}
        tempo = {item.tempo}
    />
))}

*/