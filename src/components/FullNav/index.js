import React, { useState } from "react";
import logo from "../../assets/Glo-glasslogo-3.png";
import "./fullNav.css";
import { NavLink, useLocation, Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import TopSocial from "../TopSocial/TopSocial";
import SlideShow from "../SlideShow";
import MoreDetails from "./MoreDetails";
import { motion } from "framer-motion";
import { variantProps, fullNavImgVariant } from "../variants/varFullNav";

const FullNav = () => {
  const location = useLocation();
  // state
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
      <motion.div
        variants={fullNavImgVariant}
        {...variantProps}
        className="fullNav__imageAndText"
      >
        <Link to="/ng">
          <img src={logo} alt="glo logo" />
        </Link>
        <h6>Nigeria | Unlimited</h6>
      </motion.div>

      <nav className="nav">
        <header className="nav__header">
          {/* <Link to="/ng"> */}
          <img src={logo} alt="glo logo" />
          {/* </Link> */}
          <ul className="nav__body">
            <li>
              <NavLink
                to="/ng"
                className="nav__bodyHome nav__links"
                onMouseEnter={outSideHover}
                activeClassName={
                  location.pathname === "/ng" ? "activeLink" : ""
                }
              >
                <HomeIcon /> <span> Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ng/self-care"
                className="nav__links"
                onMouseEnter={outSideHover}
                activeClassName={
                  location.pathname === "/ng/instant-top-up" ? "activeLink" : ""
                }
              >
                instant top-up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ng/self-care"
                className="nav__links"
                onMouseEnter={outSideHover}
                activeClassName={
                  location.pathname === "/ng/glo-cafe" ? "activeLink" : ""
                }
              >
                glo cafe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ng/personal"
                className="nav__links"
                id="personal"
                onMouseEnter={handleHover}
                activeClassName={
                  location.pathname === "/ng/personal" ? "activeLink" : ""
                }
                // onMouseLeave={outSideHover}
              >
                personal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ng/business"
                className="nav__links"
                id="business"
                onMouseEnter={handleHover}
                activeClassName={
                  location.pathname === "/ng/business" ? "activeLink" : ""
                }
                // onMouseLeave={outSideHover}
              >
                business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ng/vas"
                className="nav__links"
                id="vas"
                onMouseEnter={handleHover}
                activeClassName={
                  location.pathname === "/ng/vas" ? "activeLink" : ""
                }
                // onMouseLeave={outSideHover}
              >
                vas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ng/mobile-money"
                className="nav__links"
                onMouseEnter={outSideHover}
                activeClassName={
                  location.pathname === "/ng/mobile-money" ? "activeLink" : ""
                }
              >
                mobile money
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ng/e-top-up"
                className="nav__links"
                onMouseEnter={outSideHover}
                activeClassName={
                  location.pathname === "/ng/e-top-up" ? "activeLink" : ""
                }
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
