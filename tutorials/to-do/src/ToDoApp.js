import React, { Component } from 'react'
import TodoList from './TodoList';
import { Container, Button } from 'react-bootstrap';

class ToDoApp extends Component {
   constructor() {
      super();

      this.state = {
         inputData: "",
         todoItems: []
      }
   }

   changeTodoInput = (event) => {
      this.setState({ inputData: event.target.value })
   }

   addTodo = (event) => {
      if (this.state.inputData !== '') {
         let newTodoItems = [
            ...this.state.todoItems,
            this.state.inputData
         ]

         this.setState({ todoItems: newTodoItems, inputData: "" })
      }
   }

   deleteTodo = (index) => {
      let todoItems = [...this.state.todoItems]; // create a copy so we wont change directly
      let newTodoItems = todoItems.filter((value, key) => {
         return index !== key
      })
      this.setState({ todoItems: newTodoItems })
   }

   render() {
      return (
         <Container className='d-flex justify-content-center'>
            <div className="col-sm-4">
               <h3 className="text-center">React Todo App</h3>
               <div className="input-group">
                  <input type="text" placeholder="Enter Something" className="form-control" onChange={this.changeTodoInput} value={this.state.inputData} />
                  <div className="input-group-append">
                     <span className="btn btn-success " onClick={this.addTodo}>Add</span>
                  </div>
               </div>
               <TodoList items={this.state.todoItems} deleteTodo={this.deleteTodo} />
            </div>
         </Container>
      );
   }
}

export default ToDoApp;