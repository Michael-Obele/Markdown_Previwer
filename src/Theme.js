import { useSelector, useDispatch } from 'react-redux';
import * as actions from './app/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Dark = () => {
  const DarkMode = useSelector((state) => state.DarkMode);
  const dispatch = useDispatch();

  const ButtonAction = {
    DarkMode: () => {
      dispatch(actions.switcher().Dark());
    },
    LightMode: () => {
      dispatch(actions.switcher().Light());
    },
  };

  return DarkMode ? (
    <Button variant='light' onClick={ButtonAction.LightMode}>
      <FontAwesomeIcon icon={faSun} />
    </Button>
  ) : (
    <Button variant='dark' onClick={ButtonAction.DarkMode}>
      <FontAwesomeIcon icon={faMoon} />
    </Button>
  );
};

export default Dark;
