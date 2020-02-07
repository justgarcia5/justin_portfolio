import React from "react"
import Gallery from 'react-photo-gallery'

import profilePic from '../images/photos_bg/profile_pic.jpg'
import roundTop from '../images/photos_bg/round_top.jpeg'
import slide2 from '../images/photos_bg/slide2.jpg'
import slide6 from '../images/photos_bg/slide6.jpeg'
import peru from '../images/photos_bg/peru.jpeg'
import raiders from '../images/photos_bg/raiders.jpeg'

class PicturesBg extends React.Component {
  render () {
    const photos = [
      {
        src: roundTop,
        height: 3,
        width: 4
      },

      {
        src: slide2,
        height: 3,
        width: 4
      },
      {
        src: slide6,
        height: 3,
        width: 4
      },
    ]

    const photos2 = [
       {
        src: peru,
        height: 4,
        width: 3
      },
      {
        src: profilePic,
        height: 3,
        width: 4
      },
      {
      src: raiders,
      height: 4,
      width: 3
    }
    ]

    return (
      <div>
        <div className="picture-bg container" id="picture-bg" >
          <Gallery photos={photos}  id="picture-bg"/>
          <Gallery photos={photos2 } id="picture-bg" />
        </div>
        <div className="profile-pic-div">
          <img src={profilePic} className="profile-pic" />
        </div>
      </div>
    );
  }
}

export default PicturesBg
