import { useState } from 'react';
import * as p from 'react-bootstrap';
import { Content } from './content';
function Expand() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p.Button variant='primary' onClick={handleShow}>
        Launch static backdrop modal
      </p.Button>

      <p.Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <p.Modal.Header closeButton>
          <p.Modal.Title>p.Modal title</p.Modal.Title>
        </p.Modal.Header>
        <p.Modal.Body>
          <Content />;
        </p.Modal.Body>
        <p.Modal.Footer>
          <p.Button variant='secondary' onClick={handleClose}>
            Close
          </p.Button>
          <p.Button variant='primary'>Understood</p.Button>
        </p.Modal.Footer>
      </p.Modal>
    </>
  );
}

export default Expand;
