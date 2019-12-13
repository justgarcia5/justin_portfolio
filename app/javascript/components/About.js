import React from "react"

class About extends React.Component {
  render () {
    return (
      <div className="about container">
        <div className="row">
          <div className="col-sm">
            <h2>About</h2>
            <hr/>
          </div>
          <div className="col-sm">
            <div>
              <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:10gzBoINW3cLJfZUka8Zoe&size=detail&theme=light" width="300" height="56" scrolling="no" frameBorder="0" allowtransparency="true"></iframe>
            </div>
            <br/>
            <div className="follow">
              <iframe src="https://open.spotify.com/embed/album/5eBz5hZihObXdRv0AwH5zB&view=coverart" width="330" height="400" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
          <div className="col-sm">
            <h2>Skills</h2>
            <hr/>
            <p>JavaScript</p>
            <p>React</p>
            <p>Ruby on Rails</p>
            <p>Bootstrap</p>
            <p>php</p>
            <p>HTML5/CSS3</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About
