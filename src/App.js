import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FullNav from "./components/FullNav";
import MobileNav from "./components/MobileNav";
// import SlideShow from "../SlideShow";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import FixedRightBar from "./components/FixedRightBar/Index";
// import TopSocial from "../TopSocial/TopSocial";
import Services from "./components/GloServices/Services";
import MobileNavMenu from "./components/MobileNav/MobileNavMenu";
import MobileTopSocial from "./components/TopSocial/MobileTopSocial";
import Home from "./components/SitePages/Home";

const App = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isSettingsToggled, setSettingsToggled] = useState(false);
  return (
    <div className="App">
      <Router>
        <FixedRightBar />
        <section className="allMobile">
          <MobileNav
            hamburger={isMenuToggled}
            toggleNav={() => setIsMenuToggled(!isMenuToggled)}
            toggleSettings={() => setSettingsToggled(!isSettingsToggled)}
          />
          {isMenuToggled && <MobileNavMenu />}
          {isSettingsToggled && <MobileTopSocial />}
        </section>
        <FullNav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <QuickLinks />
      </Router>
    </div>
  );
};

export default App;
