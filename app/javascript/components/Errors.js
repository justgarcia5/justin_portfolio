import React from 'react'

class Errors extends React.Component{
  render(){
    const { errors } = this.props

    const styles = {
      errorDiv: {
        top: "-33px"
      }
    }

    return(
      <div className="container col-sm-12" style={styles.errorDiv}>
        {errors &&
          <div className="alert alert-danger text-left">
            <h2 className="text-left errors">Errors:</h2>
            {Object.keys(errors).map((key, index) => {
              return (
                <li key={index}>
                  {key}
                  {" "}
                  {errors[key].join(', ')}
                </li>)
              })
            }
          </div>
        }
      </div>
    )
  }
}

export default Errors
