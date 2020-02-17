import React, { useReducer } from 'react';
import './App.css';

//import todo component
import TodoList from "./components/TodoList"

// import reducer to the app
import { initialState, taskReducer } from "./reducers/todoReducer"

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
