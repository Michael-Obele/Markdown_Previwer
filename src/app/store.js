import redux, { createStore, combineReducers } from 'redux';

export function switcher() {
  return {
    Dark: () => ({ type: 'Dark' }),
    Light: () => ({ type: 'Light' }),
  };
}

var initialState = {
  count: 0,
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
  DarkMode
});

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => console.log(store.getState()));
export default store;
