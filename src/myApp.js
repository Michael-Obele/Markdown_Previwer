import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './app/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const App = (props) => {
  const count = useSelector((state) => state.counter);
  const logger = useSelector((state) => state.loggedState);
  const DarkMode = useSelector((state) => state.DarkMode);
  const dispatch = useDispatch();
  const ButtonAction = {
    Add: () => {
      dispatch(actions.switcher().increment());
    },
    Minus: () => {
      dispatch(actions.switcher().decrement());
    },
    Login: () => {
      dispatch(actions.switcher().Login());
    },
    Logout: () => {
      dispatch(actions.switcher().LogOut());
    },
    DarkMode: () => {
      dispatch(actions.switcher().Dark());
    },
    LightMode: () => {
      dispatch(actions.switcher().Light());
    },
  };
  const bColor = () => {
    return DarkMode ? 'grey' : `green`;
  };
  document.body.style.backgroundColor = bColor();
  const Text = () => {
    return (
      <div>
        <h2>Counter:{count}</h2>
        <button onClick={ButtonAction.Add}>Click to Add</button>
        <button onClick={ButtonAction.Minus}>Click to Remove</button>
      </div>
    );
  };
  const Moon = <FontAwesomeIcon icon={faMoon} />;
  const Sun = <FontAwesomeIcon icon={faSun} />;

  const color = (x) => {
    return DarkMode ? `Dark${x}` : x;
  };
  return (
    <div className={color('box')}>
      <h1>Header</h1>
      {DarkMode ? (
        <div>
          <button onClick={ButtonAction.LightMode}>Light Mode {Sun}</button>
          <h4>DarkMode On</h4>
        </div>
      ) : (
        <div>
          <button onClick={ButtonAction.DarkMode}>Dark Mode {Moon}</button>
          <h4>DarkMode Off</h4>
        </div>
      )}
      {logger ? (
        <button onClick={ButtonAction.Logout}>Login Out</button>
      ) : (
        <button onClick={ButtonAction.Login}>Login In</button>
      )}
      {logger ? Text() : <h3>Please Login</h3>}
    </div>
  );
};
