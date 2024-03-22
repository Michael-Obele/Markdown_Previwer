import { useSelector, useDispatch } from 'react-redux';
import * as actions from './app/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Dark = () => {
  const DarkMode = useSelector((state) => state.DarkMode);
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);

  const ButtonAction = {
    DarkMode: () => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        dispatch(actions.switcher().Dark());
        setIsAnimating(false); // Stop animation
      }, 1000); // 1000ms = 1s (adjust this value as needed)
    },
    LightMode: () => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        dispatch(actions.switcher().Light());
        setIsAnimating(false); // Stop animation
      }, 1600); // 1600ms = 1.6s (adjust this value as needed)
    },
  };

  const Moon = (
    <FontAwesomeIcon
      icon={faMoon}
      className={`${isAnimating ? 'fa-beat' : ''}`}
      style={{
        animationDuration: '1s',
        animationIterationCount: isAnimating ? 'infinite' : '1',
      }}
    />
  );

  const Sun = (
    <FontAwesomeIcon
      icon={faSun}
      className={`${isAnimating ? 'fa-beat' : ''}`}
      style={{
        animationDuration: '1.6s',
        animationIterationCount: isAnimating ? 'infinite' : '1',
      }}
    />
  );

  return DarkMode ? (
    <Button variant='light' onClick={ButtonAction.LightMode}>
      {Sun}
    </Button>
  ) : (
    <Button variant='dark' onClick={ButtonAction.DarkMode}>
      {Moon}
    </Button>
  );
};

export default Dark;
