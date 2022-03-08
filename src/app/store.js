import { createStore } from 'redux';
import { counterReducer } from './actions';


export const store = createStore(counterReducer);
