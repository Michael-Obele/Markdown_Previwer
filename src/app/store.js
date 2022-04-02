import { createStore, combineReducers } from 'redux';

export function switcher() {
  return {
    Dark: () => ({ type: 'Dark' }),
    Light: () => ({ type: 'Light' }),
  };
}

var initialState = {
  DarkMode: false,
};

const DarkMode = (mode = initialState.DarkMode, action) => {
  switch (action.type) {
    case 'Light':
      return (mode = false);
      break;
    case 'Dark':
      return (mode = true);
      break;
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
export default store;
