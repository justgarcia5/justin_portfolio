import React from "react"

class About extends React.Component {
  render () {
    return (
      <div className="about container">
        <div className="row">
          <div className="col-sm">
            <h2>About</h2>
            <hr/>
            <p className="mt-4 text-left">For the duration of my life I’ve have always been very artistic, whether it was drawing with pastels or using water colors, I have always seemed to have a vision of a finished product that was unique and that would stand out from the rest. Since becoming a Web Developer I’ve discovered that I was able to administer these same principles and allow myself to express my artistic side as a developer. With my work experience and my passion to live and breath coding, I believe that I would be a valuable addition to any team!</p>
          </div>
          <div className="col-sm">
          <h2>Skills</h2>
            <hr/>
            <div className="mt-4">
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
            {/* <div>
              <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:10gzBoINW3cLJfZUka8Zoe&size=detail&theme=light" width="300" height="56" scrolling="no" frameBorder="0" allowtransparency="true"></iframe>
            </div> */}
            <br/>
            <iframe src="https://open.spotify.com/embed/album/5eBz5hZihObXdRv0AwH5zB&view=coverart" width="330" height="400" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default About
