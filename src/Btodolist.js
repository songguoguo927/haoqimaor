import React,{Component,Fragment} from "react"

class Btodolist extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return (
        <Fragment>
        <div className="todo-add">
            <input type="text"/><button type="">add</button>
        </div>
        <ul>
            <li>学习react</li>
            <li>学习node</li>
        </ul>
        </Fragment>
        )
    }
}
export default Btodolist