import React from "react";
import mobileLogo from "../../../assets/Glo-glasslogo-3.png";
import largerScreensLogo from "../../../assets/login_logo_web.png";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
const SelfCare = () => {
  return (
    <section className="self-care">
      <section className="self-care__img">
        <img src={mobileLogo} alt="glo logo" />
        <img src={largerScreensLogo} alt="glo logo" />
      </section>
      <section className="self-care__form">
        <h3>
          Log in <br /> to your Account
        </h3>
        <form action="/ng/login">
          <PhoneAndroidOutlinedIcon />
          <input type="tel" maxLength="11" />
          <button type="submit">login</button>
        </form>
      </section>
    </section>
  );
};

export default SelfCare;
