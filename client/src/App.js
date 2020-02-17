import React, { useReducer } from 'react';
import './App.css';

//import todo component
import TodoList from "./components/TodoList"

// import reducer to the app
import { initialState, todoReducer } from "./reducers/todoReducer"

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
