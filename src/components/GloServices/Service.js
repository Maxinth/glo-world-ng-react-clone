import React from "react";
import { motion } from "framer-motion";
import { serviceVariant } from "../variants/varServices";
const Service = ({ icon, goTo, firstLink, info, finalLinkText }) => {
  return (
    <motion.article
      variants={serviceVariant}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      className="services__ind"
    >
      <span>{icon}</span>

      <header>
        <a href={goTo} title="Instant Top-Up">
          {firstLink}
        </a>
        <p>
          {info}.<a href={goTo}>{finalLinkText}</a>
        </p>
      </header>
    </motion.article>
  );
};

export default Service;
