// src/components/ParticlesBackground.jsx
import { useEffect } from 'react';
import particlesJS from 'particles.js';

const ParticlesBackground = () => {
  useEffect(() => {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.3 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'repulse' },
        },
      },
    });
  }, []);

  return <div id="particles-js"></div>;
};

export default ParticlesBackground;
