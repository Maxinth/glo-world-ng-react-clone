import React from "react";
import { motion } from "framer-motion";
import { feedBackVariant } from "../variants/varTopSocial";
const FeedBackSlide = ({ feedBack, bgColor }) => {
  return (
    <motion.div
      variants={feedBackVariant(bgColor)}
      initial="hidden"
      animate="visible"
      className="feedBackSlide"
    >
      {feedBack}
    </motion.div>
  );
};

export default FeedBackSlide;
