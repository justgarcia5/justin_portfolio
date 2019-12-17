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

// const introText = () => (
//   <h2><SplitText >My name is Justin Garcia and I am a Web Developer...</ SplitText></h2>

// );

// const introText = props => {
//   const text = "My name is Justin Garcia and I am a Web Developer..."
//   const textSplit = text.split('')

//   const delay = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   return textSplit.map((item, index) => (
//     <h2>
//         {item}
//     </h2>
  // ));

  // console.log(textSplit)

  // let loopText = textSplit.forEach((val) => {
  //   return delay(3000).then(() => val);
  // })

  // console.log(loopText)

  // return(
  //   <div>
  //     <h1>{loopText}</h1>
  //   </div>
  // )
// }

export default introText;
