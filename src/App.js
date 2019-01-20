import React,{Component} from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import MoodCard from "./MoodCard"

import moodCardData from "./moodCardData"
const cardComponents = moodCardData.map(item =><MoodCard key={item.id}
               cardItem={item}
 />)

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos:todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        console.log("changed",id)
    }
    render(){
    const todoItemComponents = this.state.todos.map(list => <TodoItem key={list.id} todolist={list} handleChange={this.handleChange}/>)
    return (
        <div className="todo-list">
             {todoItemComponents}
             {cardComponents}
        </div>
    )
    }
 
}

export default App