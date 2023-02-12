// import './App.css';
import './style.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';

function App() {
  /* ------------- PARTICLES JS CONFIG ------------------ */
  const particlesOptions = {
    particles: {
        color: {
          value: "#E16428",
        },
        links: {
            color: "#E16428",
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
  return (
    <>
      <Particles
          className='particles'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
      />
    </>
  );
}

export default App;
