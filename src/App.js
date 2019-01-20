import React,{Component} from "react"

//等价于

// import React from "react"
// import {Component} from "react"
//等价于==知识点：ES6的结构赋值

// import React from "react"//只要用到了JSX语法就要引入react
// const Component = React.Component

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