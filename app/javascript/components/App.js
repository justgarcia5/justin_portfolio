import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './Intro'
import About from './About'

class App extends React.Component {
  render () {
    return (
      <div>
        <Intro />
        <About />
      </div>
    );
  }
}

export default App
