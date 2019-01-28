import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,REMOVE_TODO_ITEM,INIT_LIST } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) =>({
            type:CHANGE_INPUT_VALUE,
            value
        })
export const getAddTodoItemAction = () =>({
            type:ADD_TODO_ITEM
        })
export const getRemoveTodoItemAction = (index) =>({
           type:REMOVE_TODO_ITEM,
           index
        })
export const initListAction = (data) =>({
        type:INIT_LIST,
        data
})
//使用thunk后返回的不光仅仅是一个对象，还可以是下面的函数
export const getTodoList = () =>{
        return (dispatch) =>{
                axios.get('/api/todolist.json')
                .then((res) =>{
                    const data = res.data
                //     console.log(data)
                    const action = initListAction(data)
                    dispatch(action)
                })
                .catch(() =>{alert('error')})
        }
}