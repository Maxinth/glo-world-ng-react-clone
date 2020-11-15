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
          <Link to="/ng/">HOME</Link>
        </li>
        <li>
          <Link to="/ng/self-care">INSTANT TOP-UP</Link>
        </li>
        <li>
          <Link to="/ng/self-care">GLO CAFE</Link>
        </li>
        <li>
          <Link to="/ng/personal">PERSONAL</Link>
        </li>
        <li>
          <Link to="/ng/voice-and-sms">VOICE/SMS</Link>
          <GenerateList val={voiceData} />
        </li>

        <li>
          <Link to="/ng/data">DATA</Link>
          <GenerateList val={dataPackages} />
        </li>
        <li>
          <Link to="/ng/devices">DEVICES</Link>
          <GenerateList val={devices} />
        </li>
        <li>
          <Link to="/ng/roaming">ROAMING</Link>
          <GenerateList val={roaming} />
        </li>
        <li>
          <Link to="/ng/special-packs">SPECIAL PACKS & OFFERS</Link>
          <GenerateList val={specialPacks} />
        </li>
        <li>
          <Link to="/ng/business">BUSINESS</Link>
        </li>
        <li>
          <Link to="/ng/corporate-packages">CORPORATE PACKAGES</Link>
          <GenerateList val={corporatePackages} />
        </li>
        <li>
          <Link to="/ng/enterprise-solution">ENTERPRISE SOLUTIONS</Link>
          <GenerateList val={enterpriseSolutions} />
        </li>
        <li>
          <Link to="/ng/gateway">GATEWAY</Link>
          <GenerateList val={gateway} />
        </li>
        <li>
          <Link to="/ng/public-sector">PUBLIC SECTORS/SME</Link>
          <GenerateList val={publicSector} />
        </li>
        <li>
          <Link to="/ng/vas">VAS</Link>
        </li>
        <li>
          <Link to="/ng/lifestyle">LIFESTYLE</Link>
          <GenerateList val={lifestyle} />
        </li>
        <li>
          <Link to="/ng/entertainment">ENTERTAINMENT</Link>
          <GenerateList val={entertainment} />
        </li>
        <li>
          <Link to="/ng/storage">STORAGE</Link>
          <GenerateList val={storage} />
        </li>
        <li>
          <Link to="/ng/educational">EDUCATIONAL</Link>
          <GenerateList val={education} />
        </li>
        <li>
          <Link to="/ng/mobile-money">MOBILE MONEY</Link>
        </li>
        <li>
          <Link to="/ng/e-top-up">E Top-Up</Link>
        </li>
      </ul>
    </motion.section>
  );
};

export default MobileNavMenu;
