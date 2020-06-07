import React, { useState } from "react"
import Fade from 'react-reveal/Fade';
import RecipeApp from '../components/projects/recipe_app'
import Zeal from '../components/projects/zeal'
import Tool from '../components/projects/tool'
import TradeUp from '../components/projects/trade_up'
import Responsive from '../components/projects/responsive'
import TechTalk from '../components/projects/tech_talk'

export default function Projects() {
  return (
    <div className="">
      <div className="projects-div" name="projects" id="projects">
        <Fade right delay={200}>
          <h2 className="projects-h2 text-center">My Work</h2>
          <hr className="col-sm-4"/>
        </Fade>
        <div className="d-flex justify-content-center mt-5">
          <Fade left delay={200}>
            <div className="row justify-content-center">
              <TradeUp styles={styles} />
              <RecipeApp styles={styles} />
              <Zeal styles={styles} />
              <Tool styles={styles} />
              <Responsive styles={styles} />
              <TechTalk styles={styles} />
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
  }
}