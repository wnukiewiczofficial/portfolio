import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
export default function ParticleBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            // value: "#000000",
            value: "#f76c6c",
          },
        },
        particles: {
          color: {
            value: "#f8e9a1",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            random: true,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 200,
          },
          opacity: {
            value: { min: 0.4, max: 0.6 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              parallax: {
                enable: true,
                force: 100,
                smooth: 5,
              },
            },
          },
        },
      }}
    />
  );
}
