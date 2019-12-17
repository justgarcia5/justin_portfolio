import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './Intro'

class App extends React.Component {
  render () {
    return (
      <div>
        <Intro />
        <div className="icon-bar">
          <a href="https://www.facebook.com/justin.garcia.378199" className="facebook"><i className="fa fa-facebook"></i></a>
          <a href="https://twitter.com/Justgarcia85" className="twitter"><i className="fa fa-twitter"></i></a>
          <a href="https://github.com/justgarcia5" className="github"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/just-g-garcia/" className="linkedin"><i className="fa fa-linkedin"></i></a>
          <a href="mailto:justgarcia5@gmail.com" className="envelope"><i className="fa fa-envelope"></i></a>
        </div>
      </div>
    );
  }
}

export default App
