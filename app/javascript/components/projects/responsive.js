import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import RespImage from '../../images/projects/responsive.png'

const Responsive = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="card-col m-5">
      <div className="card hovereffect" >
        <img src={RespImage} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Button className="btn btn-danger mx-2 mt-5" style={props.styles.githubButton} href="https://github.com/justgarcia5/responsive-css" target="_blank">
              Code <i className="gh fa fa-github fa-lg"></i></Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg"
              id="modal"
            >
              <Modal.Header closeButton className="text-center">
                <Modal.Title >Responsive CSS</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">October 2019</p>
                <h5>Description:</h5>
                <p className="ml-4">I built this responsive page using a JavaScript, HTML, and CSS file. This was a task given to me to convert a PSD file into code and by implementing a mobile and desktop view.</p>
                <h5>Technologies:</h5>
                <p className="ml-4">JavaScript, HTML, CSS</p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-danger mx-2" style={props.styles.githubButton} href="https://github.com/justgarcia5/responsive-css" target="_blank">
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
          <h5 className="card-title mt-4">Responsive CSS</h5>
        </div>
      </div>
    </div>
  )
}

export default Responsive;