import React,{Component,Fragment} from "react"
import './style.css'

class BTodoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            check:false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChangeCheck = this.handleChangeCheck.bind(this)
    }
    //提升性能
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
    render(){
        console.log('child render')
        const { content } = this.props
        return (
                    <Fragment>
                    <li className='todo-item'>
                    <input type="checkbox"
                            checked={this.state.check}
                            onChange={this.handleChangeCheck}/>
                    <p 
                     dangerouslySetInnerHTML={{__html:content}}
                     >
                     </p>
                   <button onClick={this.handleClick}>remove</button>
                   </li>
                   </Fragment>
                   )
    }
    handleClick(){
        //调用父组件的方法,去改变父组件的数据
        const { deleteItem,index} = this.props
        deleteItem(index)
        // console.log(this.props.index)
    }
    handleChangeCheck(){
        console.log('1')
        //做checkbox勾选切换
    }
}
export default BTodoItem