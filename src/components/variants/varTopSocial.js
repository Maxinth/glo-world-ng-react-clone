const iconVariant = (color) => {
  return {
    hidden: {
      // y: 0,
      // height: "initial",
      color: "grey",
    },
    visible: {
      // y: "300px",
      // height: "10vw",
      color: color,
      transition: {
        // type: "tween",
        // duration: 3,
      },
    },
  };
};

export { iconVariant };
