import { createStore, combineReducers } from 'redux';
import { loadState } from '../localStorage';

const persistedState = loadState();

export function switcher() {
  return {
    Dark: () => ({ type: 'Dark' }),
    Light: () => ({ type: 'Light' }),
  };
}

var initialState = {
  DarkMode: false,
  persistedState,
};
const DarkMode = (state = initialState.persistedState.DarkMode, action) => {
  switch (action.type) {
    case 'Light':
      return false;
    case 'Dark':
      return true;
    default:
      return state;
  }
};

const Reducers = combineReducers({
  DarkMode,
});

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => console.log(store.getState()));
export default store;
