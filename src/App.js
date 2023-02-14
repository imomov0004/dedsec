// import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './style.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from "./components/Pages/Home/Home";

// https://colorhunt.co/palette/222831393e46d65a31eeeeee

function App() {
  /* ------------- PARTICLES JS CONFIG ------------------ */
  const particlesOptions = {
    particles: {
        color: {
          value: "#D65A31",
        },
        links: {
            color: "#D65A31",
            distance: 150,
            enable: true,
        },
        move: {
            enable: true,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 50,
        },
    },
  };
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      // await console.log(container);
  }, []);

  /* ------------- RENDERING ------------------ */
  return (
    <>
      <Particles
          className='particles'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
      />
      <Navigation />
      <Home />
    </>
  );
}

export default App;
