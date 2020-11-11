import React from "react";
import TopSocial from "./TopSocial";
import "./mobileTopSocial.css";
import { motion } from "framer-motion";
import { mobileNavMenuVariant } from "../variants/varMobileNavMenu";
const MobileTopSocial = () => {
  return (
    <motion.section
      variants={mobileNavMenuVariant("-10vh")}
      initial="hidden"
      animate="visible"
      className="mobileTopSocial"
    >
      <TopSocial />
    </motion.section>
  );
};

export default MobileTopSocial;
