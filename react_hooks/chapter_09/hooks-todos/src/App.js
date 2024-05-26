import React, { useReducer } from 'react'
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

const todosInitialState = {
	todos: []
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
	switch (action.type) {
		case 'get':
			return { ...state, todos: action.payload }
		case 'add':
			const addedToDos = [...state.todos, action.payload]
			return { ...state, todos: addedToDos }
		case 'delete':
			const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
			return { ...state, todos: filteredTodoState }
		case 'edit':
			const updatedToDo = { ...action.payload }
			const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
			const updatedToDos = [
				...state.todos.slice(0, updatedToDoIndex), 
				updatedToDo, 
				...state.todos.slice(updatedToDoIndex + 1)
			];
			return { ...state, todos: updatedToDos }
		default:
			return todosInitialState
	}
}

export default App