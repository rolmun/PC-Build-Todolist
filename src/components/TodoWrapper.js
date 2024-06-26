//TodoWrapper.js 

import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); //intialize

export const TodoWrapper = () => {
  const [todos,setTodos] = useState ([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, 
    completed: false,
    isEditing: false}])
    console.log(todos)
  }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}
