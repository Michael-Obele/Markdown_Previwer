import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { App } from './myApp';
import store from './app/redux';
import { saveState } from './localStorage';
import { Provider } from 'react-redux';

store.subscribe(() => {
  saveState({
    DarkMode: store.getState().DarkMode,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
