import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import MenuOpenSharpIcon from "@material-ui/icons/MenuOpenSharp";
import SettingsIcon from "@material-ui/icons/Settings";
import "./mobileNav.css";
const MobileNav = ({ hamburger, toggleNav, toggleSettings }) => {
  return (
    <div className="mobileNav">
      {!hamburger ? (
        <MenuRoundedIcon onClick={toggleNav} />
      ) : (
        <MenuOpenSharpIcon onClick={toggleNav} id="open" />
      )}
      <SettingsIcon onClick={toggleSettings} />
    </div>
  );
};

export default MobileNav;
