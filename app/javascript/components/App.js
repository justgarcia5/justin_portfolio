import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './Intro'
import StickyBar from '../components/StickyBar'

class App extends React.Component {
  render () {
    return (
      <div>
          <Intro />
          <StickyBar />
      </div>
    );
  }
}

export default App
