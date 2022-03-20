import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './app/store';
import Header from './Header';
import Dark from './Darker';
import { Input, Output } from './content';

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
  };
  const bColor = () => {
    return DarkMode ? 'grey' : `white`;
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

  const color = (x) => {
    return DarkMode ? `${x} dark` : x;
  };
  return (
    <div>
      <Header>
        <Dark />
      </Header>
      <Input />
      <Output />
    </div>
  );
};
