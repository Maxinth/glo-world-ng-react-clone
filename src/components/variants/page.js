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
};

export const slideInFromLeft = {
  hidden: {
    x: "-100vw",
  },

  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 1.5,
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
      duration: 1.5,
    },
  },
};

export const toggleOpacity = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.8,
      delay: 0.2,
    },
  },
};

export const variantProps = {
  initial: "hidden",
  animate: "visible",
};
