import React from "react";
import mobileLogo from "../../../assets/Glo-glasslogo-3.png";
import largerScreensLogo from "../../../assets/login_logo_web.png";
import phoneImg from "../../../assets/login_ph_bg.png";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import "./selfCare.css";
import Footer from "../../Footer/Footer";
import { motion } from "framer-motion";
const SelfCare = () => {
  return (
    <>
      <section className="selfCare">
        <section className="selfCare__img">
          <img
            src={mobileLogo}
            alt="glo logo"
            className="selfCare__mobileImg"
          />

          <img
            src={largerScreensLogo}
            alt="glo logo"
            className="selfCare__largeScreenOnly"
          />
          <p className="selfCare__text">SelfCare</p>
          <h3>
            Log in <br /> <span>to your Account</span>
          </h3>
          <img
            src={phoneImg}
            alt="phone"
            className="selfCare__largeScreenOnly"
          />
        </section>
        <section className="selfCare__formContainer">
          <div className="selfCare__header">
            <h5>
              <span>Nigeria</span> | <span>Unlimited</span>
            </h5>
          </div>
          <form action="/ng/login" className="selfCare__form">
            <PhoneAndroidOutlinedIcon />

            <input
              type="text"
              maxLength="13"
              minLength="10"
              pattern="[0-9]+"
              placeholder="Enter Mobile Number"
            />
            <button type="submit">Login</button>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { type: "tween", yoyo: Infinity },
              }}
            >
              <ArrowForwardSharpIcon className="selfCare__forwardArrow" />
            </motion.div>
          </form>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default SelfCare;
