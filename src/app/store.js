import redux, { createStore, combineReducers } from 'redux';

export function switcher() {
  return {
    increment: () => ({ type: 'INCREMENT' }),
    decrement: () => ({ type: 'DECREMENT' }),
    reset: () => ({ type: 'RESET' }),
    multiplyby3: () => ({ type: 'MULTIPLYBY3' }),
    Login: () => ({ type: 'LogIn' }),
    LogOut: () => ({ type: 'LogOut' }),
    Dark: () => ({ type: 'Dark' }),
    Light: () => ({ type: 'Light' }),
  };
}

var initialState = {
  count: 0,
  LoggedIn: false,
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

function auth(auth = initialState.LoggedIn, action) {
  switch (action.type) {
    case 'LogIn':
      return (auth = true);
      break;
    case 'LogOut':
      return (auth = false);
      break;
    default:
      return auth;
  }
}

function reducer(count = initialState.count, action) {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    case 'MULTIPLYBY3':
      return count * 3;
    case 'RESET':
      return (count = 0);
    default:
      return count;
  }
}

const Reducers = combineReducers({
  counter: reducer,
  loggedState: auth,
  DarkMode,
});

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => console.log(store.getState()));
export default store;
