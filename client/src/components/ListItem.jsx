import React from "react";

const ListItem = ({ item, completed, id, dispatch }) => {

    return (
        <div className="listItem" onClick={() => dispatch({ type: "TOGGLE_COMPLETION_STATUS", payload: id })} >
            <p>{item} {completed ? " (completed)" : ""}</p>

            <button onClick={() => { dispatch({ type: "DELETE_TASK", payload: id }) }}>delete</button>
        </div>
    )
}

export default ListItem;