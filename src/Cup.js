
import posed from 'react-pose';

const Cup = posed.li({

    winner: {
      backgroundColor: "#56f213",
    },
    loser: {
      backgroundColor: "#f11216",
    },
    blank: {
      backgroundColor: "#fffffff",
    },
    focus: {
      backgroundColor: "#12b5f0",
    },
    attention: {
      scale: 1.3,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 0
      }
    },
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 }
  });

  export default Cup;

