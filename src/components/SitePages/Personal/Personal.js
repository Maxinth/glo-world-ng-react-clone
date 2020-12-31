import React from "react";
import { Link } from "react-router-dom";
import "./personal.css";
import SharedHeader from "../SharedContent/SharedHeader";
import { motion } from "framer-motion";
import { pageEntryVariant, variantProps } from "../../variants/page";
import useDocumentTitle from "../UseTitle";

const Personal = () => {
  useDocumentTitle("Personal");
  return (
    <motion.section
      className="personal"
      variants={pageEntryVariant}
      {...variantProps}
    >
      <SharedHeader heading="personal" />
      <section className="shared__contentContainer">
        <section className="personal__text">
          <p>
            We have ensured you get the best from our diverse mobile solutions
            tailored to you and your desired experiences. From Voice/SMS plans,
            Data Services for High Speed Internet, Mobile Devices, Roaming needs
            to Special Packs, you are assured of innovative experiences that
            gives more you for lesser costs.
          </p>
          <p>
            We pride ourselves as front-liners being First Providers of many
            life enhancing products and services in the telecoms space and with
            exceptional customer service delivery to cater for your queries,
            complaints and resolution of challenges encountered at any point in
            time.
          </p>
          <p>
            From the Launch of Per Second billing in Nigeria to conveniently
            priced data plans, we have done well to remove limits and enable you
            have more.
          </p>
          <p>
            Join Glo today, find solutions that suit you and be “Unlimited”.
          </p>
        </section>
        <nav>
          <ul className="personal__nav">
            <li>
              <Link to="/personal/voice">Voice/SMS Plans</Link>
            </li>
            <li>
              <Link to="/personal/data">Data</Link>
            </li>
            <li>
              <Link to="/personal/devices">Devices</Link>
            </li>
            <li>
              <Link to="/personal/roaming">Roaming</Link>
            </li>
            <li>
              <Link to="/personal/special-packs">Special Pakcs & Offers</Link>
            </li>
          </ul>
        </nav>
      </section>
    </motion.section>
  );
};

export default Personal;
