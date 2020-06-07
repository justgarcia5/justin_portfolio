import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Tech from '../../images/projects/tech_talk'

const TechTalk = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="card-col m-5">
      <div className="card hovereffect" >
        <img src={Tech} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton className="text-center">
                <Modal.Title >Tech Talk React Lifecycle Methods</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">January 2019</p>
                <h5>Description:</h5>
                <p className="ml-4">During the course of the three month bootcamp I attended, I was given the task of finding and giving a tech talk on any relevant technologies that interested me and present it to my cohort. I chose to do my presentation on React Life Cycle Methods. Check it out!</p>
                <h5>Technologies:</h5>
                <p className="ml-4">React</p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-success mx-2" href="https://docs.google.com/presentation/d/1nVaZyaeBd_OA_bQQ9ULTK5ndD2DlmumNYvp1YcXAgtk/edit#slide=id.p" target="_blank">
                  View
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close [X]
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title mt-4">Tech Talk React Lifecycle Methods</h5>
        </div>
      </div>
    </div>
  )
}

export default TechTalk;