import React from "react"
import TodoItem from "./TodoItem"
import MoodCard from "./MoodCard"

import moodCardData from "./moodCardData"
const cardComponents = moodCardData.map(cardItem =><MoodCard key={cardItem.id}
               title={cardItem.title}
            content={cardItem.content}
            tag={cardItem.tag}
 />)

function App() {
  
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            {cardComponents}
        </div>
    )
}

export default App