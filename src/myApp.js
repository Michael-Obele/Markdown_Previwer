import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Dark from './Darker';
import { Content } from './content';

export const App = (props) => {
  const DarkMode = useSelector((state) => state.DarkMode);
  const bColor = () => {
    return DarkMode ? 'grey' : `white`;
  };
  document.body.style.backgroundColor = bColor();
  return (
    <div>
      <Header>
        <Dark />
      </Header>
      <Content />
    </div>
  );
};
