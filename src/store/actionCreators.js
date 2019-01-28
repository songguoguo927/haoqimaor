import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,REMOVE_TODO_ITEM,INIT_LIST } from './actionTypes'

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