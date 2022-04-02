import { useSelector, useDispatch } from 'react-redux';
import * as actions from './app/store';
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
  const Moon = <FontAwesomeIcon icon={faMoon} />;
  const Sun = <FontAwesomeIcon icon={faSun} />;
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
