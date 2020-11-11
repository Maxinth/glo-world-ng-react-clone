import React, { useContext } from "react";
import FullNav from "./FullNav";
import MobileNav from "./MobileNav";
import FixedRightBar from "./FixedRightBar/Index";
import MobileNavMenu from "./MobileNav/MobileNavMenu";
import MobileTopSocial from "./TopSocial/MobileTopSocial";
import { TopSectionContext } from "../App";

const TopSection = () => {
  const {
    isMenuToggled,
    toggleNav,
    toggleSettings,
    isSettingsToggled,
  } = useContext(TopSectionContext);
  return (
    <>
      <FixedRightBar />
      <section className="allMobile">
        <MobileNav
          hamburger={isMenuToggled}
          toggleNav={toggleNav}
          toggleSettings={toggleSettings}
        />
        {isMenuToggled && <MobileNavMenu />}
        {isSettingsToggled && <MobileTopSocial />}
      </section>
      <FullNav />
    </>
  );
};

export default TopSection;
