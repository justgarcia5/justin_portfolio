import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Trade from '../../images/projects/tradeup.png'

const TradeUp = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="card-col m-5">
      <div className="card hovereffect" >
        <img src={Trade} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Button className="btn btn-info mx-2 mt-5" href="https://alltraderup.com/" target="_blank">
              Live Demo
            </Button>
            <Button className="btn btn-danger mx-2 mt-5" style={props.styles.githubButton} href="https://github.com/justgarcia5/trade-up" target="_blank">
              Code <i className="gh fa fa-github fa-lg"></i></Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton className="text-center">
                <Modal.Title >TradeUP</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">June 2020</p>
                <h5>Description:</h5>
                <p className="ml-4">TradeUp is sort of a spin off of OfferUp, but only TradeUp! I built this to keep developing my skills in React and Rails and to also work in Agile.</p>
                <h5>My Contributions:</h5>
                <ul>
                  <li>Set up Rails App</li>
                  <li>Built Models, Views, Controllers, and Routes</li>
                  <li>Utilized Geocoder and Google dynamic maps API to show locations of trades</li>
                  <li>Constructed DM system for user to user messaging and notifications</li>
                  <li>Used Devise and Oauth Facebook Authentication, along with strong params to allow new fields in the user table</li>
                  <li>Added AWS RDS and Amazon S3 Storage for file attachments in production environment</li>
                  <li>Dockerized application</li>
                  <li>Deployed to AWS EC2 Instance using ECR and ECS </li>
                </ul>
                <h5>Technologies:</h5>
                <p className="ml-4">React, Rails, Devise, Bootstrap, Webpack, Postgresql, Google Maps API, Geocoder AWS</p>
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
          <h5 className="card-title mt-4">TradeUp</h5>
        </div>
      </div>
    </div>
  )
}

export default TradeUp;