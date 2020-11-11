import React, { useState } from "react";
import logo from "../../assets/Glo-glasslogo-3.png";
import "./fullNav.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import TopSocial from "../TopSocial/TopSocial";
import SlideShow from "../SlideShow";
import MoreDetails from "./MoreDetails";
const FullNav = () => {
  const [nav, setNav] = useState({ personal: "", business: "", vas: "" });
  const handleHover = (e) => {
    const newNavState = {
      personal: "",
      business: "",
      vas: "",
      [e.target.id]: e.target.id,
    };
    setNav(newNavState);
  };

  const outSideHover = () => {
    setNav({ personal: "", business: "", vas: "" });
  };
  return (
    <section className="fullNav" onMouseLeave={outSideHover}>
      <div className="fullNav__imageAndText">
        <img src={logo} alt="glo logo" />
        <h6>Nigeria | Unlimited</h6>
      </div>

      <nav className="nav">
        <header className="nav__header">
          <img src={logo} alt="glo logo" />
          <ul className="nav__body">
            <li>
              <NavLink
                to="/"
                className="nav__bodyHome nav__links"
                onMouseEnter={outSideHover}
              >
                <HomeIcon /> <span> Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav__links"
                onMouseEnter={outSideHover}
              >
                instant top-up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav__links"
                onMouseEnter={outSideHover}
              >
                glo cafe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav__links"
                id="personal"
                onMouseEnter={handleHover}
                // onMouseLeave={outSideHover}
              >
                personal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav__links"
                id="business"
                onMouseEnter={handleHover}
                // onMouseLeave={outSideHover}
              >
                business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav__links"
                id="vas"
                onMouseEnter={handleHover}
                // onMouseLeave={outSideHover}
              >
                vas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav__links"
                onMouseEnter={outSideHover}
              >
                mobile money
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav__links"
                onMouseEnter={outSideHover}
              >
                e top-up
              </NavLink>
            </li>
          </ul>
        </header>
      </nav>
      <TopSocial />
      <SlideShow>
        <MoreDetails {...nav} />
      </SlideShow>
    </section>
  );
};

export default FullNav;
