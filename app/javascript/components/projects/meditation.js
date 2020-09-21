import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

import MeditationPic from '../../images/projects/meditation.png'

export default function Meditation(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card-col m-5">
      <div className="card hovereffect" >
        <img src={MeditationPic} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
          <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Button className="btn btn-secondary mx-2 mt-5" href="https://codesandbox.io/s/meditaiton-app-o2dp8" target="_blank">
              Live Demo
            </Button>
            <Button className="btn btn-danger mx-2 mt-5" style={props.styles.githubButton} href="https://github.com/justgarcia5/meditation-app" target="_blank">
              Code <i className="gh fa fa-github fa-lg"></i></Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              id="modal"
            >
              <Modal.Header>
                <Modal.Title >Meditation App</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">Aug 2020</p>
                <h5>Description:</h5>
                <p className="ml-4">Meditation app allows you to relax and enjoy the amazing sounds of rain or waves crashing on the beach. Choose your setting and start your timer.</p>

                <h5>Technologies:</h5>
                <p className="ml-4">React</p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-info mx-2" href="https://www.mysurfshopstore.com/" target="_blank">
                  Live Demo
                </Button>
                <Button className="btn btn-danger mx-2" style={props.styles.githubButton} href="https://github.com/justgarcia5/meditation-app" target="_blank">
              Code <i className="gh fa fa-github fa-lg"></i></Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close [X]
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title mt-4">Meditation App</h5>
        </div>
      </div>
    </div>
  )
}