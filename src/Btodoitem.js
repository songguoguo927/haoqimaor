import React,{Component,Fragment} from "react"
import './style.css'

class BTodoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            xian:false
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
                          onChange={this.handleChangeCheck}
                            checked={this.state.xian}
                           />
                    <p className={this.state.xian ? 'you' : ''}
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
        // console.log('希望勾选时，text有划线')
        //做checkbox勾选切换
        this.setState({
         xian:this.state.xian ? false : true    
        })
    }
}
export default BTodoItem