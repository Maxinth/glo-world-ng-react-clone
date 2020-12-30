export const variantProps = {
  initial: "hidden",
  animate: "visible",
};

export const slideShowVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};
