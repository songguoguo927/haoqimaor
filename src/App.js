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
            <MoodCard 
            title="卡片的标题"
            content="卡片的内容"
            tag="卡片的下标" 
            />
        </div>
    )
}

export default App