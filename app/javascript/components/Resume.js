import React, { useState } from 'react';
import {
  Button,
  Modal,
  Image
} from 'react-bootstrap';

import resume from '../../assets/documents/resume.png'

function Resume() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-5 pb-5 text-center">
      <a className="docs" type="button" variant="primary" onClick={handleShow}>
        <h5>Resume</h5>
        <hr/>
        <br/>
        <Image width={250} src={resume} thumbnail/>
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
