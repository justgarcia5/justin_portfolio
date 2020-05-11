import React from 'react';
import { Fade } from 'react-reveal';
import Tada from 'react-reveal/Tada';

function introText() {
  return (
    <div className="container-fluid">
      <div>
        <Tada>
          <h1 style={styles.section}>Hello!</h1>
        </Tada>
      </div>
      <div>
        <Fade right delay={2000}>
          <h1 style={styles.section}>My name is Justin Garcia</h1>
        </Fade>
      </div>
      <div >
        <Fade left delay={4000}>
          <h1 style={styles.section}>and I am a Web Developer...</h1>
        </Fade>
      </div>
    </div>
  );
}

export default introText;

const styles = {
  section: {
    margin: 16,
    fontSize: 70,
    fontFamily: "Cinzel",
  }
}
