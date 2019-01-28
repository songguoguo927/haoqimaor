import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
//下面可理解为创建一个管理员并把小本本给他
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose
const enhancer = composeEnhancers( applyMiddleware(thunk));
const store = new createStore(reducer,enhancer)

export default store