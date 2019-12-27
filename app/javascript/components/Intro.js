import React from "react"

import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import IntroText from '../components/IntoText'
import PicturesBg from "./PicturesBg"

class Intro extends React.Component {
  render () {
    return (
      <div className="wrapper" name="intro" id="intro">
        <div className="bg">
          <div className="intro-text">
            <IntroText />
          </div>
        </div>
        <About />
        <div className="bg2"></div>
        <Projects />
        <PicturesBg />
        <Contact />
      </div>
    );
  }
}

export default Intro
