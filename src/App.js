import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import MoodCard from "./MoodCard"

import moodCardData from "./moodCardData"
const cardComponents = moodCardData.map(item =><MoodCard key={item.id}
               cardItem={item}
 />)

function App() {
  const todoItemComponents = todosData.map(list => <TodoItem key={list.id} todolist={list}/>)
    return (
        <div className="todo-list">
             {todoItemComponents}
            {cardComponents}
        </div>
    )
}

export default App