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
            <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
           {
               this.state.list.map((item,index) =>{
                return <li key={index}>{item}</li>
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
    handleBtnClick(){
        this.setState({
             list:[...this.state.list,this.state.inputValue],
             inputValue:''
             })     
    }
}
export default Btodolist