import React, { useContext, useState, useEffect } from 'react'
import { ToDosContext } from './App'
import { Table, Container, Form, Button } from 'react-bootstrap';
import useAPI from './useApi';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
   const { state, dispatch } = useContext(ToDosContext);
   const [todoText, setTodoText] = useState("");
   const [editMode, setEditMode] = useState(false) // true when edit is being clicked   
   const [editTodo, setEditTodo] = useState(null)
   const buttonTitle = editMode ? "Edit" : "Add";

   const endpoint = "http://localhost:3000/todos/"
   const savedTodos = useAPI(endpoint)

   useEffect(() => {
      dispatch({ type: "get", payload: savedTodos })
   }, [savedTodos])

   const handleSubmit = async (event) => {
      event.preventDefault()
      if (editMode) {
         await axios.patch(endpoint + editTodo.id, { text: todoText })
         dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } })
         setEditMode(false)
         setEditTodo(null)
      } else {
         const newToDo = { id: uuidv4, text: todoText }
         await axios.post(endpoint, newToDo)
         dispatch({ type: 'add', payload: todoText }) // trigger add functionality
      }
      setTodoText("") // clear input field
   }

   return (
      <>
         <Container>
            <Form onSubmit={handleSubmit}>
               <Form.Group controlId='formEmail'>
                  <Form.Control
                     className='my-2'
                     type='text'
                     placeholder='Enter To-Do'
                     onChange={event => setTodoText(event.target.value)}
                  />

                  <Button variant='primary' type='submit'>{buttonTitle}</Button>
               </Form.Group>
            </Form>
            <Table className='mt-4' striped bordered hover>
               <thead>
                  <tr>
                     <th>To Do</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
               </thead>

               <tbody>
                  {state.todos.map(todo => (
                     <tr key={todo.id}>
                        <td>{todo.text}</td>
                        <td onClick={() => {
                           setTodoText(todo.text)
                           setEditMode(true)
                           setEditTodo(todo)
                        }}>
                           <Button variant='link'>Edit</Button>
                        </td>
                        <td onClick={async () => {
                           await axios.delete(endpoint + todo.id)
                           dispatch({ type: 'delete', payload: todo })
                        }
                        }>
                           <Button variant='link'>Delete</Button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </Container>
      </>
   )
}


export default ToDoList