import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("") //empy sting intitially
  return (
    <form className='TodoForm'>
        <input type ="text" className='todo-input' 
        placeholder='What is your task?'
        onchange = {(e) => console.log(e.target.value)} /> 
        <button type ='submit' className='todo-btn'> Add Task</button>
        </form>
  )
}
