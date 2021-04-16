import { combineReducers, createStore } from 'redux';
import clothes from './clothes'
import furniture from './furniture'
import user from './user'

const state = combineReducers({clothes, furniture, user});
const store = createStore(state);

export default store;