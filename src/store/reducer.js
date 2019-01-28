import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,REMOVE_TODO_ITEM,INIT_LIST } from './actionTypes'
const defaultState = {
    inputValue:'',
    list: []
}
//reducer可以接受state，绝不可修改state
export default (state = defaultState, action)=>{
    // console.log(state,action)//这会打印出具体每次按键时的变化
    if(action.type === CHANGE_INPUT_VALUE){
        //对原来的数据做一次深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        // console.log(newState)
        return newState
    }
     if(action.type === REMOVE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}