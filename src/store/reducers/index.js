import { combineReducers, createStore } from 'redux';
import clothes from './clothes'
import furniture from './furniture'

const state = combineReducers({clothes, furniture});
const store = createStore(state);

export default store;