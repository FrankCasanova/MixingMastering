import { delay } from "framer-motion";

// fadeIn function
export const fadeIn = (direction) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.75,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
      show1: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: 1,
          type: 'tween',
          duration: 1.75,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
      show12: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: 1.2,
          type: 'tween',
          duration: 1.75,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
      show13: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: 1.3,
          type: 'tween',
          duration: 1.75,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
      show14: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: 1.4,
          type: 'tween',
          duration: 1.75,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
      show15: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: 1.5,
          type: 'tween',
          duration: 1.75,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
      show2: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: 2,
          type: 'tween',
          duration: 1.75,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

