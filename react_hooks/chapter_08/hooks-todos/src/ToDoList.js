import React, { useContext, useState } from 'react'
import { ToDosContext } from './App'
import { Table, Container, Form, Button } from 'react-bootstrap';

function ToDoList() {
   const { state, dispatch } = useContext(ToDosContext);
   const [todoText, setTodoText] = useState("");
   const [editMode, setEditMode] = useState(false) // true when edit is being clicked   
   const [editTodo, setEditTodo] = useState(null)
   const buttonTitle = editMode ? "Edit" : "Add";

   const handleSubmit = (event) => {
      event.preventDefault()
      if (editMode) {
         dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } })
         setEditMode(false)
         setEditTodo(null)
      } else {
         dispatch({ type: 'add', payload: todoText }) // trigger add functionality
      }
      setTodoText(" ") // clear input field
   }

   return (
      <>
         <Container>
            <Form onSubmit={handleSubmit}>
               <Form.Group controlId='formEmail'>
                  {editMode ? (
                     <Form.Control
                        className='my-2'
                        type='text'
                        placeholder='Edit To-Do'
                        onChange={event => setTodoText(event.target.value)}
                     />
                  ) : (
                     <Form.Control
                        className='my-2'
                        type='text'
                        placeholder='Enter To-Do'
                        onChange={event => setTodoText(event.target.value)}
                     />
                  )}

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
                        }}>Edit</td>
                        <td onClick={() => dispatch({ type: 'delete', payload: todo })}>Delete</td>
                        {/* <td onClick={console.log("triggered")}>Delete</td> */}
                     </tr>
                  ))}
               </tbody>
            </Table>
         </Container>
      </>
   )
}


export default ToDoList

/**
 * payload - contains data to be sent with specified action
 * 
 */