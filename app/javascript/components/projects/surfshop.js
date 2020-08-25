import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

import SurfshopImage from '../../images/projects/surfshop.png'

export default function Surfshop(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card-col m-5">
      <div className="card hovereffect" >
        <img src={SurfshopImage} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Button className="btn btn-info mx-2 mt-5" href="https://www.mysurfshopstore.com/" target="_blank">
              Live Demo
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"

              id="modal"
            >
              <Modal.Header>
                <Modal.Title >MYSURFSHOPSTORE</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">June 2020 - Current</p>
                <h5>Description:</h5>
                <p className="ml-4">This is MYSURFSHOPSTORE which is built using Worpress. I implemented the Woo-commerce plugin as well as a custom theme.</p>
                <h5>My Contributions:</h5>
                <ul>
                  <li>Created AWS EC2 Instance with Wordpress Bitnami</li>
                  <li>Added WooCommerce plugin and connected stripe account for payments</li>
                  <li>Implemented custom UI Theme</li>
                </ul>
                <h5>Technologies:</h5>
                <p className="ml-4">Wordpress, WooComerce, php, AWS</p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-info mx-2" href="https://www.mysurfshopstore.com/" target="_blank">
                  Live Demo
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close [X]
                </Button>
              </Modal.Footer>
            </Modal>

          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title mt-4">MYSURFSHOPSTORE</h5>
        </div>
      </div>
    </div>
  )
}