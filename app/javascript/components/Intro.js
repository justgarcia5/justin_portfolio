import React from "react"

import jporthead from '../images/portfolio-landing.jpg'

class Intro extends React.Component {
  render () {
    return (
      <div className="wrapper" name="intro" id="intro">
        <img src={jporthead} className="landing"/>
      </div>
    );
  }
}

export default Intro

