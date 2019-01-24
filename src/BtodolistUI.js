import React,{Component} from "react"
import Btodoitem from "./Btodoitem"
import { Input,Button } from 'antd'

class BtodolistUI extends Component{
    render(){
        return (
        <div className='todo-list'>
            <div className="todo-add">
                <Input 
                placeholder="添加待做事项"  
                type="text" 
                value={this.props.inputValue}
                onChange={this.props.handleInputChange}
                style={{marginRight:'10px'}}
                />
                <Button type="primary" onClick={this.props.handleAddBtnClick}>add</Button>
            </div>
            <ul>
             {this.getTodoItem()}
             </ul>
    </div>
        )
    }
  getTodoItem(){
            return this.props.list.map((item,index) =>{
                return (
                    <Btodoitem 
                        key={item}
                        content={item} 
                        index={index} 
                        deleteItem={this.props.handleRemBtnClick}
                    />                
                   )
                })
    }
}

export default BtodolistUI