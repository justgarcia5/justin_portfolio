import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Recipe from '../../assets/images/recipe2.png'
import Tool from '../../assets/images/toolshare.png'
import Zeal from '../../assets/images/zeal.png'

class Projects extends React.Component {
  render () {
    return (
      <div className="">
        <div className="projects-div" name="projects" id="projects">
          <h2 className="text-center mt-5">My Work</h2>
          <hr className="col-sm-4"/>
          <div className="container d-flex justify-content-center mt-5">
            <div className="row">
              <div className="card-col col-sm">
                <div className="card hovereffect" >
                  <img src={Recipe} className="card-img-top img-responsive" height={240} alt="..."/>
                  <div className="overlay">
                    <h2>RecipeApp</h2>
                    <a className="btn info" href="#">Live Demo</a>
                    <br/>
                    <a className="btn info" href="https://github.com/justgarcia5/recipe-app">Code <i className="gh fa fa-github fa-lg"></i></a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Recipe App</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="card-col col-sm">
                <div className="card hovereffect" >
                  <img src={Zeal} className="card-img-top" height={240} alt="..."/>
                  <div className="overlay">
                    <h2>Initiative Tracker</h2>
                    <a className="btn info" href="https://github.com/CodingZeal/initiative-tracker" target="_blank">Code <i className="gh fa fa-github fa-lg"></i></a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Initiative Tracker</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="card-col col-sm">
                <div className="card hovereffect" >
                  <img src={Tool} className="card-img-top" height={240} alt="..."/>
                  <div className="overlay">
                    <h2>ToolShare</h2>
                    <a className="btn info" href="https://github.com/team-pacific-drive/ToolShare" target="_blank">Code <i className="gh fa fa-github fa-lg"></i></a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">ToolShare</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
