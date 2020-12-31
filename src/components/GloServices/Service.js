import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  variantProps,
  toggleOpacity,
} from "../variants/page";
const Service = ({
  icon,
  goTo,
  firstLink,
  info,
  finalLinkText,
  serviceIndex,
}) => {
  // dynamically changing variants based on index
  const serviceVariant =
    // (serviceIndex + 1) % 2 === 0 ? slideInFromLeft : slideInFromRight;
    serviceIndex === 0 || serviceIndex === 3
      ? slideInFromLeft
      : serviceIndex === 2 || serviceIndex === 5
      ? slideInFromRight
      : toggleOpacity;

  return (
    <motion.article
      className="services__ind"
      variants={serviceVariant}
      {...variantProps}
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
