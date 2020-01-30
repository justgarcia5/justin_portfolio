import React from "react"

import Intro from './Intro'
import StickyBar from '../components/StickyBar'

class App extends React.Component {
  render () {
    return (
      <div className="app">
          <Intro />
          <StickyBar />
      </div>
    );
  }
}

export default App
