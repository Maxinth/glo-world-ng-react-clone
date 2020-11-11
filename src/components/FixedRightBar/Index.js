import React, { useState } from "react";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import WifiRoundedIcon from "@material-ui/icons/WifiRounded";
import LocalAtmRoundedIcon from "@material-ui/icons/LocalAtmRounded";
import "./fixedRight.css";
import { motion } from "framer-motion";
import { fixedBarVariant } from "../variants/fixedBar";
const Index = () => {
  const [bar, setBar] = useState({ topUp: "", data: "", airtime: "" });
  return (
    <section className="fixedBar">
      <motion.div
        variants={fixedBarVariant}
        whileHover="hover"
        onMouseEnter={() => setBar({ airtime: "", data: "", topUp: "topItUp" })}
      >
        <PhoneRoundedIcon />
        <span>{bar.topUp && "Top up"}</span>
      </motion.div>
      <motion.div
        variants={fixedBarVariant}
        whileHover="hover"
        onMouseEnter={() => setBar({ topUp: "", data: "buyData", airtime: "" })}
      >
        <WifiRoundedIcon />
        <span>{bar.data && "buy data"}</span>
      </motion.div>
      <motion.div
        variants={fixedBarVariant}
        whileHover="hover"
        onMouseEnter={() =>
          setBar({ topUp: "", data: "", airtime: "Buy Airtime" })
        }
      >
        <LocalAtmRoundedIcon />
        <span>{bar.airtime && "buy airtime"}</span>
      </motion.div>
    </section>
  );
};

export default Index;
