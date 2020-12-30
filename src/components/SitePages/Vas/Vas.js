import React from "react";
import SharedHeader from "../SharedContent/SharedHeader";
import "./vas.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageEntryVariant, variantProps } from "../../variants/page";

const Vas = () => {
  return (
    <motion.section
      className="vas"
      variants={pageEntryVariant}
      {...variantProps}
    >
      <SharedHeader heading="vas" />
      <section className="shared__contentContainer">
        <p>
          Our Value Added Services (VAS) offering turns your mobile device
          (Phone/Tablet) into a wonder in your hands where you get everything
          and do many other things but all in one place. From news alerts,
          games, voice portals, learning tools, entertainment apps, health tips,
          sports tips, social media to chat services, your phone becomes an all
          in one device for any thing that matters to you as a lifestyle.
        </p>
        <p>
          To enjoy our value added service, simply subscribe to any of the
          services with a USSD or SMS short code. Terms and conditions apply per
          service. Browse the categories below to learn about our various value
          added services.
        </p>
        <ul className="vas__nav">
          <li>
            <Link to="/ng/vas/lifestyle">Lifestyle</Link>
          </li>
          <li>
            <Link to="/ng/vas/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/ng/vas/storage">Storage</Link>
          </li>
          <li>
            <Link to="/ng/vas/education">Education</Link>
          </li>
        </ul>
      </section>
    </motion.section>
  );
};

export default Vas;
