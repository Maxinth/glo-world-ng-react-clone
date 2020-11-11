import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { Link } from "react-router-dom";
import "./sharedHeader.css";
const SharedHeader = ({ heading }) => {
  return (
    <header className="shared__header">
      <h2>{heading.toUpperCase()}</h2>
      <span>
        <HomeRoundedIcon />
        <Link to="/ng">Home</Link>
        <ArrowForwardIosRoundedIcon />
        {heading}
      </span>
    </header>
  );
};

export default SharedHeader;
