import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import App from './App'

class Routes extends React.Component {
  render () {
    return (
      <div>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default Routes
