import React,{Component} from "react"

import TodoItem from "./E-todo/TodoItem"
import todosData from "./E-todo/todosData"
import MoodCard from "./moodComp/MoodCard"

import moodCardData from "./moodComp/moodCardData"
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
         this.setState(preState =>{
             const updateTodos = preState.todos.map(list =>{
                 if(list.id === id){
                     list.completed = !list.completed
                 }
                 return list
             })
             return {
                 todos:updateTodos
             }
         })
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