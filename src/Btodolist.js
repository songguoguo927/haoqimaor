import React,{Component,Fragment} from "react"

class Btodolist extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list: []
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
            <button type="">add</button>
        </div>
        <ul>
            <li>学习react</li>
            <li>学习node</li>
        </ul>
        </Fragment>
        )
    }
    handleInputChange(e){
        //看e是啥，可在控制台打印一下 最终发现e.target.value的值是我们所需要的
        // console.log(e.target.value) 
        //在未显示绑定this是啥时，输入框值没有反应，打印出this为undefined，在18行显示绑定后再打印出this，为我们的Btodolist组件
        // this.state.inputValue = e.target.value
        //  console.log(this)
        //  //显示绑定后，这个时候控制台可打印出正确的输入框的值this.state.inputValue
        //  console.log(this.state.inputValue)
         //再将更改后的值赋值给输入框，发现还是输入框值还是没反应。原来更改要用setState
        //   this.state.inputValue = e.target.value
         this.setState({
             inputValue:e.target.value
             }) 
        
    }
}
export default Btodolist