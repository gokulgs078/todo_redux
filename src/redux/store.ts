import { createStore } from 'redux';
import taskReducer from './taskReducer.ts';

const store = createStore(taskReducer);

export default store;
