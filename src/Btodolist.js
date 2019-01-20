import React,{Component,Fragment} from "react"

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
        <Fragment>
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
                    <div>
                    <li key={index}>{item}</li>
                   <button onClick={this.handleRemBtnClick.bind(this,index)}>remove</button>
                   </div>)
             })
          }
        </ul>
        </Fragment>
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