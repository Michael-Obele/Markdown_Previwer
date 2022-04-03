import { createStore, combineReducers } from 'redux';
import { loadState } from '../localStorage';

export function switcher() {
  return {
    Dark: () => ({ type: 'Dark' }),
    Light: () => ({ type: 'Light' }),
  };
}

const persistedState = loadState();

var initialState = {
  DarkMode: false,
  persistedState,
};
const DarkMode = (state = initialState.DarkMode, action) => {
  switch (action.type) {
    case 'Light':
      return (state = false);
      break;
    case 'Dark':
      return (state = true);
      break;
    default:
      return state;
  }
};

const Reducers = combineReducers({
  DarkMode,
});

const store = createStore(
  Reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
