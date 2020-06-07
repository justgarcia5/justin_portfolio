import React from "react"

import Zoom from 'react-reveal/Zoom';
import PicturesBg from "./PicturesBg"
import About from './About'
import Intro from './Intro'
import Contact from './Contact'
import Projects from './Projects'
import StickyBar from '../components/StickyBar'

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Intro />
        <StickyBar />
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

export default App
