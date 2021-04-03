import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/posts';


const rootReducer = combineReducers({
    posts: reducer
})

export default createStore(rootReducer, compose(applyMiddleware(thunk)) );