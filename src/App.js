import React, { useState } from 'react';
import './App.css';
import TareaForm from './components/TareaForm';
import Tarea from './components/Tarea';

function App() {
  //listTask se guardan las tareas en un array
  const [listTask, setListTask] = useState([]);

  //newTask recibe "task" (de TareForm) "...listTask"(hace una copia del array) y agrega la tarea
  const newTask = (task)=> {
    setListTask([...listTask, task])
  }

  // console.log(listTask);
  //borrar recibe "id" y filtra el array "listTask" y devuelve uno nuevo.
  //"eliminando" al que coincide con "id"
  const borrar = (id)=> {
    const listFilter = listTask.filter((e, index)=> index !== id)
    setListTask(listFilter)
  }

//filter() es cuando quieres devolver un array con menos contenido osea sacando 1
//map() es cuando quieres devolver el array pero con algunas modificaciones
  return (
    <div className="App">
      <TareaForm 
      newTask={newTask}
      />
      {
        listTask.map((e, index) => <Tarea 
          task={e}
          borrar={borrar}
          id={index}
          key={index}
        />)
      }
    </div>
  );
}

export default App;
