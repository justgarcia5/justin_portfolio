import React from "react"
import PropTypes from "prop-types"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from "react-bootstrap";

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Jumbotron className="container text-center">
          <h1>My name is Justin Garcia and I am a Web Developer!</h1>
          <p>
            <Button className="mt-5" variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Home
