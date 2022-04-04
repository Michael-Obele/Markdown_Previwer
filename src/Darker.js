import { useSelector, useDispatch } from 'react-redux';
import * as actions from './app/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

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
  const Moon = (
    <FontAwesomeIcon
      icon={faMoon}
      className='fa-bounce'
      style={{ animationDuration: '1s', animationIterationCount: '1' }}
    />
  );
  const Sun = (
    <FontAwesomeIcon
      icon={faSun}
      className='fa-beat'
      style={{ animationDuration: '1.6s', animationIterationCount: '1' }}
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
