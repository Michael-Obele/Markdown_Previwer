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
const DarkMode = (mode, action) => {
  if (mode == undefined) {
    mode = initialState.DarkMode;
  } else {
    mode = initialState.persistedState.DarkMode;
  }
  switch (action.type) {
    case 'Light':
      return (mode = false);
    case 'Dark':
      return (mode = true);
    default:
      return mode;
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
