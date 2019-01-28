import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
//下面可理解为创建一个管理员并把小本本给他
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
    const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = new createStore(reducer,enhancer)

export default store