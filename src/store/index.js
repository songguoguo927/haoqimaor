import { createStore } from 'redux'
import reducer from './reducer'
//下面可理解为创建一个管理员并把小本本给他
const store = new createStore(
    reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store