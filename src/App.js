import React, { useState, createContext } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
// Site Pages
import Home from "./components/SitePages/Home";
import Personal from "./components/SitePages/Personal/Personal";
import Business from "./components/SitePages/Business/Business";
import Vas from "./components/SitePages/Vas/Vas";
import SelfCare from "./components/SitePages/SelfCare/SelfCare";
import ETopUp from "./components/SitePages/E-TOP-UP/ETopUp";
import MobileMoney from "./components/SitePages/MobileMoney/MobileMoney";
// end of site pages

// common content across MOST pages excluding SelfCare
import TopSection from "./components/TopSection";
import QuickLinks from "./components/QuickLinks/QuickLinks";

// end of common contents

export const TopSectionContext = createContext();

const App = () => {
  const location = useLocation();
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isSettingsToggled, setSettingsToggled] = useState(false);

  const toggleNav = () => setIsMenuToggled(!isMenuToggled);
  const toggleSettings = () => setSettingsToggled(!isSettingsToggled);
  return (
    <div className="App">
      {/* <Router><App /> </Router> - see index.js */}
      {/* common elements on all MOST pages - HEADER PART */}
      {/* don't render TopSection when /ng/self-care is visited */}
      {location.pathname !== "/ng/self-care" && (
        <TopSectionContext.Provider
          value={{
            isMenuToggled,
            isSettingsToggled,
            toggleNav,
            toggleSettings,
          }}
        >
          <TopSection />
        </TopSectionContext.Provider>
      )}
      {/* common elements on all MOST pages - HEADER PART*/}

      <Switch>
        <Route path="/ng/mobile-money">
          <MobileMoney />
        </Route>
        <Route path="/ng/self-care">
          <SelfCare />
        </Route>
        <Route path="/ng/e-top-up">
          <ETopUp />
        </Route>
        <Route path="/ng/vas">
          <Vas />
        </Route>
        <Route path="/ng/business">
          <Business />
        </Route>
        <Route path="/ng/personal">
          <Personal />
        </Route>
        <Route path="/ng" exact>
          <Home />
        </Route>
        <Redirect from="/ng/glo-cafe" to="ng/self-care" />
        <Redirect from="/ng/instant-top-up" to="/ng/self-care" />
        <Redirect from="/" to="/ng" />
      </Switch>

      {/* common elements on all MOST pages - footer PART*/}
      {/* don't render QuickLinks when /ng/self-care is visited */}
      {location.pathname !== "/ng/self-care" && <QuickLinks />}
    </div>
  );
};

export default App;
