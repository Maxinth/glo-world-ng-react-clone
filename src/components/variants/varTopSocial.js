const feedBackVariant = (bgColor) => {
  return {
    hidden: {
      // y: 0,
    },
    visible: {
      //   y: "-90vw;",
      backgroundColor: bgColor,
      color: "#fff",
      position: "relative",
      top: "-8px",
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };
};

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

export { feedBackVariant, iconVariant };
