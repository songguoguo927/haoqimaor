import React,{Component,Fragment} from "react"
import './style.css'

class Btodoitem extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return (
                    <Fragment>
                    <li 
                    className='todo-item'
                     dangerouslySetInnerHTML={{__html:this.props.content}}
                     >
                     </li>
                   <button onClick={this.handleClick}>remove</button>
                   </Fragment>
                   )
    }
    handleClick(){
        //调用父组件的方法,去改变父组件的数据
        this.props.deleteItem(this.props.index)
        // console.log(this.props.index)
    }
    
}
export default Btodoitem