import React from "react"

import Recipe from '../../assets/images/recipe.png'
import Tool from '../../assets/images/toolShare2.png'
import Zeal from '../../assets/images/zeal.png'

class Projects extends React.Component {
  render () {
    return (
      <div className="">
        <div className="bg2"></div>
        <div className="projects-div">
          <h2 className="text-center mt-5">My Work</h2>
          <div className="container d-flex justify-content-center">
            <div className="row">
              <div className="card-col col-sm">
                <div className="card" >
                  <img src={Recipe} className="card-img-top" height={260} alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="card-col col-sm">
                <div className="card" >
                  <img src={Zeal} className="card-img-top" height={260} alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="card-col col-sm">
                <div className="card" >
                  <img src={Tool} className="card-img-top" height={260} alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
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
