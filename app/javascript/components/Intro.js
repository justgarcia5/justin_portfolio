import React from "react"
import Zoom from 'react-reveal/Zoom';


import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import IntroText from '../components/IntoText'
import PicturesBg from "./PicturesBg"
import Profile from '../images/photos_bg/profile_pic.jpg'

class Intro extends React.Component {

  render () {

    return (
      <div className="wrapper" name="intro" id="intro">
        <div className="bg">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          <div className="intro-text">
            <IntroText />
          </div>
        </div>

        <img src={Profile} className="mobile-intro"/>
        <div className="mobile-header" style={styles.titleText}>
          <h1>Justin Garcia</h1>
          <h2>Web Developer</h2>
        </div>

        <Zoom>
          <About />
        </Zoom>
        <div className="bg2"></div>
        <Projects />
        <PicturesBg />
        <Contact />
      </div>
    );
  }
}

export default Intro

const styles = {
  titleText: {
    textAlign: 'center',
    marginTop: '20vh',
    color: 'white',
    fontFamily: "Cinzel",
  }
}
