import { createStore } from 'redux';
import Reducer from './Reducer.ts';

const store = createStore(Reducer);

export default store;
