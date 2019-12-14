import React from "react"
import { Jumbotron } from 'react-bootstrap'

class Intro extends React.Component {
  render () {
    return (
      <div className="wrapper" name="intro" id="intro">
        <div className="bg">
          <div className="intro-text">
            <h1>My name is Justin Garcia and I am a Web Developer...</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro
