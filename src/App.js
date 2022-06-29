import Nav from './components/Layout/Nav';
import Intro from './components/Intro';
import About from './components/About';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Nav />
      <Intro />
      <About />
    </div>
  );
}

export default App;
