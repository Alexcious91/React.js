import React, { useContext } from 'react'
import { ToDosContext } from './App'

function ToDoList() {
   const { state, dispatch } = useContext(ToDosContext);

   return (
      <div>
         { state.todos.map(todo => (
            <li key={todo.id}>
               <span>{todo.text}</span>
            </li>
         )) }
      </div>
   )
}


export default ToDoList