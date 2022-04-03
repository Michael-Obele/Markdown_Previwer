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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
