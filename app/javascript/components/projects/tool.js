import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import ToolShare from '../../images/projects/toolshare.png'

const Tool = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="card-col m-5">
      <div className="card hovereffect" >
        <img src={ToolShare} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Button className="btn btn-danger mx-2 mt-5" style={props.styles.githubButton} href="https://github.com/team-pacific-drive/ToolShare" target="_blank">
              Code <i className="gh fa fa-github fa-lg"></i></Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg"
              id="modal"
            >
              <Modal.Header closeButton className="text-center">
                <Modal.Title >ToolShare</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">Feb 2019</p>
                <h5>Description:</h5>
                <p className="ml-4">ToolShare is an application built to connect users looking to rent that one time tool and for users looking to make some cash renting out tools that never get any use. I spent the final two weeks of the Bootcamp I attended builing this app.</p>
                <h5>My Contributions:</h5>
                <ul>
                  <li>Set up Rails and react-rails</li>
                  <li>Constructed app's routes and controllers</li>
                  <li>Created the app's tools table </li>
                  <li>Built the unauth and auth pages</li>
                  <li>Set up Devise, along with strong params to allow new fields in the user table</li>
                  <li>Utilized two Google APIs and Geocoder, to show renter's the area the tool's owner wants to meet in</li>
                  <li>Built the CRUD method in React and used the Fetch API to manipulated data</li>
                  <li>Implemented Devise for user authentication</li>
                </ul>
                <h5>Technologies:</h5>
                <p className="ml-4">React, Rails, Devise, Bootstrap, Webpack, Postgresql, Google Maps API</p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-danger mx-2" style={props.styles.githubButton} href="https://github.com/team-pacific-drive/ToolShare" target="_blank">
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
          <h5 className="card-title mt-4">ToolShare</h5>
          {/* <p className="card-text">This application was build to help users set and accomplish initiatives and allow interaction between other users to help achieve these initiatives. The Initiative Tracker was built using Ruby on Rails with a Postqresql database. Every feature is provided and delivered with Rspec tesing and all code is analyzed and formatted with RuboCop. </p> */}
        </div>
      </div>
    </div>
  )
}

export default Tool;