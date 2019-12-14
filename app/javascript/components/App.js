import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './Intro'
import About from './About'
import Projects from './Projects'

class App extends React.Component {
  render () {
    return (
      <div>
        <Intro />
        <About />
        <div className="bg2"></div>
        <Projects />
      </div>
    );
  }
}

export default App
