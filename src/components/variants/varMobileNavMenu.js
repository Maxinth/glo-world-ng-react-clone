export const mobileNavMenuVariant = (yCord) => {
  return {
    hidden: {
      y: yCord,
    },

    visible: {
      y: 0,
      transition: {
        type: "tween",
        duration: 2,
      },
    },
  };
};
