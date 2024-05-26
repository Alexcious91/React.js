import React, { useReducer } from 'react'
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

const todosInitialState = {
	todos: [
		{ id: 1, text: "finishing writing hooks chapter" },
		{ id: 2, text: "play with kids" },
		{ id: 3, text: "read bible" }
	]
};

/**
 * useContext - used to share data across the app
 * create context to use through the app
*/ 
export const ToDosContext = React.createContext();

function App() {
	const [state, dispatch] = useReducer(todosReducer, todosInitialState);

	return (
		<ToDosContext.Provider value={{ state, dispatch }}>
			<ToDoList />
		</ToDosContext.Provider>
	)
}

function todosReducer(state, action) {
	switch(action.type) {
		case 'add':
			const newToDo = { id: uuidv4(), text: action.payload } // add new todo with unique generated id
			const addedTodo = [ ...state.todos, newToDo ]
			// console.log(addedTodo)
			return { ...state, todos: addedTodo }
		case 'delete': 
			const filteredToDoState = state.todos.filter(todo => todo.id !== action.payload.id)
			return { 
				...state, 
				todos: filteredToDoState 
			}
			case 'edit':    
			const updatedToDo = { ...action.payload }  
			const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id) 
			const updatedToDos = [ 
				...state.todos.slice(0,updatedToDoIndex), 
				updatedToDo, 
				...state.todos.slice(updatedToDoIndex + 1) 
			]; 
			
			return {...state, todos: updatedToDos} 
		default: 
			return todosInitialState
	}
}

export default App