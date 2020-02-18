import React, { useState } from "react";

// import List item to todo list
import ListItem from "./ListItem";

const TodoList = ({ state, dispatch }) => {

    // set state for user input
    const [userInput, setUserInput] = useState("");

    // set handle for input value
    const handleInput = (event) => {
        setUserInput(event.target.value);
    }

    // set submit from prevent the page to refresh
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="todoListContainer">
            <h1>Todo List</h1>

            <form name="todoList" onSubmit={handleSubmit}>
                <input type="text" value={userInput} placeholder="Type in a new task..." onChange={handleInput} />
                <button onClick={() => dispatch({ type: "ADD_TASK", payload: userInput })}>Add</button>
                <button className="clearAll" onClick={() => dispatch({ type: "DELETE_ALL_COMPLETED" })}>Remove all completed tasks</button>
            </form>

            <div className="listItems">
                {state.map(task => (
                    <ListItem key={task.id} item={task.item} completed={task.completed} id={task.id} dispatch={dispatch} />
                ))}
            </div>
        </div>
    )
}

export default TodoList;