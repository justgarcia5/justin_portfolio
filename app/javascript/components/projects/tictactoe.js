import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import tictactoe from '../../images/projects/tictactoe.png'

const Tictactoe = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <div className="card-col m-5">

      <div className="card hovereffect" >
        <img src={tictactoe} className="card-img-top" height={280}  alt="..."/>
        <div className="overlay">
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-success mx-2 mt-5" onClick={handleShow}>
              Learn More
            </Button>
            <Button className="btn btn-secondary mx-2 mt-5" href="https://codesandbox.io/s/tic-tac-toe-ltlwx" target="_blank">
              Live Demo
            </Button>
            <Button className="btn btn-danger mx-2 mt-5" style={props.styles.githubButton} href="https://github.com/justgarcia5/tictactoe" target="_blank">
              Code <i className="gh fa fa-github fa-lg"></i></Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              id="modal"
            >
              <Modal.Header>
                <Modal.Title >TicTacToe</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>Date:</h5>
                <p className="ml-4">January 2019</p>
                <h5>Description:</h5>
                <p className="ml-4"> During the 3 month coding bootcamp that I attended I had task of creating a tic-tac-toe game using React. Check it out!</p>
                <h5>Technologies:</h5>
                <p className="ml-4">React, React Hooks</p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-info mx-2" href="https://codesandbox.io/s/tic-tac-toe-ltlwx" target="_blank">
                  Live Demo
                </Button>
                <Button className="btn btn-danger mx-2" style={props.styles.githubButton} href="https://github.com/justgarcia5/tictactoe" target="_blank">
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
          <h5 className="card-title mt-4">TicTacToe</h5>
        </div>
      </div>
    </div>
  )
}

export default Tictactoe;