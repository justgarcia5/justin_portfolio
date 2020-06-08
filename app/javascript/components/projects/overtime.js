import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import OvertimeImg from '../../images/projects/overtime.png'

const Overtime = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <div className="card-col m-5">

      <div className="card hovereffect" >
        <img src={OvertimeImg} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Button className="btn btn-info mx-2 mt-5" href="https://overtime-app-1.herokuapp.com/" target="_blank">
              Live Demo
            </Button>
            <Button className="btn btn-danger mx-2 mt-5" style={props.styles.githubButton} href="https://github.com/justgarcia5/overtime_app" target="_blank">
              Code <i className="gh fa fa-github fa-lg"></i></Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title >Overtime App</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">August 2019 - Current</p>
                <h5>Description:</h5>
                <p className="ml-4"> Overtime was built to calculate and record working hours for all employees including overtime hours. This app allows individual employees to add and edit hours depending on approval from admin.</p>
                <h5>My Contributions:</h5>
                <ul>
                  <li>Set up Rails Application.</li>
                  <li>Applied Bootstrap for responsive, mobile-first front-end web development.</li>
                  <li>Organized SendGrid and ActionMailer to send registered users emails.</li>
                  <li>Utilized Twilio for SMS notifications</li>
                  <li>Implemented Devise for user authentication, along with creating Admin and Employee role with custom params</li>
                  <li>Deployed to Heroku staging pipeline deployed from GitHub</li>
                </ul>
                <h5>Technologies:</h5>
                <p className="ml-4">Ruby on Rails, Devise, Bootstrap, Webpack, Postgresql, SendGrid</p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-info mx-2" href="https://overtime-app-1.herokuapp.com/" target="_blank">
                  Live Demo
                </Button>
                <Button className="btn btn-danger mx-2" style={props.styles.githubButton} href="https://github.com/justgarcia5/overtime_app" target="_blank">
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
          <h5 className="card-title mt-4">Overtime App</h5>
        </div>
      </div>
    </div>
  )
}

export default Overtime;