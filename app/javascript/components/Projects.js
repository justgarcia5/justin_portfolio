import React from "react"

import Recipe from '../../assets/images/recipe.png'
import Tool from '../../assets/images/toolShare2.png'
import Zeal from '../../assets/images/zeal.png'

class Projects extends React.Component {
  render () {
    return (
      <div className="">
        <div className="projects-div" name="projects" id="projects" >
          <h2 className="text-center mt-5">My Work</h2>
          <hr className="col-sm-4"/>
          <div className="container d-flex justify-content-center mt-5">
            <div className="row">
              <div className="card-col col-sm">
                <div className="card" >
                  <img src={Recipe} className="card-img-top" height={240} alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Recipe App</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="card-col col-sm">
                <div className="card" >
                  <img src={Zeal} className="card-img-top" height={240} alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Initiative Tracker</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="card-col col-sm">
                <div className="card" >
                  <img src={Tool} className="card-img-top" height={240} alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">ToolShare</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects
