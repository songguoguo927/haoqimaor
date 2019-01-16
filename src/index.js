import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//组件首字母大写
/*JS的函数式组件 */
// const Welcome = props =>{//等价于 const Welcome = function (props) {},props是函数参数
//    return <h1>hello ,{props.name}</h1>
// }
/*ES6  class组件 */
//注意不要把props写成prop
// class Welcome extends React.Component{
//     render(){
//         return <h1>每日tasks, {this.props.task}</h1>
//     }
// }

// // const App = ()=>{
// //     return (
// //         <div>
// //             <Welcome task = "吃饭" />
// //             <Welcome task = "学习" />
// //             <Welcome task = "撩小姐姐" />
// //         </div>
// //     )
// // }

// class Box extends Component {
//   render() {
//     return (
//       <h3>
//         父组件计数值：
//         {this.props.num}
//       </h3>
//     )
//   }
// }

// // //函数式组件中暂时16.6.0不支持state
// class App extends Component{
//     state = {
//         count:0
//     }
//     handleClick = () => {
//     console.log('Clicked!')
//    {/*this.setState({count: this.state.count+1})错误写法*/}
//   // Correct
//     this.setState(
//     (state, props) => ({
//     count: state.count + 1
//     })
//     )
//    }
//     render(){
//         return (
//             <div>
//             {this.state.count}
//             <button onClick={this.handleClick}>+1</button>
//             <Box num={this.state.count} />
//             </div>
//             )
//     }
// }

// class Toggle extends Component {
//     state = {isToggleOn :true}

//     handleClick = () =>{
//         this.setState(prevState =>({
//             isToggleOn: !prevState.isToggleOn
//         }))
//     }

//     render(){
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         )
//     }
// }
const messages = [
  {
    id: 1,
    text: 'React'
  },
  {
    id: 2,
    text: 'Re: React'
  },
  {
    id: 3,
    text: 'Re:Re: React'
  }
]
const List = props =>{
    const {messages} = props

    const list = messages.map(t => <li key={t.id}>{t.text}</li>)
    return <div>{list}</div>
}

// class Form extends Component {
//     state = {username:'',email:''}

//     handleChange = event  =>{
//         const {value,name} = event.target

//         this.setState({
//             [name]:value
//         })
//     }

//     handleSubmit = e =>{
//         console.log(`${this.state.username} ${this.state.email}`)
//         e.preventDefault()
//     }

//     render(){
//         return(
//             <div>
//                  username:
//                 <input 
//                      type="text" 
//                      name="username" 
//                      value={this.state.username}
//                      onChange = {this.handleChange}
//             />
//             <br />
//         Email:
//         <input
//           name="email"
//           type="text"
//           value={this.state.email}
//           onChange={this.handleChange}
//         />
//             <br/>
//             <button onClick={this.handleSubmit}>提交</button>
//             </div>
//         )
//     }
// }

ReactDOM.render(<List messages={messages} />,document.getElementById('root'))
