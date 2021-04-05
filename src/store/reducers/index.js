import { combineReducers, createStore } from 'redux';
import clothes from './clothes'

const state = combineReducers({clothes});
const store = createStore(state);

export default store;