import React from "react"
import Gallery from 'react-photo-gallery'

import profilePic from '../../assets/images/PictureBg/profile_pic.jpg'
import roundTop from '../../assets/images/PictureBg/round_top.jpeg'
import slide2 from '../../assets/images/PictureBg/slide2.jpg'
import slide6 from '../../assets/images/PictureBg/slide6.jpeg'
import peru from '../../assets/images/PictureBg/peru.jpeg'
import raiders from '../../assets/images/PictureBg/raiders.jpeg'

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
      <div className="picture-bg container" id="picture-bg">
        <Gallery photos={photos} id="picture-bg" />
        <Gallery photos={photos2 } id="picture-bg" />
      </div>
    );
  }
}

export default PicturesBg
