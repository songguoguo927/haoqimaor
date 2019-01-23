const defaultState = {
    inputValue:'',
    list: ['学习react','学习node']
}
//reducer可以接受state，绝不可修改state
export default (state = defaultState, action)=>{
    // console.log(state,action)//这会打印出具体每次按键时的变化
    if(action.type === 'change_input_value'){
        //对原来的数据做一次深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        // console.log(newState)
        return newState
    }
     if(action.type === 'remove_todo_item'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}