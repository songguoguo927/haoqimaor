import React,{Component} from "react"
import 'antd/dist/antd.css'
import { Input,Button } from 'antd';
import store from './store/index.js'

import Btodoitem from "./Btodoitem"
import axios from 'axios'
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
        return (
        <div className='todo-list'>
            <div className="todo-add">
                <Input 
                placeholder="添加待做事项"  
                type="text" 
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                style={{marginRight:'10px'}}
                />
                <Button type="primary" onClick={this.handleAddBtnClick}>add</Button>
            </div>
            <ul>
             {this.getTodoItem()}
             </ul>
    </div>
        )
    }
 
        componentDidMount(){
            axios.get('/api/todolist')
                .then(() =>{alert('success')})
                .catch(() =>{alert('error')})
            // axios.get('/api/todolist')
            //     .then((res) =>{
            //         console.log(res.data)
            //     this.setState(() =>{
            //         return {
            //             list:[...res.data]
            //         }
            //     })})
            //     .catch(() =>{alert('error')})
       }

    getTodoItem(){
            return this.state.list.map((item,index) =>{
                return (
                    <Btodoitem 
                        key={item}
                        content={item} 
                        index={index} 
                        deleteItem={this.handleRemBtnClick}
                    />                
                   )
                })
    }
    handleInputChange(e){
        // this.setState({
        //     inputValue:e.target.value
        // }) 
        //---
        // const value = e.target.value
        // this.setState(() =>({
        //     inputValue: value
        // }))  
        // console.log('1') 
        //创建一句话，传给store，利用图中的dispatch是(action)方法
        const action = {
            type:'change_input_value',
            value:e.target.value
        }   
        store.dispatch(action)
    }
    handleStoreChange(){
        // console.log("store change")
        this.setState(store.getState())
    }
   handleAddBtnClick(){
        const action = {
            type:'add_todo_item'
        }
        store.dispatch(action)
    }
    handleRemBtnClick(index){
        // console.log(index)//点击某一项按钮，展示对应下标
        
        const updateList = [...this.state.list]//拷贝一个副本
        updateList.splice(index,1)
        
        this.setState({
            list:updateList
        })
    }
}
export default Btodolist