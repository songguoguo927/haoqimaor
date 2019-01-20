import React from "react"

function TodoItem(props) {
    // console.log(props)
    return (
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.todolist.completed} 
            onChange={(event) =>{props.handleChange(props.todolist.id)}} />
            <p>{props.todolist.text}</p>
        </div>
    )
}

export default TodoItem