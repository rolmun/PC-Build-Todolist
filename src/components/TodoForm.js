//TodoForm.js
import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("") //empy sting intitially

    const handleSubmit = e => {
      e.preventDefault();
      addTodo(value) //pass the state from the TodoForm to TodoWrapper
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type ="text" className='todo-input' 
        placeholder='What is your task?'
        onChange = {(e) => setValue(e.target.value)} /> 
        <button type ='submit' className='todo-btn'> Add Task</button>
        </form>
  )
}
