import React from 'react'

class Errors extends React.Component{
  render(){
    const { errors } = this.props
    return(
      <div className="container col-sm-12 m-auto">
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
