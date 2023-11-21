export const listVariants = {
  visible: (i) => ({
    opacity: 1,
    x: 1,
    transition: {
      delay: i * 0.7,
    },
  }),
  hidden: {
    opacity: 0,
    x: 100,
  },
};

export const questionsVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction < 0 ? -500 : 500,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction < 0 ? 500 : -500,
  }),
};

export const navigationVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -800,
  },
};
