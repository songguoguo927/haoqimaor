import React from "react"
import TodoItem from "./TodoItem"
import MoodCard from "./MoodCard"

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <MoodCard />
        </div>
    )
}

export default App