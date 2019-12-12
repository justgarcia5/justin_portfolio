import React from "react"
import { Grid, Row, Col } from 'react-bootstrap'

class About extends React.Component {
  render () {
    return (
      <div className="about container">
        <div className="row">
          <div className="col-sm">
            <h2>About</h2>
            <hr/>
          </div>
          <div className="skills col-sm">
            <h2>Skills</h2>
            <hr/>
            <p>JavaScript</p>
            <p>React</p>
            <p>Ruby on Rails</p>
            <p>Bootstrap</p>
            <p>php</p>
            <p>HTML5/CSS3</p>
          </div>
          <div className="col-sm">
            <h2>Spotify</h2>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default About
