export const pageEntryVariant = {
  hidden: {
    // x: viewPortWidth,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },

  //   exit: {
  //     x: "100vw",
  //   },
};

export const slideInFromLeft = {
  hidden: {
    x: "-100vw",
  },

  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
export const slideInFromRight = {
  hidden: {
    x: "100vw",
  },

  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const variantProps = {
  initial: "hidden",
  animate: "visible",
};
