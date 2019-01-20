import React,{Component,Fragment} from "react"
import './style.css'
class Btodolist extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list: ['学习react','学习node']
        }
    }
    render(){
        return (
        <div className='todo-list'>
        <div className="todo-add">
            <input 
                type="text" 
                value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
            />
            <button onClick={this.handleAddBtnClick.bind(this)}>add</button>
        </div>
        <ul>
           {
               this.state.list.map((item,index) =>{
                return (
                    <Fragment>
                    <li 
                     className='todo-item'
                     key={index} 
                     dangerouslySetInnerHTML={{__html:item}}
                     >
                     </li>
                   <button onClick={this.handleRemBtnClick.bind(this,index)}>remove</button>
                   </Fragment>)
             })
          }
        </ul>
        </div>
        )
    }
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })         
    }
    handleAddBtnClick(){
        this.setState({
             list:[...this.state.list,this.state.inputValue],
             inputValue:''
             })     
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