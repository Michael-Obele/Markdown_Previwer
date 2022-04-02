import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { App } from './myApp';
import store from './app/store';
import { Provider } from 'react-redux';
import { saveState } from './localStorage';

store.subscribe(() => {
  saveState({
    /* example state */
    DarkMode: store.getState().DarkMode,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
