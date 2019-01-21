import React,{Component,Fragment} from 'react'

import './style.css'
class Toggle extends Component{
    constructor(){
        super()
        this.state={
            show:true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return (
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide'}>hello</div>
                <button onClick={this.handleClick}>Toggle</button>
            </Fragment>
        )
    }
    handleClick(){
        // this.setState({
        //     show:this.state.show ? false : true
        // })
        //也可以按照下面这种写法，返回一个对象时，可以省略return，将对象用()括起来即可
        this.setState((prevState) =>({
            show:!prevState.show
        }))
    }
}
export default Toggle