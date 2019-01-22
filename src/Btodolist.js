import React,{Component} from "react"
import 'antd/dist/antd.css'
import { Input,Button } from 'antd';


import BTodoItem from "./BTodoItem"
import axios from 'axios'
import './style.css'
class BTodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list: ['学习react','学习node']
        }
        this.handleInputChange = this.handleInputChange.bind(this)//把该方法绑定到这个组件Btodolist
        this.handleAddBtnClick = this.handleAddBtnClick.bind(this)
        this.handleRemBtnClick = this.handleRemBtnClick.bind(this)
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
                    <BTodoItem 
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
        const value = e.target.value
        this.setState(() =>({
            inputValue: value
        }))      
    }
   handleAddBtnClick(){
        this.setState((prevState) =>({
             list:[...prevState.list,prevState.inputValue],
             inputValue:''
             })  )   
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
export default BTodoList