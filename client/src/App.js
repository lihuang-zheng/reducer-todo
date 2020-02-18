import React, { useReducer } from "react";

import { initialState, taskReducer } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  //set reducer for state and dispatching.
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <div className="content">
      <TodoList state={state} dispatch={dispatch} />
    </div>
  )

};

export default App;