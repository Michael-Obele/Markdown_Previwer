import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './myApp';
import store from './app/store';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { saveState } from './localStorage';

store.subscribe(() => {
  saveState({
    DarkMode: store.getState().DarkMode,
  });
});
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> parent of 2a0bd0c... Added preserved state on dark mode

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
