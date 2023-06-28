const options = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: '#4D4D4E',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: false,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false,
      },
    },
    /*  rotate: {
      value: 0,
      random: true,
      direction: 'clockwise',
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    }, */

    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: ['bubble'],
      },
      onclick: {
        enable: false,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 100,
        size: 7,
        duration: 2,
        opacity: 8,
        speed: 3,
        color: '#00D86C',
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: '#1D1C1C',
    image: '',
    repeat: 'no-repeat',
    size: 'contain',
  },
}

export default options
