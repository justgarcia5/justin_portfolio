import React, { useState } from "react"
import Fade from 'react-reveal/Fade';
import RecipeApp from '../components/projects/recipe_app'
import Zeal from '../components/projects/zeal'
import Tool from '../components/projects/tool'
import TradeUp from '../components/projects/trade_up'
import Responsive from '../components/projects/responsive'
import TechTalk from '../components/projects/tech_talk'
import Overtime from '../components/projects/overtime'
import Surfshop from '../components/projects/surfshop'

export default function Projects() {
  return (
    <div className="">
      <div className="projects-div" name="projects" id="projects">
        <Fade right >
          <h2 className="projects-h2 text-center">My Work</h2>
          <hr className="col-sm-4"/>
        </Fade>
        <div className="d-flex justify-content-center mt-5">
          <Fade left >
            <div className="row justify-content-center">
              <Surfshop styles={styles} class="project-cards"/>
              <TradeUp styles={styles} class="project-cards"/>
              <Overtime styles={styles} class="project-cards" />
              <RecipeApp styles={styles} class="project-cards" />
              <Zeal styles={styles} class="project-cards" />
              <Tool styles={styles} class="project-cards" />
              <Responsive styles={styles} class="project-cards" />
              <TechTalk styles={styles} class="project-cards" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

const styles = {
  githubButton: {
    backgroundColor: '#F1502F',
    paddingLeft: 14,
    paddingRight: 14,
  },
  cards: {
    boxShadow: '5px 10px'
  }
}