import React, {useState} from 'react'
import { v4 as uuid } from "uuid";

function TodoForm({addTodo}) {
  
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  })
  
//this updates the task property in the todo object
  function handleTaskInputChange(e){
setTodo({...todo, task:e.target.value});
}

function handleSubmit(e) {
  e.preventDefault();
  if (todo.task.trim()){
    addTodo({...todo, id:uuid()})
    //reset task input
    setTodo({...todo, task:""});
  }
}
  return (
    <form onSubmit={handleSubmit}>
<input 
name="task"
type = "text"
value = {todo.task}
onChange = {handleTaskInputChange}
/>
<button> Add task</button>

    </form>
  )
}


export default TodoForm;