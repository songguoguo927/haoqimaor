import React,{Component,Fragment} from "react"
import 'antd/dist/antd.css'
import { Button,Checkbox } from 'antd';
import './style.css'

class Btodoitem extends Component{
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
        // console.log('child render')
        const { content } = this.props
        return (
                    <Fragment>
                    <li className='todo-item'>
                    <Checkbox type="checkbox"
                          onChange={this.handleChangeCheck}  
                          ></Checkbox>
                    <p id='text' 
                    className={this.state.xian ? 'you' : ''}
                     dangerouslySetInnerHTML={{__html:content}}
                     >
                     </p>
                   <Button type="danger" onClick={this.handleClick}>remove</Button>
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
    handleChangeCheck(e){
        console.log(e.target.checked)
        //做checkbox勾选切换,state
      
        this.setState({
         xian:e.target.checked           
        })
        // this.setState((prevState)=>{
        //     console.log(prevState)
        //     return {xian:!prevState.xian}
        // })
    }
}
export default Btodoitem