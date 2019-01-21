import React,{Component,Fragment} from "react"
import './style.css'

class BTodoItem extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        const { content } = this.props
        return (
                    <Fragment>
                    <li 
                    className='todo-item'
                     dangerouslySetInnerHTML={{__html:content}}
                     >
                     </li>
                   <button onClick={this.handleClick}>remove</button>
                   </Fragment>
                   )
    }
    handleClick(){
        //调用父组件的方法,去改变父组件的数据
        const { deleteItem,index} = this.props
        deleteItem(index)
        // console.log(this.props.index)
    }
    
}
export default BTodoItem