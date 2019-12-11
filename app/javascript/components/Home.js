import React from "react"
import PropTypes from "prop-types"

import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  greeting: PropTypes.string
};
export default Home
