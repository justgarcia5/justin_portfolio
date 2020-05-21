import React from "react"
import Fade from 'react-reveal/Fade';

import Recipe from '../images/projects/recipe2.png'
import Tool from '../images/projects/toolshare.png'
import Zeal from '../images/projects/zeal.png'

class Projects extends React.Component {
  render () {
    return (
      <div className="">
        <div className="projects-div" name="projects" id="projects">
          <Fade left delay={600}>
            <h2 className="projects-h2 text-center">My Work</h2>
            <hr className="col-sm-4"/>
          </Fade>
          <div className="d-flex justify-content-center mt-5">
            <div className="row justify-content-center">
              <Fade left delay={400}>
                <div className="card-col m-5">
                  <div className="card hovereffect" >
                    <img src={Recipe} className="card-img-top img-res26nsive" height={280}  alt="..."/>
                    <div className="overlay">
                      <h2>RecipeApp</h2>
                      <div className="d-flex justify-content-center mt-2">
                        <a className="button info mr-3" href="https://blooming-brushlands-16807.herokuapp.com/" target="_blank">Live Demo</a>
                        <a className="button info ml-3" href="https://github.com/justgarcia5/recipe-app" target="_blank">Code <i className="gh fa fa-github fa-lg"></i></a>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="mt-5">
                          <span className="badge badge-info m-2 p-2">React</span>
                          <span className="badge badge-info m-2 p-2">Ruby on Rails</span>
                          <span className="badge badge-info m-2 p-2">PostgreSQL</span>
                          <span className="badge badge-info m-2 p-2">GitHub</span>
                          <span className="badge badge-info m-2 p-2">CSS3</span>
                          <span className="badge badge-info m-2 p-2">Bootstrap</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Recipe App</h5>
                      <p className="card-text">Recipe App was built using React connected to a Ruby on Rails backend. I chose to use a Postgresql database and implement Bootstrap for responsive, mobile-first front-end web development. RecipeApp allows users to search recipes, save favorite recipes, and blog about food, recipes, etc. This project gave me the opportunity to work with JBuilder and go futher in debth with using and understanding React Hooks. </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom delay={200}>
                <div className="card-col m-5">
                  <div className="card hovereffect" >
                    <img src={Zeal} className="card-img-top" height={280}  alt="..."/>
                    <div className="overlay">
                      <h2>Initiative Tracker</h2>
                      <div className="d-flex justify-content-center mt-4">
                        <a className="button info" href="https://github.com/CodingZeal/initiative-tracker"
                        target="_blank">Code <i className="gh fa fa-github fa-lg"></i></a>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="mt-5">
                          <span className="badge badge-info m-3 p-2">Ruby on Rails</span>
                          <span className="badge badge-info m-3 p-2">PostgreSQL</span>
                          <span className="badge badge-info m-3 p-2">RSpec</span>
                          <span className="badge badge-info m-3 p-2">TDD</span>
                          <span className="badge badge-info m-3 p-2">CSS3</span>
                          <span className="badge badge-info m-3 p-2">GitHub</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Initiative Tracker</h5>
                      <p className="card-text">This application was build to help users set and accomplish initiatives and allow interaction between other users to help achieve these initiatives. The Initiative Tracker was built using Ruby on Rails with a Postqresql database. Every feature is provided and delivered with Rspec tesing and all code is analyzed and formatted with RuboCop. </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right delay={400}>
                <div className="card-col m-5">
                  <div className="card hovereffect" >
                    <img src={Tool} className="card-img-top" height={280}  alt="..."/>
                    <div className="overlay">
                      <h2>ToolShare</h2>
                      <div className="d-flex justify-content-center mt-4">
                        <a className="button info" href="https://github.com/team-pacific-drive/ToolShare" target="_blank">Code <i className="gh fa fa-github fa-lg"></i></a>
                      </div>{
                      <div className="d-flex justify-content-center">
                        <div className="mt-5">
                          <span className="badge badge-info m-3 p-2">React</span>
                          <span className="badge badge-info m-3 p-2">Ruby on Rails</span>
                          <span className="badge badge-info m-3 p-2">PostgreSQL</span>
                          <span className="badge badge-info m-3 p-2">CSS3</span>
                          <span className="badge badge-info m-3 p-2">Mob</span>
                          <span className="badge badge-info m-3 p-2">SCRUM</span>
                          <span className="badge badge-info m-3 p-2">TDD</span>
                        </div>
                      </div>}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">ToolShare</h5>
                      <p className="card-text">ToolShare is an application built to connect users looking to rent that one time tool and for users looking to make some cash renting out tools that never get any use. This application was built using React-Rails with a Postgresql database. I implemented a GoogleMaps API for users to seach and list by location and a SMS feature for users.  </p>
                    </div>
                  </div>
                </div>
              </Fade>
              {/* <div className="card-col m-5">
                <div className="card hovereffect" >
                  <img src={Blogit} className="card-img-top" height={280}  alt="..."/>
                  <div className="overlay">
                    <h2>JustBlogIt</h2>
                    <div className="d-flex justify-content-center mt-4">
                      <a className="button info" href="https://github.com/team-pacific-drive/ToolShare" target="_blank">Code <i className="gh fa fa-github fa-lg"></i></a>
                    </div>{
                    <div className="d-flex justify-content-center">
                      <div className="mt-5">
                        <span className="badge badge-info m-3 p-2">React</span>
                        <span className="badge badge-info m-3 p-2">Ruby on Rails</span>
                        <span className="badge badge-info m-3 p-2">PostgreSQL</span>
                        <span className="badge badge-info m-3 p-2">CSS3</span>
                        <span className="badge badge-info m-3 p-2">Mob</span>
                        <span className="badge badge-info m-3 p-2">SCRUM</span>
                        <span className="badge badge-info m-3 p-2">TDD</span>
                      </div>
                    </div>}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">JustBlogIt</h5>
                    <p className="card-text">ToolShare is an application built to connect users looking to rent that one time tool and for users looking to make some cash renting out tools that never get any use. This application was built by myself and three other developers as a final project for the three month boot camp that I attended and completed. During this time I used all of the tools and skills that I aquired throughout this program that include React, Ruby on Rails, TDD, SCRUM, PostgreSQL, and experience working in pairs, sprints, and mobs.  </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects
