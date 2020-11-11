import React from "react";
import { Link } from "react-router-dom";
import "./mobileNavMenu.css";
import { mobileNavData } from "./mobileNavData";
import GenerateList from "./GenerateList";
import { motion } from "framer-motion";
import { mobileNavMenuVariant } from "../variants/varMobileNavMenu";
const MobileNavMenu = () => {
  const {
    voiceData,
    dataPackages,
    devices,
    roaming,
    specialPacks,
    corporatePackages,
    enterpriseSolutions,
    gateway,
    publicSector,
    lifestyle,
    entertainment,
    storage,
    education,
  } = mobileNavData;
  return (
    <motion.section
      variants={mobileNavMenuVariant("-100vh")}
      initial="hidden"
      animate="visible"
      className="mobileNavMenu"
      // exit="onWayOut"
      //   exit={{ x: "-100vw", transition: { type: "tween", duration: 5 } }}
    >
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">INSTANT TOP-UP</Link>
        </li>
        <li>
          <Link to="/">GLO CAFE</Link>
        </li>
        <li>
          <Link to="/">PERSONAL</Link>
        </li>
        <li>
          <Link to="/">VOICE/SMS</Link>
          <GenerateList val={voiceData} />
        </li>

        <li>
          <Link to="/">DATA</Link>
          <GenerateList val={dataPackages} />
        </li>
        <li>
          <Link to="/">DEVICES</Link>
          <GenerateList val={devices} />
        </li>
        <li>
          <Link to="/">ROAMING</Link>
          <GenerateList val={roaming} />
        </li>
        <li>
          <Link to="/">SPECIAL PACKS & OFFERS</Link>
          <GenerateList val={specialPacks} />
        </li>
        <li>
          <Link to="/">BUSINESS</Link>
        </li>
        <li>
          <Link to="/">CORPORATE PACKAGES</Link>
          <GenerateList val={corporatePackages} />
        </li>
        <li>
          <Link to="/">ENTERPRISE SOLUTIONS</Link>
          <GenerateList val={enterpriseSolutions} />
        </li>
        <li>
          <Link to="/">GATEWAY</Link>
          <GenerateList val={gateway} />
        </li>
        <li>
          <Link to="/">PUBLIC SECTORS/SME</Link>
          <GenerateList val={publicSector} />
        </li>
        <li>
          <Link to="/">VAS</Link>
        </li>
        <li>
          <Link to="/">LIFESTYLE</Link>
          <GenerateList val={lifestyle} />
        </li>
        <li>
          <Link to="/">ENTERTAINMENT</Link>
          <GenerateList val={entertainment} />
        </li>
        <li>
          <Link to="/">STORAGE</Link>
          <GenerateList val={storage} />
        </li>
        <li>
          <Link to="/">EDUCATIONAL</Link>
          <GenerateList val={education} />
        </li>
        <li>
          <Link to="/">MOBILE MONEY</Link>
        </li>
        <li>
          <Link to="/">E Top-Up</Link>
        </li>
      </ul>
    </motion.section>
  );
};

export default MobileNavMenu;
