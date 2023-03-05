import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from './posts/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({postsReducer})

const store = createStore(rootReducer, 
              composeWithDevTools(applyMiddleware(thunk)));

export default store