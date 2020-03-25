import React, { useState } from "react"
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

import Resume from '../components/Resume'
import LetRec from '../components/LetRec'

function About() {

  return (
    <div>
      <div className="about container" name="about" id="about" method="post">
        <div className="row d-flex">
          <div className="col-sm mt-5">
            <h2 className="about-title">About</h2>
            <hr/>
            <p className="mt-5 text-center">I am a web developer with two years experience building and creating responsive and high quality applications using React and Ruby on Rails. I have obtained a solid foundation and understanding of web development while attending and completing a Full-Stack bootcamp. Thereafter the bootcamp, I was an intern for a consultant company, Coding Zeal. During this time I gained experience and knowledge in working in an Agile Software Development process.</p>
          </div>
          <div className="col-sm mt-5">
          <h2 className="about-title">Skills</h2>
            <hr/>
            <div className="mt-5">
              <p>JavaScript</p>
              <p>React</p>
              <p>Ruby on Rails</p>
              <p>Bootstrap</p>
              <p>HTML5/CSS3</p>
              <p>Postgresql</p>
              <p>AWS</p>
              <p>Heroku</p>
              <p>node.js</p>
            </div>
          </div>
          <div className="col-sm mt-5">
            <iframe className="iframe" src="https://open.spotify.com/embed/album/5eBz5hZihObXdRv0AwH5zB&view=coverart" width="340" height="450" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>

      {/* <div className="docs">
        <Container className="docs-container text-center m-auto">
          <Row className="text-center">
            <Col xs={6} md={6}>
              <Resume />
            </Col>
            <Col xs={6} md={6}>
              <LetRec />
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
}


export default About
