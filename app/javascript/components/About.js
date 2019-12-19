import React from "react"

class About extends React.Component {
  render () {
    return (
      <div className="about container d-flex" name="about" id="about" method="post">
        <div className="row">
          <div className="col-sm">
            <h2>About</h2>
            <hr/>
            <p className="mt-5 text-left">For the duration of my life I’ve have always been very artistic, whether it was drawing with pastels or using water colors, I have always seemed to have a vision of a finished product that was unique and that would stand out from the rest. Since becoming a Web Developer I’ve discovered that I was able to administer these same principles and allow myself to express my artistic side as a developer. With my work experience and my passion to live and breath coding, I believe that I would be a valuable addition to any team! When I am not coding you can catch me outside. I love being outdoors, traveling, and eating food!</p>
          </div>
          <div className="col-sm">
          <h2>Skills</h2>
            <hr/>
            <div className="mt-5">
              <p>JavaScript</p>
              <p>React</p>
              <p>Ruby on Rails</p>
              <p>Bootstrap</p>
              <p>php</p>
              <p>HTML5/CSS3</p>
              <p>Postgresql</p>
              <p>MySQL</p>
            </div>
          </div>
          <div className="col-sm">
            <iframe src="https://open.spotify.com/embed/album/5eBz5hZihObXdRv0AwH5zB&view=coverart" width="340" height="450" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default About
