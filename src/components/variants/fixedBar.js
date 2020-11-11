export const fixedBarVariant = {
  //   hidden: {
  //     x: 0,
  //   },

  hover: {
    height: "initial",
    // marginRight: "300px",
    x: "-20vw",
    width: "90vw",
    // position: "relative",
    right: 0,
    transition: {
      type: "spring",
      duration: 1,
      damping: 30,
      stiffness: 70,
      mass: 0.1,
    },
  },
};
