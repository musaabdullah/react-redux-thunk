import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/posts';
import carts from './reducers/carts';
import checkout from './reducers/checkout';

const rootReducer = combineReducers({
    posts: reducer,
    carts: carts,
    checkout: checkout,
})

export default createStore(rootReducer, compose(applyMiddleware(thunk)) );