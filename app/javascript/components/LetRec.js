import React, { useState } from 'react';
import {
  Button,
  Modal,
  Image
} from 'react-bootstrap';

import letRec from '../../assets/documents/LetRec.png'
// import letter from '../../assets/docs/letter.pdf'

function LetRec() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-5 pb-5 text-center">

      {/* <a className="col-sm-6" href={letter} rel="noopener noreferrer" target="_blank">
        <Image width={250} src={letRec} thumbnail/>
      </a> */}

      <a className="docs" type="button" variant="primary" onClick={handleShow}>
        <h5>Letter of Reccomendation</h5>
        <hr/>
        <br/>
        <Image width={250} src={letRec} thumbnail/>
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Letter of Reccomendation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={letRec} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LetRec;
