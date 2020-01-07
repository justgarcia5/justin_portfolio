import React, { useState } from 'react';
import {
  Button,
  Modal,
  Image
} from 'react-bootstrap';

import resume from '../../assets/documents/resume.png'
// import Res from '../../assets/docs/resume.pdf'


function Resume() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-5 pb-5 text-center">

      {/* <a className="col-sm-6" href={Res} rel="noopener noreferrer" target="_blank">
        <Image width={250} src={resume} thumbnail/>
      </a> */}

      {/* <a className="docs" type="button" variant="primary" onClick={handleShow}>
        <h5>Resume</h5>
        <hr/>
        <br/>
        <Image width={250} src={resume} thumbnail/>
      </a> */}

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
