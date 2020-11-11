import React from "react";
import testImage from "../../assets/maxresdefault.jpg";
import "./slideShow.css";
const SlideShow = ({ children }) => {
  return (
    <div className="slideShow">
      <div className="slideShow__imgContainer">
        <img src={testImage} alt="testImage" />

        {children}
      </div>
    </div>
  );
};

export default SlideShow;
