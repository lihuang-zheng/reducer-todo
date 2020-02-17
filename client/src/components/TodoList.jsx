import React, { useState } from "react"

// import todo item
import TodoItem from "./TodoItem"

const TodoList = ({ state, dispatch }) => {
    const [userInput, setUserInput] = useState("")

    const handleInput = (event) => {
        setUserInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="todoListContainer">
            <h1>Simple Reducer Todo</h1>

            <form name="todoList" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    placeholder="new task..."
                    onChange={handleInput}
                />

                <button
                    onClick={() => dispatch({ type: "ADD_TODO", payload: userInput })}
                >
                    Add
                </button>

                <button
                    className="clearAll"
                    onClick={() => dispatch({ type: "DELETE_ALL_COMPLETED" })}
                >
                    Delete All Completed
                </button>
            </form>

            <div className="todoItems">
                {state.map(item => (
                    <TodoItem
                        key={task.id}
                        item={task.item}
                        completed={task.completed}
                        state={state}
                        dispatch={dispatch}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList