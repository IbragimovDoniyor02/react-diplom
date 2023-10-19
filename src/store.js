
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { competitionsReducer } from './reducers';

const store = createStore(competitionsReducer, applyMiddleware(thunk));

export default store;
