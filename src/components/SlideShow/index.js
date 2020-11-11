import React from "react";
import testImage from "../../assets/maxresdefault.jpg";
import "./slideShow.css";
import { useLocation } from "react-router-dom";
const SlideShow = ({ children }) => {
  const location = useLocation();
  return (
    <div className="slideShow">
      <div className="slideShow__imgContainer">
        {/* show the image only when the homePage is visited */}
        {location.pathname === "/ng" && <img src={testImage} alt="testImage" />}
        {children}
      </div>
    </div>
  );
};

export default SlideShow;
