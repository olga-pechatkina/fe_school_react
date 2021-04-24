import { combineReducers, createStore } from 'redux';
import clothes from './clothes'
import furniture from './furniture'
import filters from './filter'
import user from './user'

const state = combineReducers({clothes, furniture, user, filters});
const store = createStore(state);

export default store;