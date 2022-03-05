import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Time from './myApp';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Time />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
