import React, { useEffect } from "react"

import jporthead from '../images/portfolio-landing.jpg';
import BeachVideo from '../videos/sunset.mp4';

export default function Intro() {

  useEffect(() => {
    const video = document.querySelector(".video");
    console.log(video)
    video.load();
    video.play();
  },[]);

  return (
    <div className="wrapper" name="intro">
      <div id="intro">
        <h1 className="intro-text">Justin Garcia</h1>
        <h2 className="intro-title">Web Developer</h2>
        <video autoPlay loop muted className="video">
          <source src={BeachVideo}  type="video/mp4" />
        </video>
      </div>
    </div>
  );
}


