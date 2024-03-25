import { useState } from 'react';
import * as p from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightAndDownLeftFromCenter,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';
import CloseButton from 'react-bootstrap/CloseButton';
import { useSelector } from 'react-redux';
import Toast from 'react-bootstrap/Toast';
function Expand(props) {
  const DarkMode = useSelector((state) => state.DarkMode);
  const dark = () => {
    return {
      variant: DarkMode ? 'dark' : 'light',
      bg: DarkMode ? 'dark' : 'light',
      text: DarkMode ? 'light' : 'dark',
      color: DarkMode ? 'white' : 'black',
      backgroundColor: DarkMode ? '#212529' : 'white',
    };
  };
  const [show, setShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  let text = props.children.props.value;

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(text);
        console.log('Text copied to clipboard');
        setToastShow(true);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Toast */}
      {props.Title === 'Editor' && (
        <div class='position-absolute top-0 start-50 translate-middle'>
          <Toast
            onClose={() => setToastShow(false)}
            show={toastShow}
            delay={3000}
            bg={'success'}
            autohide>
            <Toast.Header>
              <strong className='me-auto'>Copied!</strong>
            </Toast.Header>
            <Toast.Body>Success, the text is copied!</Toast.Body>
          </Toast>
        </div>
      )}
      {/* Toast */}
      <div>
        <p.Button
          className='expand'
          variant={dark().variant}
          onClick={handleShow}>
          <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
        </p.Button>
        {props.Title === 'Editor' && (
          <p.Button
            className='expand-1'
            variant={dark().variant}
            onClick={() => handleCopy(text)}>
            <FontAwesomeIcon icon={faClipboard} />
          </p.Button>
        )}
      </div>

      <p.Modal
        show={show}
        onHide={handleClose}
        size='xl'
        backdrop='static'
        keyboard={false}>
        <p.Modal.Header
          style={{
            backgroundColor: dark().backgroundColor,
            color: dark().color,
          }}>
          <p.Modal.Title>{props.Title}</p.Modal.Title>
          <CloseButton onClick={handleClose} variant={dark().color} />
        </p.Modal.Header>
        <p.Modal.Body
          style={{
            backgroundColor: dark().backgroundColor,
            color: dark().color,
          }}>
          {props.children}
        </p.Modal.Body>
        <p.Modal.Footer style={{ backgroundColor: dark().backgroundColor }}>
          <p.Button className='mx-5' variant='danger' onClick={handleClose}>
            Close
          </p.Button>
        </p.Modal.Footer>
      </p.Modal>
    </>
  );
}

export default Expand;
