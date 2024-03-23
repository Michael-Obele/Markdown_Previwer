import { useState } from 'react';
import * as p from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import CloseButton from 'react-bootstrap/CloseButton';
import { useSelector } from 'react-redux';
function Expand(props) {
  const DarkMode = useSelector((state) => state.DarkMode);
  const dark = () => {
    return {
      variant: () => {
        return DarkMode ? 'dark' : 'light';
      },
      color: () => {
        return DarkMode ? 'white' : 'black';
      },
      backgroundColor: () => {
        return DarkMode ? '#212529' : 'white';
      },
    };
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p.Button
        className='expand'
        variant={dark().variant()}
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
      </p.Button>

      <p.Modal
        show={show}
        onHide={handleClose}
        size='xl'
        backdrop='static'
        keyboard={false}
      >
        <p.Modal.Header
          style={{
            backgroundColor: dark().backgroundColor(),
            color: dark().color(),
          }}
        >
          <p.Modal.Title>{props.Title}</p.Modal.Title>
          <CloseButton onClick={handleClose} variant={dark().color()} />
        </p.Modal.Header>
        <p.Modal.Body
          style={{
            backgroundColor: dark().backgroundColor(),
            color: dark().color(),
          }}
        >
          {props.children}
        </p.Modal.Body>
        <p.Modal.Footer style={{ backgroundColor: dark().backgroundColor() }}>
          <p.Button variant='danger' onClick={handleClose}>
            Close
          </p.Button>
        </p.Modal.Footer>
      </p.Modal>
    </>
  );
}

export default Expand;
