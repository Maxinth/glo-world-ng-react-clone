import React, { useState } from "react";

// import FullNav from "../FullNav";
// import MobileNav from "../MobileNav";
// // import SlideShow from "../SlideShow";

// import FixedRightBar from "../FixedRightBar/Index";
// // import TopSocial from "../TopSocial/TopSocial";
import Services from "../GloServices/Services";
// import MobileNavMenu from "../MobileNav/MobileNavMenu";
// import MobileTopSocial from "../TopSocial/MobileTopSocial";
import DevicesAndNews from "../DevicesAndNews/DevicesAndNews";
// import QuickLinks from "../QuickLinks/QuickLinks";
function Home() {
  //   const [isMenuToggled, setIsMenuToggled] = useState(false);
  //   const [isSettingsToggled, setSettingsToggled] = useState(false);
  return (
    // <Router>
    <>
      {/* <FixedRightBar />

      <section className="allMobile">
        <MobileNav
          hamburger={isMenuToggled}
          toggleNav={() => setIsMenuToggled(!isMenuToggled)}
          toggleSettings={() => setSettingsToggled(!isSettingsToggled)}
        />
        {isMenuToggled && <MobileNavMenu />}
        {isSettingsToggled && <MobileTopSocial />}
      </section>
      <FullNav /> */}
      {/* <SlideShow /> */}
      <Services />
      <DevicesAndNews />
      {/* <QuickLinks /> */}
    </>
    // </Router>
  );
}

export default Home;
