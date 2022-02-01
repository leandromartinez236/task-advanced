import React, { useState } from 'react';

const Tarea = (props) => {
  //borra el que coincida con "id"
  const deleteTask = ()=> {
    props.borrar(props.id);
  }
  const [option, setOption] = useState(true);

  return (
    
    <div>
      <div className='tarea'>   
        <button onClick={deleteTask} className='btn-delete'>Delete</button>
        <p className={!option ? 'task-complete' : ''}>{props.task}</p>
        <button onClick={()=> setOption(!option)} className={option ? 'btn-complete' : 'btn-incomplete'}>{option ? 'Complete' : 'Incomplete'}</button>
      </div>
    </div>
  )
}

export default Tarea;