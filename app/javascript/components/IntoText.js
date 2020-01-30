import React from 'react';
import posed from 'react-pose';
import SplitText from 'react-pose-text';

const Sidebar = posed.div({
  exit: {
    x: '-100%'
  },
  enter: {
    x: '0%',
    beforeChildren: true,
    staggerChildren: 80
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

function introText() {
  return (
    <div className="container">
      <Sidebar className="sidebar" initialPose="exit" pose="enter">
        <h1>
          <SplitText charPoses={charPoses}>My name is Justin Garcia and I am a Web Developer...</SplitText>
        </h1>
      </Sidebar>
    </div>
  );
}

export default introText;
