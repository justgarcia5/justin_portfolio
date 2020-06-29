import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Tracker from '../../images/projects/zeal.png'

const Zeal = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="card-col m-5">
      <div className="card hovereffect" >
        <img src={Tracker} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Button className="btn btn-danger mx-2 mt-5" style={props.styles.githubButton} href="https://github.com/CodingZeal/initiative-tracker" target="_blank">
              Code <i className="gh fa fa-github fa-lg"></i></Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg"
              id="modal"
            >
              <Modal.Header closeButton className="text-center">
                <Modal.Title >Initiative Tracker</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">June 2019</p>
                <h5>Description:</h5>
                <p className="ml-4">Initiative Tracker was an application that I got the opportunity to be part of during my 2 month internship with CodingZeal. This application was build to help users set and accomplish initiatives and allow interaction between other users to help achieve these initiatives.</p>
                <h5>My Contributions:</h5>
                <ul>
                  <li>Created Wireflow Diagrams and User Stories</li>
                  <li>Built Models, Views, Controllers, and Routes</li>
                  <li>Set up Ruby on Rail application with Postgresql database</li>
                  <li>Developed RSpec/Capybara tests for delivery of each feature</li>
                  <li>Implemented Devise for user/admin authentication</li>
                  <li>Organized SendGrid and ActionMailer to send registered users emails.</li>
                </ul>
                <h5>Technologies:</h5>
                <p className="ml-4">Ruby on Rails, RSpec, Devise, Bootstrap, Webpack, Postgresql</p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-danger mx-2" style={props.styles.githubButton} href="https://github.com/CodingZeal/initiative-tracker" target="_blank">
                  Code <i className="gh fa fa-github fa-lg"></i>
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close [X]
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title mt-4">Initiative Tracker</h5>
        </div>
      </div>
    </div>
  )
}

export default Zeal;