import React,{Component} from "react"
import 'antd/dist/antd.css'

import store from './store/index.js'
import BtodolistUI from './BtodolistUI'

import {getTodoList,getInputChangeAction,getAddTodoItemAction,getRemoveTodoItemAction} from './store/actionCreators'


import './style.css'
class Btodolist extends Component{
    constructor(props){
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)//把该方法绑定到这个组件Btodolist
        this.handleAddBtnClick = this.handleAddBtnClick.bind(this)
        this.handleRemBtnClick = this.handleRemBtnClick.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
        
}
    render(){
        return <BtodolistUI
             inputValue={this.state.inputValue}
             handleInputChange={this.handleInputChange}
             handleAddBtnClick={this.handleAddBtnClick}
             list={this.state.list}
             handleRemBtnClick={this.handleRemBtnClick}
             />
    }
 
        componentDidMount(){
            const action = getTodoList()
           store.dispatch(action)
       }

    handleInputChange(e){
        // console.log('1') 
        //创建一句话，传给store，利用图中的dispatch是(action)方法
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange(){
        // console.log("store change")
        this.setState(store.getState())
    }
   handleAddBtnClick(){
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }
    handleRemBtnClick(index){
        // console.log(index)//点击某一项按钮，展示对应下标
       const action = getRemoveTodoItemAction(index)
        store.dispatch(action)
    }
}
export default Btodolist