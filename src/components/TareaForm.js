import React, { useState } from "react";


const TareaForm = (props) => {
  const [task, setTask] = useState("");  
  //[task, setTask] guardan los valores ingresados en el input

  const [validation, setValidation] = useState(true);
  //[validation, setValidation] 
  
  const manejarFormulario = (event)=> {
    setTask(event.target.value);
    // console.log(task);
  }
  //"manejarFormulario" recibe un evento que capta el valor del input

  const submit = (event)=> {
    event.preventDefault();
    //.trim() verifica que no haya espacios/vacios e
    if(task.trim() !== ''){
      props.newTask(task)
      setTask('') // reinicia el input una vez colocada la tarea
      setValidation(true)
    }else{
      setValidation(false)
    }
  }
  

  return (
    <div>
      <h1 className="text-center">Task Advanced</h1>
      <form className='form' onSubmit={submit}>
        <div>
          <label className='marginbottom'>Enter a Task</label>
          <input className='marginbottom inputWidth' value={task} onChange={manejarFormulario}/> 
        </div>
        <button className="btn-primary">ADD TASK</button>     
      </form>

      {
        !validation && 
        <div className="validation">Añade una tarea</div>
      }
    </div>
  )
}

export default TareaForm;