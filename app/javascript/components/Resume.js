import React, { useState } from 'react';

import {
  Button,
  Modal,
  Image
} from 'react-bootstrap';
import resume from '../../assets/images/documents/resume.png'

function Resume() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="docs mb-5 pb-5 text-center">
      <h4>Resume</h4>
      <a type="button" variant="primary" onClick={handleShow}>
        <hr/>
        <br/>
        <Image width={250} src={resume} />
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={resume} />
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

export default Resume;
